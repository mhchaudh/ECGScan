from flask import Blueprint, request, jsonify
import os, base64, uuid
import numpy as np
from PIL import Image
import io
from ..utils.image_converter.image_to_sequence import image_to_sequence, convert_image_to_sequence
from ..utils.image_converter.ecg_processing import process_ecg_image
import shutil  # To remove folders/files

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
    backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    print(backend_dir)
    identifier_folder = os.path.join(backend_dir, f'{identifier_data}_OriginalImage')  
    os.makedirs(identifier_folder, exist_ok=True)  # Ensure folder exists

    # Generate filename
    filename = f"{uuid.uuid4().hex}_{age_data}_{gender_data}"
    filenamejpg = f"{filename}.jpg"
    filepath = os.path.join(identifier_folder, filenamejpg)

    image = image.convert('RGBA')  # Convert to RGBA to handle transparency
    bbox = image.getbbox()  # Get bounding box of non-white areas
    cropped_image = image.crop(bbox)
    cropped_image_rgb = cropped_image.convert('RGB')  # Convert to RGB before saving as JPEG
    cropped_image_rgb.save(filepath)

    image_path = f"{filepath}" 
    print(image_path)

    process_ecg_image(image_path, identifier_data, filename)

    # Cleanup: Delete the "runs" folder and "traced_model.pt" file after processing
    runs_path = os.path.join(backend_dir, "runs")
    traced_model_path = os.path.join(backend_dir, "traced_model.pt")

    if os.path.exists(runs_path) and os.path.isdir(runs_path):
        shutil.rmtree(runs_path)  # Remove "runs" folder
        print(f"Deleted folder: {runs_path}")

    if os.path.exists(traced_model_path) and os.path.isfile(traced_model_path):
        os.remove(traced_model_path)  # Remove "traced_model.pt"
        print(f"Deleted file: {traced_model_path}")

    return jsonify({
        'message': 'Image uploaded and processed successfully',
        'filename': filenamejpg,
        'status': 'Success'
    }), 200
