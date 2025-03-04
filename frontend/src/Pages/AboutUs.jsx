import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

function AboutUs() {
  return (
    <Container className="about-us-container" maxWidth="md">
      {/* Main title */}
      <Typography variant="h3" component="h1" className="about-us-title" gutterBottom>
        About ECGScan
      </Typography>
      {/* Description */}
      <Typography variant="body1" className="about-us-desc" paragraph>
        ECGScan is an open-source mobile web application designed to aid clinicians and other healthcare professionals in interpreting electrocardiograms (ECGs).
        ECGScan allows users to upload / capture ECG images, process them on-device, and match the extracted waveforms to a comprehensive database of ECG patterns for diagnostic insights.
      </Typography>
      {/* Subtitle */}
      <Typography variant="h4" component="h2" className="about-us-subtitle" gutterBottom>
        Our Team
      </Typography>
      {/* Team description */}
      <Typography variant="body1" paragraph>
        ECGScan is developed in collaboration with medical and technology experts to enhance ECG interpretation for clinicians.
      </Typography>
      {/* Project Leads */}
      <Typography variant="h5" component="h3" className="about-us-subtitle" gutterBottom>
        Project Leads
      </Typography>
      <Typography variant="body1" paragraph>
        This project is led by <strong>Dr. Moustafa Abdalla (MD, DPhil)</strong>, a Principal Investigator and Surgeon – Resident Physician at Mass General Hospital, 
        and <strong>Dr. Mohamed Abdalla (PhD)</strong>, an Assistant Professor at the University of Alberta.
      </Typography>
      {/* Development Team */}
      <Typography variant="h5" component="h3" className="about-us-subtitle" gutterBottom>
        Development Team
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={<strong>Abdullah Faisal</strong>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<strong>Brandon Dong</strong>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<strong>Pooja Bhambri</strong>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<strong>Rithwik Korukonda Bhattar</strong>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<strong>Mohamed Al-Nassirat</strong>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<strong>Hassan Chaudhary</strong>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<strong>Ricardo Garcia</strong>} />
        </ListItem>
      </List>
      {/* Mission */}
      <Typography variant="h4" component="h2" className="about-us-subtitle" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        Our goal is to improve the efficiency and accuracy of ECG interpretation by utilizing computational techniques to minimize variability and reduce the risk of diagnostic errors.
      </Typography>
      {/* Copyright */}
      <Typography variant="body2" className="copyright-subtitle" paragraph>
        © {new Date().getFullYear()} ECGScan. Open-source under the BSD license.
      </Typography>
    </Container>
  );
}

export default AboutUs;