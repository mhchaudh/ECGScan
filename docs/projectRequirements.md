# ECGscan - Project Requirements Document

## Executive Summary
Our project, **ECGScan**, is designed to act as an ECG report scanner that analyzes printed ECG reports, matches them with similar cases, and provides corresponding conclusions. By using similarity detection technology, the system can offer a probability-based diagnosis. This diagnosis is presented through a report that indicates how closely a given ECG matches a specific condition, along with a confidence level. Additionally, the app provides a list of potential medical conditions with confidence scores, helping users interpret their results more effectively. Metadata, including heart rate and waveform characteristics, is extracted to give a comprehensive overview of the scan.

ECGScan is particularly valuable in settings where only printed ECG reports are available, serving as a rapid assessment tool to support triage system decisions. By quickly identifying whether a case is potentially critical, ECGScan can enhance efficiency, particularly in environments where resources are limited. The user interface (UI) is designed to be simple and intuitive, ensuring accessibility for a wide range of users, including non-English speakers.

### How the App Works:
1. The user **scans an ECG report** (via photo or upload).
2. The app **processes the image** and runs it through a **matching algorithm**.
3. It returns **similar diagnoses** along with the **confidence level**.


## Project Overview
### Problem Statement
- Many **medical facilities rely on paper ECG reports**, making it difficult to leverage modern AI-driven diagnostic tools.
- Quick **triage decisions** are essential, especially in high-volume or resource-limited settings.

### Value Proposition
- Provides **automated analysis** of ECG reports.
- Assists **triage nurses and doctors** in **prioritizing patients**.
- **Works offline**, making it useful in **low-resource settings**.

### Target Users
- **Doctors, nurses, and medical professionals** in clinics, hospitals, and field settings.
- **Medical researchers** interested in ECG analysis trends.
- **Non-English speakers** who need a simple and intuitive tool.

### Usage
- Users **scan/upload** an ECG report.
- The app **analyzes and matches** the report with existing data.
- The user receives **similar cases and potential diagnoses**.

---

## Project Glossary
- **ECG (Electrocardiogram)**: A group of sensors that records the electrical activity of the heart. ECGscan processes paper-based ECG reports by digitizing them and extracting key features such as waveforms, heart rate, and abnormalities. The system works with 12-lead ECGs, capturing a 12-channel signal, and can analyze ECGs of varying lengths, typically a few seconds to several minutes depending on the quality and source of the scanned report.
- **Triage**: The process of prioritizing patients based on the severity of their condition. ECGscan supports triage by quickly identifying potentially critical cases through automated ECG analysis and similarity scoring.
- **Confidence Level**: A probability measure indicating how certain the system is about a particular diagnosis. It is represented as a percentage score (e.g., "This ECG report matches X diagnosis with 85% confidence"). The confidence score is calculated based on a pattern-matching algorithm trained on a diverse ECG dataset.
- **Waveform Analysis**: The study of ECG signal patterns to detect abnormalities. ECGscan extracts waveforms from scanned ECG reports and analyzes them for deviations, including arrhythmias, ischemic events, conduction disorders, and other cardiac irregularities.

- **Similarity Score & Matching Algorithm**:
ECGscan will employ image-based ECG digitization and a pattern-matching algorithm that:

1. Matches extracted data from ECG images against a large database of labeled ECGs.
2. Returns a similarity score, indicating how closely the scanned ECG resembles stored cases, and the algorithm's confidence level.
3. Lists potential diagnoses, ranked by confidence level.
4. The algorithm will be trained on a diverse ECG database, including historical patient records and medically annotated ECG datasets, to enssure accurate classification.

### **Metadata**
Additional extracted data from the scanned ECG report, which may include:

- **Heart rate** (e.g., beats per minute)
- **Waveform features** (P-wave, QRS complex, T-wave)
- **Lead configurations** (e.g., standard 12-lead setup)
- **Potential diagnosis labels** (if available from previous records)
- **Image quality metrics** (e.g., noise level, clarity of waveform detection)

### **Similarity Score & Matching Algorithm**
ECGscan includes an **AI-driven ECG pattern-matching algorithm** that:

