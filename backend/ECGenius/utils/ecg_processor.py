import random

# Mock function to classify ECG data till client updates
def classify_ecg_function(ecg, sex, age):
    diagnoses = [
        "Atrial Fibrillation", "Sinus Tachycardia", "Bradycardia",
        "Premature Ventricular Contractions", "Bundle Branch Block",
        "Ventricular Tachycardia", "First-Degree AV Block"
    ]

    
    num_diagnoses = min(5, len(diagnoses))
    selected_diagnoses = random.sample(diagnoses, num_diagnoses)
    results = {diag: round(random.uniform(0.2, 0.9), 2) for diag in selected_diagnoses}

    lead_results = [("lead1", 0.1, 0.3), ("lead2", 0.4, 0.6)]
    
    return results, lead_results
