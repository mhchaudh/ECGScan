import { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [patientFilter, setPatientFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [patientIds, setPatientIds] = useState([]);
  const [selectedForComparison, setSelectedForComparison] = useState([]);
  const [showComparisonDialog, setShowComparisonDialog] = useState(false);
  const [comparisonImages, setComparisonImages] = useState({});
  const API_URL = import.meta.env.VITE_API_URL;
  // asked chatgpt how to keep two filters at once
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
      history.filter((item) =>
        (statusFilter === "" || item.status === statusFilter) &&
        (patientFilter === "" || item.identifier === patientFilter) &&
        (dateFilter === "" || item.date === dateFilter)
      )
    );
  }, [statusFilter, patientFilter,dateFilter, history]);
  const fetchImagesforComparison = async () => {
    const imagesData = {};
  
    await Promise.all(
      selectedForComparison.map(async (uniqueId) => {
        const item = history.find((h) => h.uniqueId === uniqueId);
        if (!item) return;
  
        try {
          const response = await fetch(`${API_URL}/api/ecgresults`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ filename: item.filename }),
          });
  
          if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
          }
  
          const data = await response.json();
          imagesData[uniqueId] = data.image;
        } catch (error) {
          console.error("Error fetching ECG image:", error);
        }
      })
    );
  
    setComparisonImages(imagesData); 
  };
  
  

  const clearHistory = () => {
    localStorage.removeItem("history");
    history.forEach((item) => {
      localStorage.removeItem(`imgData_${item.uniqueId}`);
      localStorage.removeItem(`classificationResult_${item.uniqueId}`);
    });
    localStorage.removeItem("entryCounter");
    setHistory([]);
  };

  const deleteItem = (uniqueId) => {
    const updatedHistory = history.filter((item) => item.uniqueId !== uniqueId);
    localStorage.setItem("history", JSON.stringify(updatedHistory));
    localStorage.removeItem(`imgData_${uniqueId}`);
    localStorage.removeItem(`classificationResult_${uniqueId}`);
    const entryCounter = JSON.parse(localStorage.getItem("entryCounter")) || 0;
    localStorage.setItem("entryCounter", entryCounter - 1);
    setHistory(updatedHistory);
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  const handleViewECGResults = (uniqueId, filename, identifier) => {
    navigate(`/ecg-results?uniqueId=${uniqueId}&filename=${filename}&identifier=${identifier}`);
  };

  const handleComparisonCheckbox = (item) => {
    let updatedSelection;
  
    if (selectedForComparison.includes(item.uniqueId)) {
      updatedSelection = selectedForComparison.filter((id) => id !== item.uniqueId);
    } else {
      updatedSelection = [...selectedForComparison, item.uniqueId];
      if (updatedSelection.length > 2) {
        updatedSelection = updatedSelection.slice(1);
      }
    }
  
    setSelectedForComparison(updatedSelection);
  };
  useEffect(() => {
    if (selectedForComparison.length === 2) {
      fetchImagesforComparison();
      setShowComparisonDialog(true);
    } else {
      setShowComparisonDialog(false);
    }
  }, [selectedForComparison]); 
  
  
  

  const handleCloseComparisonDialog = () => {
    setShowComparisonDialog(false);
    setSelectedForComparison([]);
  };

  const getSelectedItems = () => {
    return history.filter((item) => selectedForComparison.includes(item.uniqueId));
  };

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" direction="column" sx={{ padding: 4 }}>
      <Grid item>
        <Typography variant="h3" color="black" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          History
        </Typography>
      </Grid>

      {/* Filters */}
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
        {/* Filter by Patient Status */}
        <Grid item xs={6} sm={4} md={3}>
          <FormControl fullWidth>
            <InputLabel shrink>Filter by Patient Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              displayEmpty
              notched
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="Pre-treatment">Pre-treatment</MenuItem>
              <MenuItem value="During treatment">During treatment</MenuItem>
              <MenuItem value="Post-treatment">Post-treatment</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Filter by Patient ID */}
        <Grid item xs={6} sm={4} md={3}>
          <FormControl fullWidth>
            <InputLabel shrink>Filter by Patient ID</InputLabel>
            <Select
              value={patientFilter}
              onChange={(e) => setPatientFilter(e.target.value)}
              displayEmpty
              notched
            >
              <MenuItem value=""></MenuItem>
              {patientIds.map((id) => (
                <MenuItem key={id} value={id}>{id}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Filter by Date */}
        <Grid item xs={6} sm={4} md={3}>
          <TextField
            label="Filter by Date"
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
        <Button variant="contained" color="error" onClick={clearHistory} sx={{ mb: 2 }}>
          Clear History
        </Button>
      </Grid>

      {/* History Cards */}
      <Grid container spacing={4} justifyContent="center">
        {filteredHistory.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ width: "100%", maxWidth: 350, height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="220"
                image={item.imageUrl || ""}
                alt={`Uploaded image ${index + 1}`}
                onClick={() => handleViewDetails(item)}
                sx={{ cursor: "pointer", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" color="textPrimary" noWrap sx={{ fontWeight: "bold", mb: 2 }}>
                  Patient ID: {item.identifier}
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedForComparison.includes(item.uniqueId)}
                      onChange={() => handleComparisonCheckbox(item)}
                      color="primary"
                    />
                  }
                  label="Compare Leads"
                />
                <Button size="medium" color="primary" onClick={() => handleViewDetails(item)} sx={{ width: "100%", fontWeight: "bold" }}>
                  View Details
                </Button>
                <Button
                  size="medium"
                  color="secondary"
                  onClick={() => handleViewECGResults(item.uniqueId, item.filename, item.identifier)}
                  sx={{ width: "100%", fontWeight: "bold" }}
                >
                  View ECG Results
                </Button>
                <Button size="medium" color="error" onClick={() => deleteItem(item.uniqueId)} sx={{ width: "100%", fontWeight: "bold" }}>
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Image Details */}
      {selectedItem && (
        <Dialog open={true} onClose={handleCloseDialog} maxWidth="md" fullWidth>
          <DialogContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography variant="h6">Patient Information:</Typography>
                <Typography variant="body1">ID: {selectedItem.identifier}</Typography>
                <Typography variant="body1">Status: {selectedItem.status}</Typography>
                <Typography variant="body1">Age: {selectedItem.age}</Typography>
                <Typography variant="body1">Gender: {selectedItem.gender}</Typography>
                <Typography variant="body1">Date: {selectedItem.date}</Typography>
                <Typography variant="body1">Time: {selectedItem.dateTime}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Image:</Typography>
                <img
                  src={selectedItem.imageUrl || ""}
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

      {/* Compare two ecg images */}
      {showComparisonDialog && (
        <Dialog open={true} onClose={handleCloseComparisonDialog} maxWidth="lg" fullWidth>
          <DialogTitle>Compare The Leads of Two ECG Images</DialogTitle>
          <DialogContent>
            <Grid container spacing={4}>
              {getSelectedItems().map((item) => (
                <Grid item key={item.uniqueId} xs={6}>
                  <img
                    src={`data:image/png;base64,${comparisonImages[item.uniqueId] || ""}`}
                    alt={`ECG Image for ${item.identifier}`}
                    style={{ maxWidth: "100%", maxHeight: 300, display: "block", margin: "0 auto" }}
                  />
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseComparisonDialog} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Grid>
  );
};

export default History;