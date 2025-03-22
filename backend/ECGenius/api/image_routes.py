from flask import Blueprint, request, jsonify
import os, base64, uuid
import numpy as np
from PIL import Image, ImageEnhance, ImageDraw
import io
from ..utils.image_converter.image_to_sequence import image_to_sequence, convert_image_to_sequence
from ..utils.image_converter.ecg_processing import process_ecg_image
import shutil
import random

image_bp = Blueprint('image_bp', __name__)

@image_bp.route('image', methods=['POST'])
def create_image_and_digitize():
    data = request.get_json()
    image_data = data.get('image')
    age_data = data.get('age')
    gender_data = data.get('gender')
    identifier_data = data.get('identifier')
    
    if not image_data:
        return jsonify({'error': 'No image provided'}), 400
    if not identifier_data:
        return jsonify({'error': 'No identifier provided'}), 400
    if not age_data:
        return jsonify({'error': 'No age provided'}), 400
    if not gender_data:
        return jsonify({'error': 'No gender provided'}), 400

    if "base64," in image_data:
        image_data = image_data.split("base64,")[1]

    try:
        image_bytes = base64.b64decode(image_data)  # Decode the base64 image data
    except Exception as e:
        return jsonify({'error': 'Failed to decode image', 'message': str(e)}), 400

    # Convert to a PIL Image
    image_file = io.BytesIO(image_bytes)
    image = Image.open(image_file)

    # Define the path to store the original image
    backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    identifier_folder = os.path.join(backend_dir, f'{identifier_data}_OriginalImage')
    os.makedirs(identifier_folder, exist_ok=True)  

    # Generate a unique filename using UUID, age, and gender
    fileuuid = uuid.uuid4().hex
    filename = f"{fileuuid}_{age_data}_{gender_data}"
    filenamejpg = f"{filename}.jpg"
    filepath = os.path.join(identifier_folder, filenamejpg)

    # Convert the image to RGBA and crop non-white areas
    image = image.convert('RGBA')
    bbox = image.getbbox()
    cropped_image = image.crop(bbox)
    cropped_image_rgb = cropped_image.convert('RGB')  
    
    # Enhance the image
    contrast_enhancer = ImageEnhance.Contrast(cropped_image_rgb)
    enhanced_image = contrast_enhancer.enhance(1.2)  # Increase contrast
    brightness_enhancer = ImageEnhance.Brightness(enhanced_image)
    enhanced_image = brightness_enhancer.enhance(1.2)  # Increase brightness

    enhanced_image.save(filepath) 
    
    # Convert enhanced image to base64 to send to the frontend
    buffered = io.BytesIO()
    enhanced_image.save(buffered, format="JPEG")
    enhanced_image_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

    image_path = f"{filepath}"

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

    # Define the path for the highlighted images folder
    highlighted_images_folder = os.path.join(backend_dir, "highlighted_images")
    os.makedirs(highlighted_images_folder, exist_ok=True)

    # Highlight random ECG sections
    base_name = os.path.splitext(os.path.basename(bounded_box_image_path))[0]
    yolo_txt_path = os.path.join(detect_folder, "labels", base_name + ".txt")
    highlighted_image_path = os.path.join(highlighted_images_folder, f"{fileuuid}_bbox.png")
    highlight_random_ecg_sections(bounded_box_image_path, yolo_txt_path, highlighted_image_path)

    # Enhance the highlighted bounded box image
    with open(highlighted_image_path, "rb") as image_file:
        highlighted_image = Image.open(image_file)
        contrast_enhancer = ImageEnhance.Contrast(highlighted_image)
        enhanced_highlighted_image = contrast_enhancer.enhance(1.2)  # Increase contrast
        brightness_enhancer = ImageEnhance.Brightness(enhanced_highlighted_image)
        enhanced_highlighted_image = brightness_enhancer.enhance(1.1)  # Increase brightness
    
        buffered = io.BytesIO()
        enhanced_highlighted_image.save(buffered, format="PNG")
        highlighted_image_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

    # Clean up detection folder
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
        'boundedboximage': highlighted_image_base64,
        'status': 'Success'
    }), 200


# Mock function to highlight relevant ECG leads for diagnosis until the client provides a real implementation.
def highlight_random_ecg_sections(image_path, yolo_txt_path, output_path):
    """
    Highlights random sections on the ECG image using YOLOv7 bounding boxes.
    """
    
    colors = ["red", "green", "blue", "yellow", "purple"]
    
    image = Image.open(image_path).convert("RGB")
    draw = ImageDraw.Draw(image)
    img_width, img_height = image.size

    boxes_by_lead = []
    with open(yolo_txt_path, 'r') as f:
        for line in f:
            parts = line.strip().split()
            if len(parts) < 5:
                continue
            class_id, x_center, y_center, box_width, box_height = map(float, parts[:5])
            x_center *= img_width
            y_center *= img_height
            box_width *= img_width
            box_height *= img_height
            x0 = int(x_center - box_width / 2)
            y0 = int(y_center - box_height / 2)
            x1 = int(x_center + box_width / 2)
            y1 = int(y_center + box_height / 2)
            boxes_by_lead.append((x0, y0, x1, y1))

    if not boxes_by_lead:
        print("⚠️ No bounding boxes found.") # Testing output
        return

    # Randomly highlight at least one lead
    num_boxes_to_highlight = min(5, len(boxes_by_lead))
    selected_indices = random.sample(range(len(boxes_by_lead)), num_boxes_to_highlight)

    for i, idx in enumerate(selected_indices):
        x0, y0, x1, y1 = boxes_by_lead[idx]
        width = x1 - x0
        new_width = random.randint(int(width * 0.1), int(width * 0.4))
        x_start = random.randint(x0, x1 - new_width)
        x_end = x_start + new_width
        draw.rectangle([x_start, y0, x_end, y1], outline=colors[i % len(colors)], width=3)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    image.save(output_path)
    print(f"✅ Highlighted ECG image saved at: {output_path}") # Testing output