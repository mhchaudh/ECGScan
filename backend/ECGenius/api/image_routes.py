from flask import Blueprint, request, jsonify
import os, base64, uuid
import numpy as np
from PIL import Image
import io

from ..utils.image_convertor.image_to_sequence import image_to_sequence

image_bp = Blueprint('image_bp', __name__)

@image_bp.route('', methods=['POST'])  # POST /api/image 
def create_image_and_digitize():
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
    image_file = io.BytesIO(image_bytes)
    image = Image.open(image_file)

    # For now, we will dump the images to a folder for processing, this folder will be meant to be a temporary storage folder where images come in and out of.
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    dump_folder = os.path.join(base_dir, 'imgDump')
    if not os.path.exists(dump_folder):
        os.makedirs(dump_folder)
    
    # unsure of filename format, uuid for now.
    filename = f"{uuid.uuid4().hex}_cropped.jpg"
    filepath = os.path.join(dump_folder, filename)
    
    image = image.convert('RGBA')  # Convert to RGBA to handle transparency
    bbox = image.getbbox()  # Get bounding box of non-white areas
    cropped_image = image.crop(bbox)

# Convert the cropped image to RGB mode before saving as JPEG
    cropped_image_rgb = cropped_image.convert('RGB')

# Save the cropped image to the dump folder in JPEG format
    cropped_image_rgb.save(filepath)

    # Convert cropped image to numpy array for processing
    img_as_array = np.array(cropped_image)

    mode = "dark-foreground"
    method = "all_left_right_neighbors"
    grid_square_margin = 3
    plot_result = True

    # Process the image using the image_to_sequence function
    time_series_data = image_to_sequence(img_as_array, mode, method, grid_square_margin, plot_result)

    return jsonify({'message': 'Image uploaded and processed successfully', 'filename': time_series_data.tolist()}), 200
