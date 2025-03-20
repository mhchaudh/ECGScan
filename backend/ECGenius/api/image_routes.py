from flask import Blueprint, request, jsonify
import os, base64, uuid
import numpy as np
from PIL import Image, ImageEnhance
import io
from ..utils.image_converter.image_to_sequence import image_to_sequence, convert_image_to_sequence
from ..utils.image_converter.ecg_processing import process_ecg_image
import shutil

image_bp = Blueprint('image_bp', __name__)

@image_bp.route('', methods=['POST'])
def create_image_and_digitize():
    data = request.get_json()
    image_data = data.get('image')
    age_data = data.get('age')
    gender_data = data.get('gender')
    identifier_data = data.get('identifier')
    print(identifier_data)

    # Validate the required fields
    if not image_data:
        return jsonify({'error': 'No image provided'}), 400
    if not identifier_data:
        return jsonify({'error': 'No identifier provided'}), 400
    if not age_data:
        return jsonify({'error': 'No age provided'}), 400
    if not gender_data:
        return jsonify({'error': 'No gender provided'}), 400

    # Remove the header if the image is sent as a data URL
    if "base64," in image_data:
        image_data = image_data.split("base64,")[1]

    try:
        image_bytes = base64.b64decode(image_data)  # Decode the base64 image data
    except Exception as e:
        return jsonify({'error': 'Failed to decode image', 'message': str(e)}), 400

    # Convert the image bytes to a PIL Image
    image_file = io.BytesIO(image_bytes)
    image = Image.open(image_file)

    # Define the path to store the original image
    backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    print(backend_dir)
    identifier_folder = os.path.join(backend_dir, f'{identifier_data}_OriginalImage')
    os.makedirs(identifier_folder, exist_ok=True)  # Ensure the folder exists

    # Generate a unique filename using UUID, age, and gender
    fileuuid = uuid.uuid4().hex
    filename = f"{fileuuid}_{age_data}_{gender_data}"
    filenamejpg = f"{filename}.jpg"
    filepath = os.path.join(identifier_folder, filenamejpg)

    # Convert the image to RGBA and crop the non-white areas
    image = image.convert('RGBA')
    bbox = image.getbbox()
    cropped_image = image.crop(bbox)
    cropped_image_rgb = cropped_image.convert('RGB')  # Convert to RGB for JPEG format
    
   
    contrast_enhancer = ImageEnhance.Contrast(cropped_image_rgb)
    enhanced_image = contrast_enhancer.enhance(1.2)  # Increase contrast
    brightness_enhancer = ImageEnhance.Brightness(enhanced_image)
    enhanced_image = brightness_enhancer.enhance(1.1)  # Increase brightness

    enhanced_image.save(filepath) 
    
    # Convert enhanced image to base64 to send to the frontend
    buffered = io.BytesIO()
    enhanced_image.save(buffered, format="JPEG")
    enhanced_image_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

    image_path = f"{filepath}"
    print(image_path)

    # Process ECG image
    process_ecg_image(image_path, identifier_data, filename)

    # bounded box image in runs/detect/exp
    detect_folder = os.path.join(backend_dir, "runs/detect/exp")
    bounded_box_image_path = None

    # Find the bounded box image in the detect folder
    if os.path.exists(detect_folder) and os.path.isdir(detect_folder):
        for file_name in os.listdir(detect_folder):
            if file_name.lower().endswith(('.png', '.jpg', '.jpeg')):
                bounded_box_image_path = os.path.join(detect_folder, file_name)
                break

    # Check if the bounded box image exists
    if not bounded_box_image_path or not os.path.exists(bounded_box_image_path):
        return jsonify({'error': 'Failed to generate bounded box image'}), 500

    # Enhance the bounded box image
    with open(bounded_box_image_path, "rb") as image_file:
        bounded_box_image = Image.open(image_file)
        contrast_enhancer = ImageEnhance.Contrast(bounded_box_image)
        enhanced_bounded_box_image = contrast_enhancer.enhance(1.2)  # Increase contrast
        brightness_enhancer = ImageEnhance.Brightness(enhanced_bounded_box_image)
        enhanced_bounded_box_image = brightness_enhancer.enhance(1.1)  # Increase brightness
    
        buffered = io.BytesIO()
        enhanced_bounded_box_image.save(buffered, format="JPEG")
        bounded_box_image_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

    # Backup and clean up detection folder
    backup_folder = os.path.join(backend_dir, "backup_detected_images")
    os.makedirs(backup_folder, exist_ok=True)
    shutil.move(bounded_box_image_path, os.path.join(backup_folder, os.path.basename(bounded_box_image_path)))
    shutil.rmtree(detect_folder)

    # Delete the traced model file if it exists
    traced_model_path = os.path.join(backend_dir, "traced_model.pt")
    if os.path.exists(traced_model_path):
        os.remove(traced_model_path)

    # Append gender and age data to the .hea file
    output_path = os.path.join(backend_dir, f"output_{identifier_data}")
    folder_path = os.path.join(output_path, filename)
    file_path = os.path.join(folder_path, 'Q0001.hea')
    with open(file_path, 'a') as file:
        file.write(f"#Age: {age_data}\n")
        file.write(f"#Sex: {gender_data}\n")
        file.write("Dx: Unknown\n")
        file.write("Rx: Unknown\n")
        file.write("Hx: Unknown\n")
        file.write("Sx: Unknown\n")

    return jsonify({
        'message': 'Image uploaded and processed successfully',
        'filename': fileuuid,
        'image': enhanced_image_base64,
        'boundedboximage': bounded_box_image_base64,
        'status': 'Success'
    }), 200
