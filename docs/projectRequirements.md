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
- **ECG (Electrocardiogram)**: A test that records the electrical activity of the heart.
- **Triage**: The process of determining the priority of patients' treatments based on the severity of their condition.
- **Confidence Level**: A probability measure indicating how certain the system is about a particular diagnosis.
- **Waveform Analysis**: The study of ECG signal patterns to detect abnormalities.

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

(Not yet completed)
