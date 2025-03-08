from flask import Blueprint, request, jsonify
import os, base64, uuid
import numpy as np
from PIL import Image
import io
from ..utils.image_converter.image_to_sequence import image_to_sequence, convert_image_to_sequence
from ..utils.image_converter.ecg_processing import *

image_bp = Blueprint('image_bp', __name__)

@image_bp.route('', methods=['POST'])  # POST /api/image
def create_image_and_digitize():
    data = request.get_json()
    image_data = data.get('image')
    age_data = data.get('age')
    gender_data = data.get('gender')
    identifier_data = data.get('identifier')
    print(identifier_data)

    if not image_data:
        return jsonify({'error': 'No image provided'}), 400
    if not identifier_data:
        return jsonify({'error': 'No identifier provided'}), 400
    if not age_data:
        return jsonify({'error': 'No age provided'}), 400
    if not gender_data:
        return jsonify({'error': 'No gender provided'}), 400

    # Remove the header if image is sent as a data URL
    if "base64," in image_data:
        image_data = image_data.split("base64,")[1]

    try:
        image_bytes = base64.b64decode(image_data)
    except Exception as e:
        return jsonify({'error': 'Failed to decode image', 'message': str(e)}), 400

    image_file = io.BytesIO(image_bytes)
    image = Image.open(image_file)

    # Define storage paths
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    identifier_folder = os.path.join(base_dir, f'{identifier_data}_OriginalImage')
    os.makedirs(identifier_folder, exist_ok=True)

    # Generate filename
    filename = f"{uuid.uuid4().hex}_{age_data}_{gender_data}.jpg"
    filepath = os.path.join(identifier_folder, filename)

    image = image.convert('RGBA')  # Convert to RGBA to handle transparency
    bbox = image.getbbox()  # Get bounding box of non-white areas
    cropped_image = image.crop(bbox)
    cropped_image_rgb = cropped_image.convert('RGB')  # Convert to RGB before saving as JPEG
    cropped_image_rgb.save(filepath)

    image_path = f"{filepath}/{filename}" 

    process_ecg_image(image_path)

    # Convert cropped image to numpy array for processing
    #img_as_array = np.array(cropped_image)

    #mode = "dark-foreground"
    #method = "all_left_right_neighbors"
    #grid_square_margin = 3
    #plot_result = True

    # Process the image using the image_to_sequence function
    #time_series_data = image_to_sequence(img_as_array, mode, method, grid_square_margin, plot_result,age = age_data, gender = gender_data, identifier = identifier_data)

    return jsonify({'message': 'Image uploaded and processed successfully', 'filename': time_series_data.tolist()}), 200