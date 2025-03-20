
from flask import Blueprint, request, jsonify
from ECGenius.api import db 

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    identifier = db.Column(db.String(255), nullable=True)
    filename = db.Column(db.String(255), nullable=True)
    feedback = db.Column(db.String(500), nullable=False)
feedback_bp = Blueprint('feedback_bp', __name__)

@feedback_bp.route('', methods=['POST'])
def add_feedback():
    data = request.get_json()
    if not data or 'feedback' not in data:
        return jsonify({'error': 'No feedback provided'}), 400
    
    feedback_text = data['feedback']
    filename = data.get('filename')  
    identifier = data.get('identifier')  
    
    new_feedback = Feedback(identifier = identifier, filename=filename, feedback=feedback_text)
    
    try:
        db.session.add(new_feedback)
        db.session.commit()
        return jsonify({'message': 'Feedback added successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500