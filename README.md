# 🫀 ECG Scan

**ECG Scan** is a web-based application designed to capture, process, and analyze electrocardiogram (ECG) images securely. The system extracts waveforms on-device, transmits data for analysis, and matches ECG patterns against a medical database to provide diagnostic insights — all while maintaining compliance with health data regulations.

---

## 🚀 Features

- **📷 ECG Capture & Extraction:** Upload or capture ECG images and extract waveform data directly from the browser or device.  
- **⚙️ Secure Analysis Pipeline:** Transmits ECG data securely to the backend for processing and pattern matching.  
- **📊 Diagnostic Insights:** Compares captured ECG data against a database to generate diagnostic outcomes and visual comparisons.  
- **🌐 Full-Stack Implementation:** Combines a Python (Flask/Django) backend with a modern JavaScript frontend for real-time interaction.  
- **📱 Mobile-Friendly UI:** Responsive design for smooth performance on mobile and desktop devices.  

---

## 🧩 Tech Stack

**Frontend:** React / Next.js (or specify the framework used)  
**Backend:** Python (Flask or Django — specify which)  
**Database:** SQLite / PostgreSQL (specify your DB)  
**Authentication & Security:** HTTPS, JWT, or OAuth (if applicable)  
**Deployment:** Local / Cloud (AWS, Render, etc., if used)

---

## ⚙️ Deployment Instructions

Follow the steps below to run **ECG Scan** locally:

### 🖥️ Backend Setup

```bash
# 1. Navigate to backend folder
cd backend

# 2. Create a virtual environment
python3 -m venv venv      # macOS / Linux
python -m venv venv       # Windows

# 3. Activate the environment
source venv/bin/activate  # macOS / Linux
venv\Scripts\activate     # Windows

# 4. Install dependencies
pip install -r requirements.txt

# 5. Initialize and migrate the database
flask --app run.py db init
flask --app run.py db migrate -m "Initial migration"
flask --app run.py db upgrade

# 6. Run the backend server
python3 run.py