1. **Extracts key features from the scanned ECG report**.
2. **Compares the extracted waveform with a curated ECG database**.
3. **Lists potential diagnoses, ranked by confidence level**.

The algorithm has been trained on **a diverse ECG database**, including historical patient records and medically annotated ECG datasets, ensuring accurate classification.

### **Settings (as referenced in US 05.02.04 - Could-Do)**
Configurable parameters within **ECGscan**, allowing healthcare providers to customize system behavior. These settings include:

- **Image processing adjustments** (e.g., contrast enhancement, noise reduction)
- **Confidence threshold customization** (to adjust sensitivity)
- **Display options** (waveform scaling, layout preferences)
- **Localization settings** (support for non-English users)

### **Reset to Default Option**
The system also includes a **"Reset to Default" option**, which:

- **Prompts the user with a confirmation dialog before resetting**.
- **Displays a success message upon completion**..




---

## User Stories
User stories are formulated using the standard notation:
> *As a [persona], I [want to], [so that].*

### Sample User Stories:
1. **As a doctor**, I want to scan an ECG report, so that I can receive an automated diagnosis suggestion.
2. **As a nurse**, I want a confidence score for each suggested diagnosis, so that I can prioritize critical patients.
3. **As a non-English speaking healthcare worker**, I want a simple and intuitive UI, so that I can use the app without language barriers.

All other user stories can be found under the Issues tab on Github.

### Acceptance Tests:
- The app **correctly identifies** key ECG waveforms from uploaded images.
- The confidence score is **accurate within an acceptable range**.
- The UI is **usable without needing extensive training**.

### MoSCoW Prioritization:
- **Must Have**: Image processing, ECG pattern matching, confidence score.
- **Should Have**: Localization for non-English users.
- **Could Have**: Integration with existing EMR systems.
- **Won’t Have**: Real-time ECG signal acquisition (initially).

---
## Similar Products

While developing **ECGScan**, we reviewed several existing products that align with its goals and examined their approaches to ECG scanning, analysis, and diagnosis. These products provided valuable insights into various techniques for ECG interpretation, image processing, and machine learning applications for medical diagnostics.

### Competitive Products

