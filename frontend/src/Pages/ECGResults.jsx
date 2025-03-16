import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Paper, Box } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ECGResults = () => {
  const location = useLocation();
  const { uniqueId } = location.state || {}; // Retrieve the uniqueId from navigation state
  const [classificationResult, setClassificationResult] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (uniqueId) {
      // Fetch the classification result from localStorage using the uniqueId
      const result = JSON.parse(localStorage.getItem(`classificationResult_${uniqueId}`));
      setClassificationResult(result);

      // Fetch the image from localStorage using the uniqueId
      const image = localStorage.getItem(`imgData_${uniqueId}`);
      setImageUrl(image);
    }
  }, [uniqueId]);

  if (!classificationResult || !imageUrl) {
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

  // Prepare diagnoses data for the bar chart
  const diagnosesData = Object.entries(classificationResult.diagnoses).map(([diag, conf]) => ({
    name: diag,
    confidence: (conf * 100).toFixed(0),
  }));

  // Prepare leads data for the bar chart
  const leadsData = classificationResult.lead_highlights.map(([lead, start, stop]) => ({
    name: lead, // Lead name (e.g., "I", "II", "V1")
    start: start, // Start time
    stop: stop, // Stop time
  }));

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom color="text.primary">
          ECG Classification Results
        </Typography>

        {/* Diagnoses Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" color="text.primary">
            Diagnoses:
          </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={diagnosesData} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
              <XAxis dataKey="name" stroke="#8884d8" tick={false} axisLine={{ stroke: "#8884d8" }} />
              <YAxis label={{ value: "Confidence (%)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Bar dataKey="confidence" fill="#8884d8" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Leads Section */}
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
              <YAxis label={{ value: "Time (s)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Bar dataKey="start" fill="#8884d8" barSize={50} name="Start" />
              <Bar dataKey="stop" fill="#82ca9d" barSize={50} name="Stop" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Container>
  );
};

export default ECGResults;