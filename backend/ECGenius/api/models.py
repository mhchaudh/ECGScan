from ECGenius.api import db

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    identifier = db.Column(db.String(255), nullable=True)
    filename = db.Column(db.String(255), nullable=True)
    feedback = db.Column(db.String(500), nullable=False)
    age = db.Column(db.Integer,  nullable=True)
    gender = db.Column(db.String(255), nullable=True)
