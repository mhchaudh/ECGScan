import { useState, useEffect, useCallback } from "react";
import { Grid, Card, CardContent, Typography, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, TextField, Box, Stack, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
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
  const fetchImagesforComparison = useCallback(async () => {
    const imagesData = {};
  
    await Promise.all(
      selectedForComparison.map(async (uniqueId) => {
        const item = history.find((h) => h.uniqueId === uniqueId);
        if (!item) return;
  
        try {
          console.log(item.filename)
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
  }, [selectedForComparison, history, API_URL]);
  
  

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

  const handleViewECGResults = (uniqueId, filename, identifier, age, gender) => {
    navigate(`/ecg-results?uniqueId=${uniqueId}&filename=${filename}&identifier=${identifier}&age=${age}&gender=${gender}`);
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
  }, [fetchImagesforComparison, selectedForComparison]); 
  
  
  

  const handleCloseComparisonDialog = () => {
    setShowComparisonDialog(false);
    setSelectedForComparison([]);
  };

  const getSelectedItems = () => {
    return history.filter((item) => selectedForComparison.includes(item.uniqueId));
  };

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" direction="column" sx={{minHeight: '100vh', py: 4, px: { xs: 2, sm: 4 }, backgroundColor: 'background.default' }}>
      <Grid item>
        <Typography variant="h3" color="black" align="center" sx={{ fontWeight: "bold", mb: 4, mt: 4,  color: "text.primary"}}>
          History
        </Typography>
      </Grid>

      {/* Filters */}
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 6, px:2 }}>
        {/* Filter by Patient Status */}
        <Grid item xs={12} sm={6} md={3}>
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

      <Grid container justifyContent="center" sx={{ mb: 6}}>
        <Button variant="contained" color="error" onClick={clearHistory} sx={{ px: 4, py:1.5 }}>
          Clear History
        </Button>
      </Grid>

      {/* History Cards */}
      <Grid container spacing={4} sx={{ px: 4,  alignContent: "flex-start" }}>
        {filteredHistory.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", transition: "transform 0.2s",'&:hover': {transform: "scale(1.02)", boxShadow: 6 }}}>
              <CardMedia
                component="img"
                height="220"
                image={item.imageUrl || ""}
                alt={`Uploaded image ${index + 1}`}
                onClick={() => handleViewDetails(item)}
                sx={{ cursor: "pointer", borderTopLeftRadius: 8, borderTopRightRadius: 8, objectFit: "cover"}}
              />
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
               >
                <Typography variant="subtitle1" fontWeight="bold">
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
                  label="Compare"
                  sx={{ m: 0 }}
                />
              </Box>
              <Stack spacing={1} sx={{ width: "100%" }}>
                <Button size="small" variant="contained" color="primary" onClick={() => handleViewDetails(item)} sx={{ fontWeight: "bold" }}>
                  View Details
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleViewECGResults(item.uniqueId, item.filename, item.identifier, item.age, item.gender)}
                  sx={{ fontWeight: "bold" }}
                >
                  View ECG Results
                </Button>
                <Button size="small" variant="outlined" color="error" onClick={() => deleteItem(item.uniqueId)} sx={{fontWeight: "bold" }}>
                  Delete
                </Button>
              </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Image Details */}
      {selectedItem && (
      <Dialog open={!!selectedItem} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle sx={{ bgcolor: "primary.main", color: "white",displau:"flex",justifyContent: "space-between", alignItems: "center" }}>
        <span>Patient Details</span>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "text.secondary" }}>
                Patient Information
              </Typography>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  boxShadow: 1,
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary">ID</Typography>
                    <Typography variant="body1">{selectedItem.identifier}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary">Status</Typography>
                    <Typography variant="body1">{selectedItem.status}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary">Age</Typography>
                    <Typography variant="body1">{selectedItem.age}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary">Gender</Typography>
                    <Typography variant="body1">{selectedItem.gender}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary">Date</Typography>
                    <Typography variant="body1">{selectedItem.date}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" color="textSecondary">Time</Typography>
                    <Typography variant="body1">{selectedItem.dateTime}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "text.secondary" }}>
                Image Preview
              </Typography>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  boxShadow: 1,
                  textAlign: "center",
                }}
              >
                <img
                  src={selectedItem.imageUrl || ""}
                  alt="Uploaded"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    borderRadius: "8px",
                    border: "1px solid #e0e0e0",
                    boxShadow: 3,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 2, gap: 1 }}>
          <Button onClick={handleCloseDialog} color="secondary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )}

      {/* Compare two ecg images */}
      {showComparisonDialog && (
        <Dialog open={true} onClose={handleCloseComparisonDialog} maxWidth="lg" fullWidth>
          <DialogTitle>Compare The Leads of Two ECG Images</DialogTitle>
          <DialogContent sx={{ py: 4 }}>
            <Grid container spacing={4} alignItems="center">
              {getSelectedItems().map((item) => (
                <Grid item key={item.uniqueId} xs={12} md={6}>
                  <Box sx={{ 
                    border: 1, 
                    borderColor: "divider",
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center"
                  }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Patient: {item.identifier}
                    </Typography>
                    <img
                      src={`data:image/png;base64,${comparisonImages[item.uniqueId]}`}
                      style={{ 
                        maxWidth: "100%", 
                        maxHeight: "400px",
                        objectFit: "contain"
                      }}
                    />
                  </Box>
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