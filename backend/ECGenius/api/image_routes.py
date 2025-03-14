from flask import Blueprint, request, jsonify
import os, base64, uuid
import numpy as np
from PIL import Image
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

    # validate the required fields
    if not image_data:
        return jsonify({'error': 'No image provided'}), 400
    if not identifier_data:
        return jsonify({'error': 'No identifier provided'}), 400
    if not age_data:
        return jsonify({'error': 'No age provided'}), 400
    if not gender_data:
        return jsonify({'error': 'No gender provided'}), 400

    # we remove the header if the image is sent as a data url
    if "base64," in image_data:
        image_data = image_data.split("base64,")[1]

    try:
        image_bytes = base64.b64decode(image_data)  # decode the base64 image data
    except Exception as e:
        return jsonify({'error': 'Failed to decode image', 'message': str(e)}), 400

    # convert the image bytes to a PIL Image
    image_file = io.BytesIO(image_bytes)
    image = Image.open(image_file)

    # defining the path to store the original image
    backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    print(backend_dir)
    identifier_folder = os.path.join(backend_dir, f'{identifier_data}_OriginalImage')  
    os.makedirs(identifier_folder, exist_ok=True)  # check if the folder exists

    # we generate a unique filename using the UUID, age, and gender
    filename = f"{uuid.uuid4().hex}_{age_data}_{gender_data}"
    filenamejpg = f"{filename}.jpg"
    filepath = os.path.join(identifier_folder, filenamejpg)

    # convert the image to RGBA and crop the non-white areas
    image = image.convert('RGBA')
    bbox = image.getbbox()
    cropped_image = image.crop(bbox)
    cropped_image_rgb = cropped_image.convert('RGB')  # convert to RGB for JPEG format
    cropped_image_rgb.save(filepath)  # save the image
    enhanced_image = cropped_image_rgb  # Assuming you enhance the image here

    # Convert the enhanced image to base64 to send to frontend
    buffered = io.BytesIO()
    enhanced_image.save(buffered, format="JPEG")
    enhanced_image_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

    image_path = f"{filepath}"
    print(image_path)

    # process the ECG image
    process_ecg_image(image_path, identifier_data, filename)

    # Delete the "runs" folder and "traced_model.pt" file after processing so we can rerun again and again for different ecg images
    runs_path = os.path.join(backend_dir, "runs")
    traced_model_path = os.path.join(backend_dir, "traced_model.pt")
    output_path = os.path.join(backend_dir, f"output_{identifier_data}")
    folder_path = os.path.join(output_path, filename)
    file_path = os.path.join(folder_path, 'Q0001.hea')

    if os.path.exists(runs_path) and os.path.isdir(runs_path):
        shutil.rmtree(runs_path)  
        print(f"Deleted folder: {runs_path}")

    if os.path.exists(traced_model_path) and os.path.isfile(traced_model_path):
        os.remove(traced_model_path)  
        print(f"Deleted file: {traced_model_path}")

    # Append the gender and age data to the .hea file
    with open(file_path, 'a') as file:
        file.write(f"#Age: {age_data}\n")
        file.write(f"#Sex: {gender_data}\n")
        file.write("Dx: Unknown\n")
        file.write("Rx: Unknown\n")
        file.write("Hx: Unknown\n")
        file.write("Sx: Unknown\n")

    return jsonify({
        'message': 'Image uploaded and processed successfully',
        'filename': filenamejpg,
        'image': enhanced_image_base64,
        'status': 'Success'
    }), 200
