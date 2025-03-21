import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./ConfirmUpload.css";
import { Grid, Typography, Button, ToggleButton, ToggleButtonGroup, TextField, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Male, Female } from "@mui/icons-material";
import "leaflet/dist/leaflet.css";


function ConfirmUpload() {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl } = location.state || {}; // Retrieve the file

  const [crop, setCrop] = useState({ unit: "%", x: 0, y: 0, width: 100, height: 100 });
  const [croppedImage, setCroppedImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null); // Store resized image for display purposes
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [patientstatus, setPatientstatus] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [locationDetails, setLocationDetails] = useState(null);
  const previousIdentifiers = JSON.parse(localStorage.getItem("uniqueIdentifiers")) || [];
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const originalImageRef = useRef(null);

  useEffect(() => {
    if (!imageUrl) {
      navigate("/home"); // Redirect to home if no image is provided
      return;
    }
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      originalImageRef.current = img; // Store the original image
    };
    resizeImage(imageUrl, 500, 500, setResizedImage); // Resize uploaded image for display
  }, [imageUrl, navigate]);

  // Resize image only for display purposes
  const resizeImage = (src, maxWidth, maxHeight, callback) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      // Maintain aspect ratio
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
      callback(canvas.toDataURL("image/png")); // Convert to base64
    };
    img.src = src;
  };

  const handleRetake = () => navigate("/home", { state: { cameFromConfirmUpload: true } }); // Navigate to home and automatically press the upload button

  const API_URL = import.meta.env.VITE_API_URL;

  // Handle confirmation and send the results to the ecg-results and history pages
  const handleConfirm = async () => {
    try {
      console.log("Confirmed image: ", croppedImage || imageUrl);
      console.log("Age: ", age);
      console.log("Gender: ", gender);
      console.log("Location: ", locationDetails);
  
      let counter = parseInt(localStorage.getItem("entryCounter")) || 0;
      counter += 1;
      localStorage.setItem("entryCounter", counter.toString());
  
      const uniqueId = `entry_${counter}`;
  
      const uniqueIdentifiersSet = new Set(previousIdentifiers);
      if (identifier && !uniqueIdentifiersSet.has(identifier)) {
        uniqueIdentifiersSet.add(identifier);
      }
      const uniqueIdentifiers = Array.from(uniqueIdentifiersSet);
      localStorage.setItem("uniqueIdentifiers", JSON.stringify(uniqueIdentifiers));
  
      const historyData = JSON.parse(localStorage.getItem("history")) || [];
      const newHistoryItem = {
        uniqueId,
        identifier,
        status: patientstatus,
        age,
        gender,
        location: locationDetails,
        timestamp: new Date().toISOString(),
        filename: null,
      };
  
      historyData.unshift(newHistoryItem);
      localStorage.setItem("history", JSON.stringify(historyData));
  
      const imageToSave = croppedImage || imageUrl;
      const image = new Image();
      image.src = imageToSave;
  
      image.onload = async function () {
        resizedImage2(image, 500, 500, async function (resizedBase64) {
          localStorage.setItem(`imgData_${uniqueId}`, resizedBase64);
          console.log("Image saved to localStorage");
  
          try {
            setLoading(true);
  
            // Step 1: Upload image and details to /api/image
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
  
            let filename = null;
            let boundedboxImageBase64 = null;
  
            if (uploadResponse.ok) {
              const uploadData = await uploadResponse.json();
              filename = uploadData.filename;
              boundedboxImageBase64 = uploadData.boundedboximage;
              const updatedHistoryItem = { ...newHistoryItem, filename };
              const updatedHistoryData = [updatedHistoryItem, ...historyData.slice(1)];
              localStorage.setItem("history", JSON.stringify(updatedHistoryData));
            } else {
              console.error("Upload failed");
            }
  
            if (boundedboxImageBase64) {
              const boundedboxImage = new Image();
              boundedboxImage.src = `data:image/jpeg;base64,${boundedboxImageBase64}`;
  
              boundedboxImage.onload = function () {
                resizedImage2(boundedboxImage, 500, 500, function (resizedBoundedBase64) {
                  localStorage.setItem(`boundedboxImgData_${uniqueId}`, resizedBoundedBase64);
                  console.log("Bounded box image saved to localStorage");
                });
              };
            }
  
            // Step 2: Send location details to /api/map
            const mapResponse = await fetch(`${API_URL}/api/map`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                identifier,
                filename,
                location: locationDetails,
              }),
            });
  
            if (!mapResponse.ok) {
              console.error("Failed to save location details");
            }
  
            // Step 3: Classify ECG data
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
              setLoading(false);
              return;
            }
  
            const classifyData = await classifyResponse.json();
            localStorage.setItem(`classificationResult_${uniqueId}`, JSON.stringify(classifyData));
  
            // Extract the diagnosis with the highest confidence
            const diagnoses = classifyData.diagnoses;
            let highestDiagnosis = null;
            let highestConfidence = 0;
  
            for (const [diagnosis, confidence] of Object.entries(diagnoses)) {
              if (confidence > highestConfidence) {
                highestDiagnosis = diagnosis;
                highestConfidence = confidence;
              }
            }
  
            console.log("Highest confidence diagnosis:", highestDiagnosis, highestConfidence);
  
            // Step 4: Send the highest confidence diagnosis to /api/diagnoses
            if (highestDiagnosis) {
              const diagnosesResponse = await fetch(`${API_URL}/api/diagnoses`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  location: locationDetails,
                  diagnoses: highestDiagnosis,
                }),
              });
  
              if (!diagnosesResponse.ok) {
                console.error("Failed to send diagnosis");
              }
            }
  
            await new Promise((resolve) => setTimeout(resolve, 5000));
            setLoading(false);
  
            // Navigate to results page
            navigate(`/ecg-results?uniqueId=${uniqueId}&filename=${filename}&identifier=${identifier}`);
          } catch (error) {
            console.error("Error processing ECG: ", error);
            setLoading(false);
          }
        });
      };
    } catch (error) {
      console.error("Error in handleConfirm: ", error);
    }
  };
  

  function resizedImage2(img, maxWidth, maxHeight, callback) {
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

    callback(canvas.toDataURL("image/png"));
  }

  // Handle download
  const handleDownload = () => {
    const imagetodownload = croppedImage || imageUrl;
    const link = document.createElement("a");
    link.href = imagetodownload;
    link.download = "cropped-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle cropping
  const onCropComplete = (crop) => {
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

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 110) {
      setAge("");
      return;
    }
    setAge(value);
  };

  const handleGenderChange = (e) => setGender(e.target.value);
  const handleIdentifierChange = (e) => setIdentifier(e.target.value);
  const handleLocationInputChange = (e) => setLocationInput(e.target.value);

  const fetchLocationDetails = async () => {
    if (!locationInput) {
      setLocationDetails(null); // Clear location details if input is empty
      return;
    }
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationInput)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        setLocationDetails({ lat, lon, display_name });
      } else {
        setLocationDetails(null); // Clear location details if no results are found
      }
    } catch (error) {
      console.error("Error fetching location details: ", error);
      setLocationDetails(null); // Clear location details on error
    }
  };
  
  const handleConfirmClick = async () => {
    // Fetch location details before validation
    await fetchLocationDetails();
  
    // Check if all required fields are filled
    if (!identifier || !age || !gender || !patientstatus || !locationDetails) {
      alert("Please fill in all the required fields");
      return;
    }
  
    // Show the confirmation popup
    setShowConfirmPopup(true);
  };
  const handlePopupResponse = (confirm) => {
    setShowConfirmPopup(false);
    if (confirm) {
      handleConfirm();
    }
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
        {/* Patient Status Input */}
        <Grid item sx={{ width: "300px" }}>
          <FormControl fullWidth>
            <InputLabel shrink={Boolean(patientstatus)}>Patient Status</InputLabel>
            <Select
              value={patientstatus}
              onChange={(e) => setPatientstatus(e.target.value)}
              displayEmpty
              notched>
              <MenuItem value="Pre-treatment">Pre-treatment</MenuItem>
              <MenuItem value="During treatment">During treatment</MenuItem>
              <MenuItem value="Post-treatment">Post-treatment</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Unique Patient Identifier Input */}
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

        {/* Age Input */}
        <Grid item>
          <TextField
            label="Age"
            variant="outlined"
            type="number"
            value={age}
            onChange={handleAgeChange}
            inputProps={{ min: 0, max: 110 }}
          />
        </Grid>

        {/* Gender Input */}
        <Grid item>
          <ToggleButtonGroup
            value={gender}
            exclusive
            onChange={handleGenderChange}
            sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
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

        {/* Location Input */}
        <Grid item>
          <TextField
            label="Location"
            variant="outlined"
            value={locationInput}
            onChange={handleLocationInputChange}
            onBlur={fetchLocationDetails}
            sx={{ width: 300 }}
          />
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

export default ConfirmUpload;