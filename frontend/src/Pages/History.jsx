import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Load history from localStorage (if available)
    const storedHistory = JSON.parse(localStorage.getItem("history")) || [];

    // Add the image data (Base64 string) and classification result to each history item
    const updatedHistory = storedHistory.map((item) => {
      // Fetch the image using the unique key based on the uniqueId
      const imageKey = `imgData_${item.uniqueId}`;
      const savedImage = localStorage.getItem(imageKey);

      // Fetch the classification result using the unique key based on the uniqueId
      const classificationKey = `classificationResult_${item.uniqueId}`;
      const classificationResult = JSON.parse(localStorage.getItem(classificationKey));

      return {
        ...item,
        imageUrl: savedImage || null, // Use the image if it exists, otherwise null
        classificationResult: classificationResult || null, // Use the classification result if it exists, otherwise null
      };
    });

    setHistory(updatedHistory);
  }, []);

  // Handle view details of a specific entry
  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  // Handle dialog close
  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  // Handle navigation to ECGResults page
  const handleViewECGResults = (uniqueId) => {
    navigate("/ecg-results", { state: { uniqueId } });
  };

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" direction="column" sx={{ padding: 3 }}>
      <Grid item>
        <Typography variant="h4" color="black">
          History
        </Typography>
      </Grid>

      {/* Display history list */}
      <Grid container spacing={3} justifyContent="center">
        {history.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ width: "100%", maxWidth: 300, height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="200"
                image={item.imageUrl ? item.imageUrl : "/path/to/default-image.png"} // Fallback image if no image data
                alt={`Uploaded image ${index + 1}`}
                onClick={() => handleViewDetails(item)}
                sx={{ cursor: "pointer" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" color="textPrimary" noWrap>
                  Patient ID: {item.identifier}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Gender: {item.gender} | Age: {item.age}
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleViewDetails(item)}
                  sx={{ width: "100%", mb: 1 }}
                >
                  View Details
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => handleViewECGResults(item.uniqueId)}
                  sx={{ width: "100%" }}
                >
                  View ECG Results
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Details Dialog */}
      {selectedItem && (
        <Dialog open={true} onClose={handleCloseDialog} maxWidth="md" fullWidth>
          <DialogTitle>Image Details</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography variant="h6">Patient Information:</Typography>
                <Typography variant="body1">Identifier: {selectedItem.identifier}</Typography>
                <Typography variant="body1">Age: {selectedItem.age}</Typography>
                <Typography variant="body1">Gender: {selectedItem.gender}</Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6">Image Preview:</Typography>
                {/* Show the image in the dialog */}
                <img
                  src={selectedItem.imageUrl ? selectedItem.imageUrl : "/path/to/default-image.png"}
                  alt="Uploaded"
                  style={{ maxWidth: "100%", maxHeight: 300, display: "block", margin: "0 auto" }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Grid>
  );
}

export default History;