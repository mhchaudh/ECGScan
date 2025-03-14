import random

# Mock function to classify ECG data till client updates
import random

# Mock function to classify ECG data until the client provides a real implementation.
def classify_ecg_function(ecg, sex, age):
    # Asked ChatGPT: create an array of all diagnosis here https://litfl.com/ecg-library/diagnosis/
    diagnoses = [
        # A
        "Accelerated idioventricular rhythm",
        "Accelerated junctional rhythm",
        "Anterior STEMI",
        "Apical hypertrophic cardiomyopathy (AHC)",
        "Arrhythmogenic right ventricular dysplasia",
        "Ashman Phenomenon",
        "Aslanger Pattern (OMI)",
        "Atrial flutter",
        "Atrial fibrillation",
        "Atrial ectopic beat / atrial premature beat",
        "Atrial tachycardia",
        "Automatic junctional tachycardia",
        "AV block: 1st degree",
        "AV block: 2nd degree, Mobitz I (Wenckebach)",
        "AV block: 2nd degree, Mobitz II (Hay)",
        "AV block: 2nd degree, fixed ratio blocks (2:1, 3:1)",
        "AV block: 2nd degree, high grade AV block",
        "AV block: 3rd degree (complete heart block)",
        "AVNRT (AV-nodal re-entry tachycardia)",
        "AVRT (atrioventricular re-entry tachycardia)",
        "Axis Interpretation",
        # B
        "Belhassen type VT",
        "Benign early repolarisation",
        "Beta-blocker toxicity",
        "Bidirectional VT",
        "Bifascicular block",
        "Biventricular enlargement",
        "Biatrial enlargement",
        "Brugada syndrome",
        "Bundgaard syndrome",
        # C
        "Calcium-channel blocker toxicity",
        "Carbamazepine cardiotoxicity",
        "Cardiomyopathy, dilated",
        "Cardiomyopathy, hypertrophic",
        "Cardiomyopathy, restrictive",
        "Chronic obstructive pulmonary disease (COPD)",
        # D
        "Delta wave",
        "De Winter T waves and STEMI",
        "Dextrocardia",
        "Digoxin effect",
        "Digoxin toxicity",
        "Dilated cardiomyopathy",
        # E
        "ECG in Toxicology",
        "Ectopic atrial tachycardia",
        "Electrical alternans",
        "Emphysema",
        "Epsilon wave",
        "Escape rhythms, junctional",
        "Escape rhythms, ventricular",
        # F
        "Fascicular VT",
        "Fusion beats",
        # H
        "High take-off",
        "Hypercalcaemia",
        "Hyperkalaemia",
        "Hyperthyroidism",
        "Hypertrophic cardiomyopathy (HCM)",
        "Hypocalcaemia",
        "Hypokalaemia",
        "Hypomagnesaemia",
        "Hypothermia",
        "Hypothyroidism",
        # I
        "Interventricular Conduction Delay (QRS widening)",
        "Intracranial haemorrhage",
        "Intrinsicoid deflection",
        # J
        "J-point elevation",
        "Jervell and Lange-Nielsen Syndrome (JLNS)",
        "Junctional ectopic beat / junctional premature beat",
        "Junctional escape rhythm",
        "Junctional tachycardia",
        # K
        "Katz-Wachtel phenomenon",
        "Killer ECG Rhythms",
        # L
        "Lateral STEMI",
        "Lead reversals: Limb Lead Reversals (overview)",
        "Lead reversal: Left arm/right arm",
        "Left atrial enlargement",
        "Left anterior fascicular block",
        "Left axis deviation",
        "Left bundle branch block (LBBB)",
        "Left bundle branch block — diagnosing myocardial infarction (Sgarbossa criteria)",
        "Left main coronary artery occlusion (ST elevation in aVR)",
        "Left posterior fascicular block",
        "Left ventricular aneurysm",
        "Left ventricular hypertrophy",
        "Lenègre-Lev disease",
        "Lown-Ganong-Levine syndrome",
        "Low QRS Voltage",
        # M
        "Masquerading Bundle Branch Block (MBBB)",
        "Movement artefact",
        "Multifocal atrial tachycardia",
        "Myocardial ischemia",
        "Myocarditis",
        # N
        "Non-paroxysmal junctional tachycardia",
        # O
        "OMI: Replacing the STEMI misnomer",
        "Osborn wave",
        # P
        "Pacemaker rhythms: Normal pacemaker function",
        "Pacemaker malfunctions: Failure of capture, pacemaker-mediated tachycardia, etc.",
        "Paroxysmal atrial tachycardia (PAT)",
        "Pediatric ECG",
        "Pericardial effusion / tamponade",
        "Pericarditis",
        "Persistent ST elevation (LV aneurysm morphology)",
        "Polymorphic ventricular tachycardia",
        "Poor R wave progression (PRWP)",
        "Posterior STEMI",
        "Preexcitation syndrome",
        "Premature complexes, atrial",
        "Premature complexes, junctional",
        "Premature complexes, ventricular",
        "Pulmonary disease, chronic",
        "Pulmonary embolism",
        # Q
        "QRS widening",
        "QT syndrome – Long (LQTS)",
        "QT syndrome – Short (SQTS)",
        "Quetiapine toxicity",
        # R
        "Raised intracranial pressure",
        "Restrictive cardiomyopathy (myocardial infiltrative disease)",
        "Right atrial enlargement (RAE)",
        "Right axis deviation (RAD)",
        "Right bundle branch block (RBBB)",
        "Right ventricular hypertrophy (RVH)",
        "Right ventricular Infarction",
        "Right ventricular outflow tract (RVOT) tachycardia",
        "Right ventricular strain",
        "Romano-Ward syndrome (LQTS)",
        "R-wave peak time",
        # S
        "Sgarbossa criteria (diagnosing AMI in LBBB)",
        "Shivering artefact",
        "Short QT syndrome",
        "Sinus rhythm",
        "Sinus arrhythmia",
        "Sinus bradycardia",
        "Sinus node dysfunction (Sick sinus syndrome)",
        "Sinus node exit block",
        "Sinus node reentrant tachycardia",
        "Sinus pause / arrest",
        "Sinus tachycardia",
        "Sodium channel blocker overdose",
        "South African Flag Sign",
        "ST elevation in aVR (LMCA/3VD)",
        "STEMI, anterior",
        "STEMI, high lateral",
        "STEMI, inferior",
        "STEMI, lateral",
        "STEMI (old)",
        "STEMI, posterior",
        "STEMI, right ventricular",
        "Subarachnoid haemorrhage",
        "Supraventricular tachycardia (SVT)",
        # T
        "Tako Tsubo Cardiomyopathy",
        "Torsades de Pointes",
        "Tremor artifact",
        "Tricyclic overdose (sodium-channel blocker toxicity)",
        "Triple vessel disease",
        "Trifascicular block",
        # V
        "V1 and V2 Misplacement",
        "Ventricular aneurysm",
        "Ventricular escape rhythm",
        "Ventricular fibrillation",
        "Ventricular flutter",
        "Ventricular ectopics / ventricular premature beats",
        "Ventricular tachycardia: Fascicular VT",
        "Ventricular tachycardia: Monomorphic VT",
        "Ventricular tachycardia: Overview of VT",
        "Ventricular tachycardia: Right Ventricular Outflow Tract (RVOT) tachcyardia",
        "VT versus SVT with aberrancy",
        # W
        "Wellens Syndrome",
        "Wolff-Parkinson White Syndrome",
        # Y
        "Yamaguchi Syndrome"
    ]

    num_diagnoses = min(5, len(diagnoses))
    selected_diagnoses = random.sample(diagnoses, num_diagnoses)
    results = {diag: round(random.uniform(0.2, 0.9), 2) for diag in selected_diagnoses}

    lead_results = [("lead1", 0.1, 0.3), ("lead2", 0.4, 0.6)]
    
    return results, lead_results