1. **AcqKnowledge by BIOPAC** ([Site](https://www.biopac.com/knowledge-base/ecg-analysis/)) - A comprehensive software suite for acquiring, analyzing, and visualizing various forms of physiological data, including ECG signals. It includes features for identifying and marking points of the ECG complex. However, its primary use case is for research and clinical settings rather than rapid analysis of printed ECG reports.

2. **PMcardio by Powerful Medical** ([Site](https://www.powerfulmedical.com/)) - **PMcardio** uses AI to analyze ECG images and provide diagnostic insights. Its key similarity to **ECGScan** is its ability to read and process printed ECG scans, making it a useful reference in developing our image-processing pipeline.

3. **ECG Buddy** ([Site](https://www.ecgbuddy.ai/en)) - A simple app designed to help medical professionals interpret ECG scans. Although **ECG Buddy** does not provide automated scanning of ECG reports, it serves as a reference for user interface design and ECG visualization techniques.

### Open-Source References

- **BioSig Project** ([Site](https://biosig.sourceforge.net/projects.html)) - An open-source library for reading ECG signals. Its features include the ability to translate ECG analysis results into different languages, which aligns with our goal of accessibility in developing **ECGScan**.

- **NeuroKit2** ([GitHub](https://neuropsychology.github.io/NeuroKit/)) - A Python package for biomedical signal processing capable of working with raw ECG data. This can serve as a reference for feature extraction and pattern recognition.

- **ECGMiner** ([Article](https://www.sciencedirect.com/science/article/pii/S016926072400049X), [GitHub](https://github.com/adofersan/ecg-miner)) - A tool focused on ECG data mining and analysis, offering potential insights into pattern recognition methods that could enhance **ECGScan**'s capabilities.

### Relevant Articles

- **ECG Signal Feature Extraction Trends in Methods and Applications** ([Site](https://biomedical-engineering-online.biomedcentral.com/articles/10.1186/s12938-023-01075-1)) - This article discusses various techniques for ECG feature extraction, which can be incorporated into the development of our model.

- **A Data Pipeline for Extraction and Processing of Electrocardiogram Recordings** ([Journal](https://www.cinc.org/2021/Program/accepted/228_Preprint.pdf)) - This paper explores methods for preprocessing and extracting information from ECG data, which can inform the structure of our system’s data pipeline.

---

# Technical Resources

### Useful Libraries and Frameworks

- **ECG Image Digitizer** ([GitHub](https://github.com/alphanumericslab/ecg-image-kit/tree/main/codes/ecg-image-digitizer/roi)) - A Python-based implementation for detecting boundary boxes around different leads in ECG images and extracting the ECG time series for each lead. This tool will be useful for digitizing printed ECGs.

- **ECG Image To Sequence** ([GitHub](https://github.com/alphanumericslab/ecg-image-kit/blob/main/codes/ecg-image-digitizer/image_to_sequence.m)) - A MATLAB-based implementation for extracting ECG signals once they have been detected. This tool will be useful in converting ECG scans into digitized ECG signals.

- **ECG Image Kit** ([GitHub](https://github.com/alphanumericslab/ecg-image-kit)) - A toolkit capable of digitizing paper ECGs. However, it requires an additional image-scanning library for real-world implementation.

- **OpenCV** ([Website](https://opencv.org/)) – A library used for real-time image preprocessing. We can utilize OpenCV for detecting key features and characteristics in ECG scans, such as waveform segmentation and feature extraction.

- **TensorFlow** ([Website](https://www.tensorflow.org/)) – A machine learning framework that can be used to train models for ECG pattern recognition, anomaly detection, and classification.

## Development Resources

ECGscan follows an N-Tier architecture with Flask as the backend framework and React as the frontend UI layer. Below is a comprehensive list of technologies, frameworks, and references that will guide the implementation.

---

### Backend Architecture (N-Tier)

ECGscan's backend follows a **3-layer N-Tier architecture**:

- **Controller Layer** - Handles HTTP requests, input validation, and directs calls to the service layer.
- **Service Layer** - Contains business logic only.
- **Repository Layer** - Handles database interactions and abstracts data access logic.

#### **Backend Frameworks & Design Patterns**
- **[Flask](https://flask.palletsprojects.com/)** – Microservice-friendly framework for handling API requests.
- **[Flask Project Structure Guide](https://medium.com/@andrew.hrimov/flask-project-structure-template-c4337b60a410)** – Best practices for structuring Flask apps with N-Tier architecture.
- **[FastAPI (Optional)](https://fastapi.tiangolo.com/)** – Alternative async API option if Flask performance is a concern.
- **[N-Tier Architecture Guide (.NET)](https://dev.to/dotnetfullstackdev/layered-n-tier-architecture-in-net-core-51ic)** – General industry standard reference for N-Tier design.

---

### Frontend (React-based UI)

ECGscan’s frontend will use **React.js** to build a fast, responsive interface for users.

#### **Frontend Technologies**
- **[React.js](https://react.dev/)** – Frontend framework for UI.
- **[Next.js (Optional)](https://nextjs.org/)**

---

### Machine Learning & AI for ECG Classification

- **[PyTorch](https://pytorch.org/)** – Used for deep learning models.
- **[NeuroKit2](https://neurokit2.readthedocs.io/en/latest/)** – Extracts HRV, QRS complex, and ECG waveforms.
- **[OpenCV](https://docs.opencv.org/)** – Image preprocessing for digitizing ECG scans.
- **[Alphanumerice GitHub](https://github.com/Alphanumerice-ECG-Digitizer)** – Source code for the digitization pipeline.
    - Converts printed ECG waveforms into digital signals.
    - Extracts waveform data, heart rate, and time intervals.
    - Enables ECG data to be processed, analyzed, and stored for further evaluation.

---

### Deployment

- **[Cybera](https://www.cybera.ca/)** – Cloud hosting provider for deploying ECGscan’s backend and AI models.