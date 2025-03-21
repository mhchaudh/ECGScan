from flask import Blueprint, request, jsonify
from ECGenius.api.models import Map
from ECGenius.api import db

map_bp = Blueprint('map_bp', __name__)

@map_bp.route('map', methods=['POST'])
def add_map_details():
    data = request.get_json()
    if not data or 'location' not in data:
        return jsonify({'error': 'No location provided'}), 400
    
    location = data.get('location')
    filename = data.get('filename')
    identifier = data.get('identifier')
    location = data.get('location')
    long = location.get('lon')
    lat = location.get('lat')
    display_name = location.get('display_name')
    
    new_map = Map(
        identifier=identifier,
        filename=filename,
        display_name=display_name,
        long=long,
        lat=lat
    )
    
    try:
        db.session.add(new_map)
        db.session.commit()
        return jsonify({'message': 'Map details added successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    
@map_bp.route('getmap', methods=['GET'])
def get_map_details():
    try:
        # Fetch all map entries from the database
        map_entries = Map.query.all()
        locations = [
            {
                "id": entry.id,
                "identifier": entry.identifier,
                "filename": entry.filename,
                "display_name": entry.display_name,
                "lat": entry.lat,
                "long": entry.long,
            }
            for entry in map_entries
        ]
        return jsonify(locations), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500