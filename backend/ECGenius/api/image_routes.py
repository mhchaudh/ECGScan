from flask import Blueprint, request, jsonify
import os, base64, uuid

image_bp = Blueprint('image_bp', __name__)

@image_bp.route('', methods=['POST'])  # POST /api/image 
def create_image():
    data = request.get_json()
    image_data = data.get('image')
    if not image_data:
        return jsonify({'error': 'No image provided'}), 400

    # We want to remove the header as image is sent as a data URL
    if "base64," in image_data:
        image_data = image_data.split("base64,")[1]

    try:
        image_bytes = base64.b64decode(image_data)
    except Exception as e:
        return jsonify({'error': 'Failed to decode image', 'message': str(e)}), 400

    # For now, we will dump the images to a folder for processing, this folder will be meant to be a temporary storage folder where images come in and out of.
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    dump_folder = os.path.join(base_dir, 'imgDump')
    if not os.path.exists(dump_folder):
        os.makedirs(dump_folder)
    # unsure of filename format, uuid for now.
    filename = f"{uuid.uuid4().hex}.png"
    filepath = os.path.join(dump_folder, filename)
    with open(filepath, "wb") as f:
        f.write(image_bytes)

    return jsonify({'message': 'Image uploaded successfully', 'filename': filename}), 200
