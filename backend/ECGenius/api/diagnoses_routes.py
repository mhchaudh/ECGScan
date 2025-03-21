from flask import Blueprint, request, jsonify
from ECGenius.api.models import Diagnoses
from ECGenius.api import db
from sqlalchemy import func


diagnoses_bp = Blueprint('diagnoses_bp', __name__)

@diagnoses_bp.route('diagnoses', methods=['POST'])
def add_diagnoses_details():
    data = request.get_json()
    if not data or 'location' not in data:
        return jsonify({'error': 'No location provided'}), 400
    
    location = data.get('location')
    diagnoses = data.get('diagnoses')
    display_name = location.get('display_name')
    
    new_diagnoses = Diagnoses(
      
        location=display_name,
        diagnoses = diagnoses,
    )
       
    
    try:
        db.session.add(new_diagnoses)
        db.session.commit()
        return jsonify({'message': 'Diagnoses details added successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    
@diagnoses_bp.route('getdiagnoses', methods=['GET'])
def get_diagnoses_details():
    try:
        # count the occurrences of each diagnoses for each location
        diagnoses_counts = (
            db.session.query(
                Diagnoses.location,
                Diagnoses.diagnoses,
                func.count(Diagnoses.diagnoses).label("count")
            )
            .group_by(Diagnoses.location, Diagnoses.diagnoses)
            .all()
        )

        result = {}
        for location, diagnosis, count in diagnoses_counts:
            if location not in result:
                result[location] = {}
            result[location][diagnosis] = count

        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500