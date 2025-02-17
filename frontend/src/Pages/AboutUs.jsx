
// BASIC ABOUT US SECTION


function AboutUs() {
    return (
      <div className="about-us-container">
        <h1 className="about-us-title">About ECGScan</h1>
        <p className="about-us-desc">
          ECGScan is an open-source mobile web application designed to aid clinicians and other healthcare professionals in interpreting electrocardiograms (ECGs).
          ECGScan allows users to upload / capture ECG images, process them on-device, and match the extracted waveforms to a comprehensive database of ECG patterns for diagnostic insights.
        </p>
  
        <h2 className="about-us-subtitle">Our Team</h2>
        <p>
          ECGScan is developed in collaboration with medical and technology experts to enhance ECG interpretation for clinicians.
        </p>
        <h3 className="about-us-subtitle">Project Leads</h3>
        <p>
          This project is led by <strong>Dr. Moustafa Abdalla (MD, DPhil)</strong>, a Principal Investigator and Surgeon – Resident Physician at Mass General Hospital, 
          and <strong>Dr. Mohamed Abdalla (PhD)</strong>, an Assistant Professor at the University of Alberta.
        </p>
        <h3 className="about-us-subtitle">Development Team</h3>
        <ul>
          <li><strong>Abdullah Faisal</strong></li>
          <li><strong>Brandon Dong</strong></li>
          <li><strong>Pooja Bhambri</strong></li>
          <li><strong>Rithwik Korukonda Bhattar</strong></li>
          <li><strong>Mohamed Al-Nassirat</strong></li>
          <li><strong>Hassan Chaudhary</strong></li>
          <li><strong>Ricardo Garcia</strong></li>
        </ul>
  
        <h2 className="about-us-subtitle">Our Mission</h2>
        <p>
        Our goal is to improve the efficiency and accuracy of ECG interpretation by utilizing computational techniques to minimize variability and reduce the risk of diagnostic errors.
        </p>
  
      <p className="copyright-subtitle">
  
      </p>
          © {new Date().getFullYear()} ECGScan. Open-source under the BSD license.
      </div>
  
      
    );
  }
  
  export default AboutUs;