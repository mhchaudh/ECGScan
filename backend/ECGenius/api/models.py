from ECGenius.api import db

# Map Model
class Map(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    identifier = db.Column(db.String(255), nullable=True)
    filename = db.Column(db.String(255), nullable=True)
    display_name = db.Column(db.String(500), nullable=False)
    long = db.Column(db.Float, nullable=False)
    lat = db.Column(db.Float, nullable=False)

   

# Feedback Model
class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    identifier = db.Column(db.String(255), nullable=True)
    filename = db.Column(db.String(255), nullable=True)
    feedback = db.Column(db.String(500), nullable=False)

# Diagnoses Model   
class Diagnoses(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    location = db.Column(db.String(500), nullable=False)
    diagnoses = db.Column(db.String(500), nullable=False)
    