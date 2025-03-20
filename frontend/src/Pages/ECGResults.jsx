import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Paper, Box, Radio, RadioGroup, FormControlLabel, TextField, Button } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ECGResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); 
  const uniqueId = searchParams.get("uniqueId"); 
  const filename = searchParams.get("filename");
  const identifier = searchParams.get("identifier"); 

  const [classificationResult, setClassificationResult] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [otherFeedback, setOtherFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL; // Get API URL
  useEffect(() => {
    if (uniqueId) {
      const result = JSON.parse(localStorage.getItem(`classificationResult_${uniqueId}`));
      setClassificationResult(result);
    
      const image = localStorage.getItem(`imgData_${uniqueId}`);
      setImageUrl(image);

      const savedFeedback = localStorage.getItem(`feedback_${uniqueId}`);
      if (savedFeedback) {
        setFeedback(savedFeedback);
        setSubmittedFeedback(true);
      }
    }
  }, [uniqueId]);

  const handleSubmitFeedback = async () => {
    const finalFeedback = feedback === "Other" ? otherFeedback : feedback; 

    try {
      const feedbackData = {
        feedback: finalFeedback,
        filename: filename,
        identifier: identifier,
      };

      const response = await fetch(`${API_URL}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit feedback: ${response.statusText}`);
      }

      console.log("Feedback submitted successfully");

      localStorage.setItem(`feedback_${uniqueId}`, finalFeedback);

      setFeedback(finalFeedback);
      setSubmittedFeedback(true);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

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

  const diagnosesData = Object.entries(classificationResult.diagnoses).map(([diag, conf]) => ({
    name: diag,
    confidence: (conf * 100).toFixed(0),
  }));

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom color="text.primary">
          ECG Classification Results
        </Typography>

        {/* Diagnoses */}
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
        {/* Feedback */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" color="text.primary">
            Do you agree with the results?
          </Typography>
          {submittedFeedback ? (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Your feedback: {feedback}
            </Typography>
          ) : (
            <>
              <RadioGroup
                value={feedback}
                onChange={(e) => {
                  setFeedback(e.target.value);
                  if (e.target.value !== "Other") {
                    setOtherFeedback(""); 
                  }
                }}
                sx={{ mt: 2 }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>

              {feedback === "Other" && (
                <TextField
                  fullWidth
                  label="Please specify"
                  variant="outlined"
                  sx={{ mt: 2 }}
                  value={otherFeedback}
                  onChange={(e) => setOtherFeedback(e.target.value)}
                />
              )}

              {!submittedFeedback && (
                <Button variant="contained" color="primary" onClick={handleSubmitFeedback} sx={{ mt: 2 }}>
                  Submit Feedback
                </Button>
              )}
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default ECGResults;