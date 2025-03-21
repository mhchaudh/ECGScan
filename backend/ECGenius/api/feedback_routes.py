from flask import Blueprint, request, jsonify
from ECGenius.api.models import Feedback
from ECGenius.api import db

feedback_bp = Blueprint('feedback_bp', __name__)

@feedback_bp.route('feedback', methods=['POST'])
def add_feedback():
    data = request.get_json()
    if not data or 'feedback' not in data:
        return jsonify({'error': 'No feedback provided'}), 400
    
    feedback_text = data.get('feedback')
    identifier = data.get('identifier')
    filename = data.get('filename')
    new_feedback = Feedback(identifier = identifier, filename = filename, feedback=feedback_text)
    
    try:
        db.session.add(new_feedback)
        db.session.commit()
        return jsonify({'message': 'Feedback added successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500