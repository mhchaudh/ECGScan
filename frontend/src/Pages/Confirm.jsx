import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./ConfirmUpload.css";
import { Grid, Typography, Button, ToggleButton, ToggleButtonGroup, TextField, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemText, Paper } from "@mui/material";
import { Male, Female } from "@mui/icons-material";
import "leaflet/dist/leaflet.css";
import Fuse from 'fuse.js';
import debounce from 'lodash.debounce';

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl } = location.state || {};

  const [crop, setCrop] = useState({ unit: "%", x: 0, y: 0, width: 100, height: 100 });
  const [croppedImage, setCroppedImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [patientstatus, setPatientstatus] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [locationDetails, setLocationDetails] = useState(null);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const originalImageRef = useRef(null);

  const previousIdentifiers = JSON.parse(localStorage.getItem("uniqueIdentifiers")) || []; // previous identifiers so the user can use again if needed
  const fuse = new Fuse([], { keys: ["display_name"], threshold: 0.3 }); // using fuzzy search for suggestions

  const API_URL = import.meta.env.VITE_API_URL; // api URL

  useEffect(() => {
    if (!imageUrl) navigate("/home");  // if no image navigate to home
    else loadImage(imageUrl);
  }, [imageUrl, navigate]);

  const loadImage = (url) => { // loading the image
    const img = new Image();
    img.src = url;
    img.onload = () => {
      originalImageRef.current = img;
      resizeImage(url, 500, 500, setResizedImage);
    };
  };

  const fetchLocationSuggestions = async (query) => { // getting the suggestions using the nominatim api
    if (!query.trim()) return;
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=10`);
      if (!response.ok) throw new Error("Failed to fetch location suggestions.");
      const data = await response.json();
      setLocationSuggestions(data);
      setIsDropdownOpen(true);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
      setLocationSuggestions([]);
      setIsDropdownOpen(false);
    }
  };

  const debouncedFetchLocationSuggestions = useRef(debounce(fetchLocationSuggestions, 500)).current; // use debounce to limit how frequently fetchLocationSuggestions is called for optimality

  useEffect(() => {
    if (locationInput.trim()) debouncedFetchLocationSuggestions(locationInput);
    else {
      setLocationSuggestions([]);
      setIsDropdownOpen(false);
    }
    return () => debouncedFetchLocationSuggestions.cancel();
  }, [locationInput, debouncedFetchLocationSuggestions]);

  const handleLocationSelect = (selectedLocation) => { // selecting the location
    setLocationInput(selectedLocation.display_name);
    setLocationDetails({
      lat: selectedLocation.lat,
      lon: selectedLocation.lon,
      display_name: selectedLocation.display_name,
    });
    setIsDropdownOpen(false);
  };

  const handleInputChange = (event) => { //changing input for the location
    setLocationInput(event.target.value);
    if (event.target.value.trim()) {
      const results = fuse.search(event.target.value);
      setLocationSuggestions(results.map((result) => result.item));
      setIsDropdownOpen(true);
    } else {
      setLocationSuggestions([]);
      setIsDropdownOpen(false);
    }
  };

  const handleClickOutside = (event) => { //closes dropdown when we click outside it
    if (event.target.closest(".location-dropdown") === null) setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const resizeImage = (src, maxWidth, maxHeight, callback) => { // resizing the image for cropping
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      callback(canvas.toDataURL("image/png"));
    };
    img.src = src;
  };

  const handleRetake = () => navigate("/home", { state: { cameFromConfirm: true } }); // go to home and  upload   automatically

  const handleConfirm = async () => {
    try {
      if (!identifier || !age || !gender || !patientstatus || !locationDetails) { // checking if all inputs are provided
        alert("Please fill in all the required fields");
        return;
      }

      setLoading(true); // set loading to true
      const uniqueId = generateUniqueId(); // get the unique id
      const historyData = saveHistory(uniqueId); // save the data to the history item
      const imageToSave = croppedImage || imageUrl; // get the image we want to send
      await saveImageAndDetails(imageToSave, uniqueId, historyData); // function to save the image and send it
      await sendLocationToMap(uniqueId, historyData); // function to send the details to the map db
      await classifyECG(uniqueId); // function to get the ecg classification
      await new Promise((resolve) => setTimeout(resolve, 5000)); // timeout for the loading bar
      setLoading(false); // set loading to false

      navigate(`/ecg-results?uniqueId=${uniqueId}&filename=${historyData[0].filename}&identifier=${identifier}`); //automatically navigate to the results page
    } catch (error) {
      console.error("Error in handleConfirm: ", error);
      setLoading(false);
    }
  };

  const generateUniqueId = () => { // setting a unique id(counter) to avoid repetition in localstorage
    let counter = parseInt(localStorage.getItem("entryCounter")) || 0;
    counter += 1;
    localStorage.setItem("entryCounter", counter.toString());
    return `entry_${counter}`;
  };

  const saveHistory = (uniqueId) => { // setting a new history item with relevant details and setting it to localstorage so we can access in history
    const now = new Date();
    const date = now.toISOString().split("T")[0];
    const dateTime = now.toLocaleTimeString();

    const historyData = JSON.parse(localStorage.getItem("history")) || [];
    const newHistoryItem = {
      uniqueId,
      identifier,
      status: patientstatus,
      age,
      gender,
      location: locationDetails,
      filename: null,
      date,
      dateTime,
    };

    historyData.unshift(newHistoryItem);
    localStorage.setItem("history", JSON.stringify(historyData));
    return historyData;
  };

  const saveImageAndDetails = async (imageToSave, uniqueId, historyData) => { // sending the image to the backend and also getting the bounded box image from there to send to the history page
    const image = new Image(); 
    image.src = imageToSave;

    image.onload = async () => {
      const resizedBase64 = await resizeImage2(image, 500, 500);
      localStorage.setItem(`imgData_${uniqueId}`, resizedBase64);

      const uploadResponse = await fetch(`${API_URL}/api/image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: imageToSave,
          age,
          gender,
          identifier,
          location: locationDetails,
        }),
      });

      if (uploadResponse.ok) {
        const uploadData = await uploadResponse.json();
        const updatedHistoryItem = { ...historyData[0], filename: uploadData.filename };
        const updatedHistoryData = [updatedHistoryItem, ...historyData.slice(1)];
        localStorage.setItem("history", JSON.stringify(updatedHistoryData));
      } else {
        console.error("Upload failed");
      }
    };
  };

  const sendLocationToMap = async (uniqueId, historyData) => { // sending the details to the map db
    const mapResponse = await fetch(`${API_URL}/api/map`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier,
        filename: historyData[0].filename,
        location: locationDetails,
      }),
    });

    if (!mapResponse.ok) console.error("Failed to save location details");
  };
 
  const classifyECG = async (uniqueId) => { // getting the details for classification and setting it to localstorage to access in the ecgresults page
    const classifyResponse = await fetch(`${API_URL}/api/ecg/classify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ecg: "dummy_ecg_signal",
        sex: gender || "male",
        age: age || 30,
      }),
    });

    if (!classifyResponse.ok) {
      console.error("Classification failed");
      return;
    }

    const classifyData = await classifyResponse.json();
    localStorage.setItem(`classificationResult_${uniqueId}`, JSON.stringify(classifyData));

    const highestDiagnosis = getHighestConfidenceDiagnosis(classifyData.diagnoses);
    if (highestDiagnosis) await sendDiagnosis(highestDiagnosis);
  };

  const getHighestConfidenceDiagnosis = (diagnoses) => { // this is to get the diagnosis with the highest confidence(we send this to the db for display)
    let highestDiagnosis = null;
    let highestConfidence = 0;

    for (const [diagnosis, confidence] of Object.entries(diagnoses)) {
      if (confidence > highestConfidence) {
        highestDiagnosis = diagnosis;
        highestConfidence = confidence;
      }
    }

    return highestDiagnosis;
  };

  const sendDiagnosis = async (diagnosis) => { // sending the most confident diagnosis for display in the map
    const diagnosesResponse = await fetch(`${API_URL}/api/diagnoses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        location: locationDetails,
        diagnoses: diagnosis,
      }),
    });

    if (!diagnosesResponse.ok) console.error("Failed to send diagnosis");
  };

  const resizeImage2 = (img, maxWidth, maxHeight) => { // resizing for storing in localstorage
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/png"));
    });
  };

  const handleDownload = () => { // download the image(if we want)
    const imagetodownload = croppedImage || imageUrl;
    const link = document.createElement("a");
    link.href = imagetodownload;
    link.download = "cropped-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onCropComplete = (crop) => { // cropping
    if (originalImageRef.current && canvasRef.current) {
      const image = originalImageRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const scaleX = image.naturalWidth / imageRef.current.width;
      const scaleY = image.naturalHeight / imageRef.current.height;

      canvas.width = crop.width * scaleX;
      canvas.height = crop.height * scaleY;
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        canvas.width,
        canvas.height
      );

      setCroppedImage(canvas.toDataURL("image/png"));
    }
  };

  const handleAgeChange = (e) => { // age change
    const value = e.target.value;
    if (value < 0 || value > 999) setAge("");
    else setAge(value);
  };

  const handleGenderChange = (e) => setGender(e.target.value); // gender change
  const handleIdentifierChange = (e) => setIdentifier(e.target.value); // identifier change

  const handleConfirmClick = () => { // once we click confirm
    if (loading) return;
    setShowConfirmPopup(true);
  };

  const handlePopupResponse = (confirm) => { // once we say ok to confirm
    setShowConfirmPopup(false);
    if (confirm) handleConfirm();
  };
  
  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.8)",
            zIndex: 9999,
          }}
        >
          <div style={{ width: "50%", textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Diagnosing...
            </Typography>
            <LinearProgress />
          </div>
        </div>
      )}
  
      <Grid container spacing={3} justifyContent="center" alignItems="center" direction="column">
        <Grid item>
          <Typography variant="h4" color="black">
            Adjust Your Image
          </Typography>
        </Grid>

        <Grid item container spacing={2} justifyContent="center">
           {/* Identifier */}
          <Grid item>
            <TextField
              autoComplete="off"
              label="Unique Patient Identifier"
              variant="outlined"
              value={identifier}
              onChange={handleIdentifierChange}
              sx={{ width: 300 }}
              inputProps={{ list: "identifiers" }}
            />
            <datalist id="identifiers">
              {previousIdentifiers.map((id, index) => (
                <option key={index} value={id}>
                  {id}
                </option>
              ))}
            </datalist>
          </Grid>
          {/*Patient Status*/}
          <Grid item>
            <FormControl sx={{ width: 300 }}>
              <InputLabel shrink={Boolean(patientstatus)}>Patient Status</InputLabel>
              <Select
                value={patientstatus}
                onChange={(e) => setPatientstatus(e.target.value)}
                displayEmpty
                notched
              >
                <MenuItem value="Pre-treatment">Pre-treatment</MenuItem>
                <MenuItem value="During treatment">During treatment</MenuItem>
                <MenuItem value="Post-treatment">Post-treatment</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/*Location*/}
          <Grid item>
              <div className="location-dropdown" style={{ position: "relative" }}>
                <TextField
                  label="Location"
                  variant="outlined"
                  value={locationInput}
                  onChange={handleInputChange}
                  sx={{ width: 300 }}
                  onFocus={() => setIsDropdownOpen(true)}
                />
                {isDropdownOpen && locationSuggestions.length > 0 && (
                  <Paper
                    style={{
                      position: "absolute",
                      width: "100%",
                      maxHeight: "200px",
                      overflowY: "auto",
                      zIndex: 1,
                      marginTop: "4px",
                    }}
                  >
                    <List>
                      {locationSuggestions.map((location, index) => (
                        <ListItem
                          key={index}
                          button
                          onClick={() => handleLocationSelect(location)}
                        >
                          <ListItemText primary={location.display_name} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                )}
              </div>
            </Grid>
        </Grid>
  
        <Grid item container spacing={2} justifyContent="center">
          {/*Age */}
          <Grid item>
            <TextField
              label="Age"
              variant="outlined"
              type="number"
              value={age}
              onChange={handleAgeChange}
              inputProps={{ min: 0, max: 999 }}
            />
          </Grid> 
          {/*Gender */}
          <Grid item>
            <ToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGenderChange}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ToggleButton
                value="male"
                selected={gender === "male"}
                sx={{
                  backgroundColor: gender === "male" ? "#1976d2 !important" : "lightgray",
                  color: "white !important",
                  "&:hover": { backgroundColor: gender === "male" ? "#1565c0 !important" : "gray" },
                }}
              >
                <Male sx={{ marginRight: 1, color: "white" }} /> Male
              </ToggleButton>
  
              <ToggleButton
                value="female"
                selected={gender === "female"}
                sx={{
                  backgroundColor: gender === "female" ? "#e91e63 !important" : "lightgray",
                  color: "white !important",
                  "&:hover": { backgroundColor: gender === "female" ? "#c2185b !important" : "gray" },
                }}
              >
                <Female sx={{ marginRight: 1, color: "white" }} /> Female
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
  
        {/* Image Cropping Section */}
        <Grid item>
          <div className="image-container">
            <ReactCrop
              src={imageUrl}
              crop={crop}
              onChange={setCrop}
              onComplete={onCropComplete}
              ruleOfThirds
            >
              <img src={imageUrl} alt="Captured" ref={imageRef} className="confirm-image" />
            </ReactCrop>
            <div className="cropped-preview">
              <Typography variant="h6" gutterBottom>
                Cropped Image:
              </Typography>
              {croppedImage ? (
                <img src={croppedImage} alt="Cropped Preview" className="cropped-image" />
              ) : (
                <Typography variant="body1">No cropped image yet</Typography>
              )}
            </div>
          </div>
        </Grid>
  
        <canvas ref={canvasRef} style={{ display: "none" }} />
  
        {/* Buttons */}
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={handleRetake}>
                Retake
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleConfirmClick}>
                Confirm
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success" onClick={handleDownload}>
                Download
              </Button>
            </Grid>
          </Grid>
        </Grid>
  
        {/* Confirmation Popup */}
        <Dialog open={showConfirmPopup} onClose={() => setShowConfirmPopup(false)}>
          <DialogTitle>Confirm Submission</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to submit?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handlePopupResponse(true)} color="primary">
              Yes
            </Button>
            <Button onClick={() => handlePopupResponse(false)} color="secondary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );  
}

export default Confirm;