import os
import cv2
import numpy as np
import wfdb
import subprocess
from PIL import Image
from .image_to_sequence import image_to_sequence, convert_image_to_sequence
from .utils import parse_yolo_output, crop_leads, remove_markers

# ECG Configuration
LEADS = ["I", "II", "III", "aVR", "aVL", "aVF", "V1", "V2", "V3", "V4", "V5", "V6"]
SAMPLING_RATE = 500  # ECG Sampling Rate
OUTPUT_NAME = "Q0001"  # Default output name for WFDB

def run_yolo_detection(image_path, weights='ECGenius/utils/image_converter/yolov7/yolov7_custom.pt', conf=0.5, img_size=640):
    """Runs YOLOv7 detection on the given ECG image."""
    command = [
        'python3', 'ECGenius/utils/image_converter/yolov7/detect.py', '--weights', weights,
        '--conf', str(conf), '--img-size', str(img_size),
        '--source', image_path, '--save-txt'
    ]
    subprocess.run(command, check=True)

def process_ecg_leads(image_path, output_folder):
    """Runs the entire ECG lead extraction and processing pipeline."""
    run_yolo_detection(image_path)
    
    txt_path = os.path.join("runs/detect/exp/labels/", os.path.basename(image_path).replace('.png', '.txt').replace('.jpg', '.txt'))
    image = Image.open(image_path)
    width, height = image.size
    bounding_boxes = parse_yolo_output(txt_path, width, height)
    
    os.makedirs(output_folder, exist_ok=True)  # Ensure the output folder exists
    cropped_images = crop_leads(image_path, bounding_boxes, output_folder)
    
    for img in cropped_images:
        remove_markers(img)
    
    return cropped_images

def convert_leads_to_wfdb(cropped_images, output_folder):
    """Converts extracted waveform data into WFDB format and saves as .hea file."""
    output_txt = os.path.join(output_folder, 'digitized_ecg_data.txt')
    raw_output_path = os.path.join(output_folder, f"{OUTPUT_NAME}_raw.npy")
    
    os.makedirs(output_folder, exist_ok=True)
    signals = []

    # Extract ECG waveforms from cropped images
    for img_path in cropped_images:
        img_array = np.array(Image.open(img_path)) 
        data = convert_image_to_sequence(img_path)
        signals.append(data)

    print(f"✅ Extracted Signals from {len(cropped_images)} Leads")  # Debugging print

    # Ensures all signals have the same length
    max_length = max(len(sig) for sig in signals)
    signals = [np.pad(sig, (0, max_length - len(sig)), mode='edge') for sig in signals]
    signals = np.array(signals, dtype=np.float32).T  # Convert to NumPy array

    # Saves raw floating-point data
    np.save(raw_output_path, signals)

    # Improved adc_gain calculation (Use 95th percentile)
    adc_gain = np.percentile(np.abs(signals), 95, axis=0) / 1000  
    adc_gain[adc_gain < 1] = 1  

    # Defines baseline
    baseline = np.mean(signals, axis=0).astype(int)

    # Saves to WFDB format
    wfdb.wrsamp(record_name=os.path.join(output_folder, OUTPUT_NAME), fs=SAMPLING_RATE,
                units=["mV"] * len(cropped_images), sig_name=LEADS[:len(cropped_images)],
                p_signal=signals, fmt=["16"] * len(cropped_images),
                adc_gain=adc_gain.tolist(), baseline=baseline.tolist())

    print(f"✅ ECG signals saved as WFDB files in {output_folder}")

def process_ecg_image(image_path, identifier_data, filename):
    base_output_folder = f'output_{identifier_data}'  # Main output folder
    specific_output_folder = os.path.join(base_output_folder, filename)  # Subfolder for this run

    # Ensure both folders exist
    os.makedirs(specific_output_folder, exist_ok=True)

    cropped_images = process_ecg_leads(image_path, specific_output_folder)
    convert_leads_to_wfdb(cropped_images, specific_output_folder)

    print(f"✅ ECG extraction and digitization complete for {identifier_data}, saved in {specific_output_folder}.")


