from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()  

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///feedback.db'  
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)  
    
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    from ECGenius.api.image_routes import image_bp
    from ECGenius.api.ecg_routes import ecg_bp
    from ECGenius.api.feedback_routes import feedback_bp
    
    app.register_blueprint(image_bp, url_prefix='/api/image')
    app.register_blueprint(ecg_bp, url_prefix='/api/ecg')
    app.register_blueprint(feedback_bp, url_prefix='/api/feedback')
    
    with app.app_context():
        db.create_all()  

    return app

