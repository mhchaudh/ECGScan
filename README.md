# ECGScan

# Deployment Instructions

1. cd backend (go to backend folder)
2. python3 -m venv venv or python -m venv venv (create a virtual environment)
3. source venv/bin/activate (Mac) or venv\Scripts\activate (Windows) (Active your Virtual Environment)
4. pip install -r requirements.txt (install dependencies)
5. flask --app run.py db init
   flask --app run.py db migrate -m "Initial migration"
   flask --app run.py db upgrade    (run these 3 commands to set up the db)
6. python3 run.py (to run the backend)
7. now do cd .. and then cd frontend (to go to the frontend folder)
8. run npm install (to install all dependencies)
9. now do npm run dev(to run the frontend)
10. Now the web app should work locally
