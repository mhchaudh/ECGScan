import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Paper, Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const ECGResults = () => {
  const { state } = useLocation();
  const results = state?.results;

  if (!results) {
    return (
      <Container sx={{ mt: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom color="text.primary">
            ECG Classification Results
          </Typography>
          <Typography variant="body1" color="text.primary">
            No results available. Please try again.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom color="text.primary">
          ECG Classification Results
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" color="text.primary">
            Diagnoses:
          </Typography>
          <List>
            {Object.entries(results.diagnoses).map(([diag, conf], index) => (
              <ListItem key={index}>
                <ListItemText
                  primaryTypographyProps={{ sx: { color: "text.primary" } }}
                  primary={`${diag}: ${(conf * 100).toFixed(0)}% confidence`}
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ mt: 2 }} color="text.primary">
            Lead Highlights:
          </Typography>
          <List>
            {results.lead_highlights.map((lead, index) => (
              <ListItem key={index}>
                <ListItemText
                  primaryTypographyProps={{ sx: { color: "text.primary" } }}
                  primary={`Lead ${lead[0]}: Start ${lead[1]}, Stop ${lead[2]}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default ECGResults;
