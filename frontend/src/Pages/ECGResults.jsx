import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from "recharts";

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

  const diagnosesData = Object.entries(results.diagnoses).map(([diag, conf]) => ({
    name: diag,
    confidence: (conf * 100).toFixed(0),
  }));


  const leadsData = results.lead_highlights.map(([lead, start, stop]) => ({
    name: `${lead}`,
    start: start,
    stop: stop,
  }));

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
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={diagnosesData} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
              <XAxis 
                dataKey="name" 
                stroke="#8884d8" 
                tick={false} 
                axisLine={{ stroke: "#8884d8" }}
              />
              <YAxis label={{ value: 'Confidence (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="confidence" fill="#8884d8" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ mt: 4 }}>
        <Typography variant="h6" color="text.primary">
          Leads:
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={leadsData} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
            <XAxis 
              dataKey="name" 
              stroke="#82ca9d" 
              angle={-30} 
              textAnchor="end"
              height={80} 
              interval={0}
            />
            <YAxis label={{ value: 'Time', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="start" fill="#8884d8" barSize={50} name="Start Time" />
            <Bar dataKey="stop" fill="#82ca9d" barSize={50} name="Stop Time" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      </Paper>
    </Container>
  );
};

export default ECGResults;
