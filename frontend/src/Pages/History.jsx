import { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("");
  const [patientIds, setPatientIds] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("history")) || [];
    const updatedHistory = storedHistory.map((item) => {
      const imageKey = `imgData_${item.uniqueId}`;
      const savedImage = localStorage.getItem(imageKey);
      const classificationKey = `classificationResult_${item.uniqueId}`;
      const classificationResult = JSON.parse(localStorage.getItem(classificationKey));

      return {
        ...item,
        imageUrl: savedImage || null,
        classificationResult: classificationResult || null,
      };
    });
    setHistory(updatedHistory);
    setPatientIds([...new Set(updatedHistory.map((item) => item.identifier))]);
  }, []);

  useEffect(() => {
    setFilteredHistory(
      filter === "" ? history : history.filter((item) => item.identifier === filter)
    );
  }, [filter, history]);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  const handleViewECGResults = (uniqueId) => {
    navigate("/ecg-results", { state: { uniqueId } });
  };

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" direction="column" sx={{ padding: 4 }}>
      <Grid item>
        <Typography variant="h3" color="black" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          History
        </Typography>
      </Grid>
      <Grid item sx={{ width: "300px", mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel shrink>Filter by Patient ID</InputLabel>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            displayEmpty
            notched
          >
            <MenuItem value="">Show All</MenuItem>
            {patientIds.map((id) => (
              <MenuItem key={id} value={id}>{id}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        {filteredHistory.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ width: "100%", maxWidth: 350, height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="220"
                image={item.imageUrl ? item.imageUrl : "/path/to/default-image.png"}
                alt={`Uploaded image ${index + 1}`}
                onClick={() => handleViewDetails(item)}
                sx={{ cursor: "pointer", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" color="textPrimary" noWrap sx={{ fontWeight: "bold", mb: 2 }}>
                  Patient ID: {item.identifier}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                  Gender: {item.gender} | Age: {item.age}
                </Typography>
                <Button size="medium" color="primary" onClick={() => handleViewDetails(item)} sx={{ width: "100%", mb: 2, fontWeight: "bold" }}>
                  View Details
                </Button>
                <Button size="medium" color="secondary" onClick={() => handleViewECGResults(item.uniqueId)} sx={{ width: "100%", fontWeight: "bold" }}>
                  View ECG Results
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
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
