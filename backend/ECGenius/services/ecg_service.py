from ..utils.ecg_processor import classify_ecg_function

# Entry point for calling classify_ecg_function(ecg, sex, gender)
def process_ecg_for_diagnosis(ecg, sex, age):
    diagnoses, lead_info = classify_ecg_function(ecg, sex, age)

    return {
        "diagnoses": diagnoses,
        "lead_highlights": lead_info
    }
