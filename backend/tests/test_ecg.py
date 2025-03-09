import json
import pytest
from ECGenius.api.ecg_routes import ecg_bp
from ECGenius.services.ecg_service import process_ecg_for_diagnosis
from flask import Flask

@pytest.fixture
def client():
    app = Flask(__name__)
    app.register_blueprint(ecg_bp, url_prefix="/api/ecg")
    app.config["TESTING"] = True
    client = app.test_client()
    return client

def test_classify_ecg_valid_input(client):
    payload = {
        "ecg": [0.1, 0.2, 0.3, 0.4],  
        "sex": "M",
        "age": 45
    }
    response = client.post("/api/ecg/classify", data=json.dumps(payload), content_type="application/json")

    assert response.status_code == 200
    data = response.get_json()
    assert "diagnoses" in data
    assert "lead_highlights" in data

def test_classify_ecg_missing_parameters(client):
    payload = {"ecg": [0.1, 0.2, 0.3, 0.4]}  # Missing 'sex' and 'age'
    response = client.post("/api/ecg/classify", data=json.dumps(payload), content_type="application/json")

    assert response.status_code == 400
    data = response.get_json()
    assert "error" in data

def test_process_ecg_for_diagnosis():
    """Test ECG processing function directly."""
    ecg_data = [0.1, 0.2, 0.3, 0.4]  
    sex = "F"
    age = 60

    result = process_ecg_for_diagnosis(ecg_data, sex, age)

    assert "diagnoses" in result
    assert "lead_highlights" in result
