from flask import Blueprint, request, jsonify
import os
import base64
from ECGenius.api import db

ecgresults_bp = Blueprint('ecgresults_bp', __name__)

@ecgresults_bp.route('ecgresults', methods=['POST'])
def get_highlighted_image():
    data = request.get_json()
    filename = data.get('filename')

    if not filename:
        return jsonify({'error': 'Filename is required'}), 400
    backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    highlighted_images_folder = os.path.join(backend_dir, "highlighted_images")

    image_filename = f"{filename}_bbox.png"
    image_path = os.path.join(highlighted_images_folder, image_filename)

    if not os.path.exists(image_path):
        return jsonify({'error': 'Image not found'}), 404
    try:
        with open(image_path, "rb") as image_file:
            image_data = base64.b64encode(image_file.read()).decode('utf-8')
    except Exception as e:
        return jsonify({'error': 'Failed to read image', 'message': str(e)}), 500
    return jsonify({
        'message': 'Image retrieved successfully',
        'image': image_data,
        'status': 'Success'
    }), 200