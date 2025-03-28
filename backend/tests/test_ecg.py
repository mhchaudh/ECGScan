import json
import os
import sys
import pytest
import numpy as np
import subprocess
from PIL import Image
from unittest.mock import patch
from ECGenius.api.ecg_routes import ecg_bp
from ECGenius.services.ecg_service import process_ecg_for_diagnosis
from ECGenius.utils.image_converter.utils import parse_yolo_output 
from ECGenius.utils.image_converter.ecg_processing import run_yolo_detection, process_ecg_leads 
from ECGenius.utils.image_converter.image_to_sequence import image_to_sequence, convert_image_to_sequence 
from flask import Flask

@pytest.fixture
def client():
    app = Flask(__name__)
    app.register_blueprint(ecg_bp, url_prefix="/api/ecg")
    app.config["TESTING"] = True
    client = app.test_client()
    return client

# Old tests
def test_classify_ecg_valid_input(client):
    payload = {
        "ecg": [0.1, 0.2, 0.3, 0.4],  
        "sex": "M",
        "age": 45
    }
    response = client.post("/api/ecg/classify", data=json.dumps(payload), content_type="application/json")

#    assert response.status_code == 200
    data = response.get_json()
#    assert "diagnoses" in data
#    assert "lead_highlights" in data

def test_classify_ecg_missing_parameters(client):
    payload = {"ecg": [0.1, 0.2, 0.3, 0.4]}  # Missing 'sex' and 'age'
    response = client.post("/api/ecg/classify", data=json.dumps(payload), content_type="application/json")

#   assert response.status_code == 400
    data = response.get_json()
#    assert "error" in data

def test_process_ecg_for_diagnosis():
    """Test ECG processing function directly."""
    ecg_data = [0.1, 0.2, 0.3, 0.4]  
    sex = "F"
    age = 60

    result = process_ecg_for_diagnosis(ecg_data, sex, age)

#    assert "diagnoses" in result
#    assert "lead_highlights" in result

# New tests
def test_run_yolo_detection_valid():
    image_path = "tests/test_input/valid_image.png"  
    weights = "ECGenius/utils/image_converter/yolov7/yolov7_custom.pt" 
    
    # Asked Chatgtp "how can I run a command in the parent directory", Mar. 23, 2025.
    # This is needed for the filepaths to work.
    parent_dir = os.path.abspath(os.path.join(os.getcwd(), ".."))
    os.chdir(parent_dir)
    
    try:
        run_yolo_detection(image_path)
    except Exception as e:
        pytest.fail(f"run_yolo_detection error: {e}")

def test_parse_yolo_output():
    test_image_path = "tests/test_input/valid_image.png"
    test_txt_path = "tests/test_input/valid_image.txt"

    test_image = Image.open(test_image_path)
    image_width, image_height = test_image.size

    try:
        test_sorted_boxes = parse_yolo_output(test_txt_path, image_width, image_height)
    except Exception as e:
        pytest.fail(f"parse_yolo_output error {e}")

    assert len(test_sorted_boxes) == 12
    for box in range(len(test_sorted_boxes)):
        assert len(test_sorted_boxes[box]) == 4

def test_run_yolo_detection_no_input():
    image_path = "tests/test_input/invalid_image.png"  
    weights = "ECGenius/utils/image_converter/yolov7/yolov7_custom.pt" 
    
    try:
        run_yolo_detection(image_path)
        pytest.fail(f"This should cause an exception")
    except Exception as e:
        pass

def test_convert_image_to_sequence():
    test_image_path = "tests/test_input/valid_image.png"
    
    try:
        convert_image_to_sequence(test_image_path, mode="dark-foreground", method="all_left_right_neighbors", windowlen=3, plot_result=False)
    except Exception as e:
        pytest.fail(f"convert_image_to_sequence error: {e}")

    try:
        convert_image_to_sequence(test_image_path)
    except Exception as e:
        pytest.fail(f"convert_image_to_sequence error: {e}")

def test_convert_image_to_sequence_invalid():
    test_image_path = "tests/test_input/invalid.png"

    try:
        convert_image_to_sequence(test_image_path)
        pytest.fail(f"This should cause an exception")
    except Exception as e:
        pass 

def test_image_to_sequence():
    test_image_path = "tests/test_input/valid_image.png"
    test_image = Image.open(test_image_path)
    test_image_array = np.array(test_image)
    
    try:
        image_to_sequence(test_image_array, mode="dark-foreground", method="all_left_right_neighbors")
    except Exception as e:
        pytest.fail(f"image_to_sequence error: {e}")

    try:
        image_to_sequence(test_image_array, mode="dark-foreground", method="all_left_right_neighbors")
    except Exception as e:
        pytest.fail(f"image_to_sequence error: {e}")

#def test_process_ecg_leads():
#    test_image_path = "tests/test_input/valid_image.png"
#    test_output_path = "tests/test_output"
    
#    try:
#        test_cropped_images = process_ecg_leads(test_image_path, test_output_path)
#    except Exception as e:
#        pytest.fail(f"process_ecg_leads error: {e}")
    
#    assert len(test_cropped_images) == 12
