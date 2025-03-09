import { Container, Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import React from "react";

// I prompted ChatGPT to help refactor the AboutUs component to make it more readable and concise.

function AboutUs() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="md" sx={{ py: 4, backgroundColor: "background.paper", flexGrow: 1 }}>
        {/* Main title */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
          About ECGenius
        </Typography>

        {/* Description */}
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, color: "text.primary" }}>
        ECGenius is an open-source mobile web application designed to aid clinicians and other healthcare professionals in interpreting electrocardiograms (ECGs). ECGScan allows users to upload or capture ECG images, process them on-device, and match the extracted waveforms to a comprehensive database of ECG patterns for diagnostic insights.
        </Typography>

        {/* Team Section */}
        <section>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", mt: 4, color: "primary.main" }}>
            Our Team
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "text.primary" }}>
          ECGenius is developed in collaboration with medical and technology experts to enhance ECG interpretation for clinicians.
          </Typography>

          {/* Project Leads */}
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: "bold", mt: 3, color: "primary.main" }}>
            Project Leads
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "text.primary" }}>
            This project is led by <strong>Dr. Moustafa Abdalla (MD, DPhil)</strong>, a Principal Investigator and Surgeon – Resident Physician at Mass General Hospital, and <strong>Dr. Mohamed Abdalla (PhD)</strong>, an Assistant Professor at the University of Alberta.
          </Typography>

          {/* Development Team */}
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: "bold", mt: 3, color: "primary.main" }}>
            Development Team
          </Typography>
          <List>
            {[
              "Abdullah Faisal",
              "Brandon Dong",
              "Pooja Bhambri",
              "Rithwik Korukonda Bhattar",
              "Mohamed Al-Nassirat",
              "Hassan Chaudhary",
              "Ricardo Garcia",
            ].map((name, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemText primary={<strong style={{ color: "black" }}>{name}</strong>} />
              </ListItem>
            ))}
          </List>
        </section>

        {/* Mission Section */}
        <section>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", mt: 4, color: "primary.main" }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "text.primary" }}>
            Our goal is to improve the efficiency and accuracy of ECG interpretation by utilizing computational techniques to minimize variability and reduce the risk of diagnostic errors.
          </Typography>
        </section>
      </Container>


      {/* Copyright */}
      <Box sx={{ py: 2, backgroundColor: "background.paper", textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          © {new Date().getFullYear()} ECGenius. Open-source under the BSD license.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutUs;