from flask import Flask
from flask_cors import CORS
from ECGenius.api.image_routes import image_bp

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    app.register_blueprint(image_bp, url_prefix='/api/image')
    return app
