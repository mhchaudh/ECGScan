import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./ConfirmUpload.css";
import {
  Grid,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress
} from "@mui/material";
import { Male, Female } from "@mui/icons-material";

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

  const handleRetake = () => navigate("/home", { state: { cameFromConfirmUpload: true } }); //navigate to home and automatically press the upload button

  const API_URL = import.meta.env.VITE_API_URL;
  const handleConfirm = async () => {
    try {
      console.log("Confirmed image: ", croppedImage || imageUrl);
      console.log("Age: ", age);
      console.log("Gender: ", gender);
  
      const uniqueIdentifiersSet = new Set(previousIdentifiers);
      if (identifier && !uniqueIdentifiersSet.has(identifier)) {
        uniqueIdentifiersSet.add(identifier);
      }
      const uniqueIdentifiers = Array.from(uniqueIdentifiersSet);
      localStorage.setItem("uniqueIdentifiers", JSON.stringify(uniqueIdentifiers));
  
      // Remove image data from localStorage, only store metadata
      const historyData = JSON.parse(localStorage.getItem("history")) || [];
  
      // Create a new history item without storing the image
      const newHistoryItem = {
        identifier: identifier,
        age: age,
        gender: gender,
        timestamp: new Date().toISOString(),
      };
  
      // Add new history item to the beginning of the array
      historyData.unshift(newHistoryItem);
  
      // Limit the history array to the latest few items, e.g., last 10 items.
      if (historyData.length > 10) {
        historyData.pop(); // Keep the last 10 entries
      }
  
      localStorage.setItem("history", JSON.stringify(historyData)); // Save the updated history
  
      // Store the image as Base64 in localStorage with a unique key
      const imageToSave = croppedImage || imageUrl; // Use cropped image or original
      const image = new Image();
      image.src = imageToSave;
  
      image.onload = async function () {
        // Resize the image before saving it to localStorage to avoid quota issues
        resizedImage2(image, 500, 500, async function (resizedBase64) {
          // Save the resized Base64 image data in localStorage with a unique key
          localStorage.setItem(`imgData_${identifier}`, resizedBase64);
          console.log("Image saved to localStorage");
  
          // Proceed with the rest of the code after storing the image
          try {
            // Upload the image if needed (optional)
            const uploadResponse = await fetch(`${API_URL}/api/image`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                image: imageToSave,
                age: age,
                gender: gender,
                identifier: identifier,
              }),
            });
  
            if (!uploadResponse.ok) {
              console.error("Upload failed, proceeding with classification anyway.");
            } else {
              console.log("Image uploaded successfully");
            }
  
            setLoading(true);
            // Classify the ECG
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
  
            // Store the classification result in localStorage
            localStorage.setItem(`classificationResult_${identifier}`, JSON.stringify(classifyData));
  
            // Fetch the processed image from the backend
            const imageResponse = await fetch(`${API_URL}/api/image`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                image: croppedImage || imageUrl, // Send the image data (cropped or original)
                age: age,
                gender: gender,
                identifier: identifier,
              }),
            });
  
            const imageData = await imageResponse.json();
            const base64Image = imageData.image; // Base64 encoded image
  
            // Fake a 5-second loading delay
            await new Promise((resolve) => setTimeout(resolve, 5000));
            setLoading(false);
  
            // Navigate to results page with classification data and image
            navigate("/ecg-results", {
              state: {
                identifier: identifier, // Pass the identifier to fetch the correct result
              },
            });
          } catch (error) {
            console.error("Error classifying ECG: ", error);
            setLoading(false);
          }
        });
      };
    } catch (error) {
      console.error("Error saving image to localStorage: ", error);
    }
  };
  // Function to resize the image before saving it to localStorage
  function resizedImage2(img, maxWidth, maxHeight, callback) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
  
    let width = img.width;
    let height = img.height;
  
    // Maintain aspect ratio
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
  
    callback(canvas.toDataURL("image/png")); // Call the callback with the resized image
  }
  
  
  
  

  // Handle image download
  const handleDownload = () => {
    const imagetodownload = croppedImage || imageUrl;
    const link = document.createElement("a");
    link.href = imagetodownload;
    link.download = "cropped-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle image cropping
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

      setCroppedImage(canvas.toDataURL("image/png")); // Store cropped image
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
  const handleConfirmClick = () => {
    if (!identifier || !age || !gender) {
      alert("Please fill in all the required fields");
      return; 
    }
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
          zIndex: 9999
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
        <Typography variant="h4" color="black">Adjust Your Image</Typography>
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
          inputProps={{ list: "identifiers" }} // Link to datalist for suggestions
        />
        <datalist id="identifiers">
          {previousIdentifiers.map((id, index) => (
            <option key={index} value={id}>{id}</option>
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
              color: "white !important", // Ensures white text at all times
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
              color: "white !important", // Ensures white text at all times
              "&:hover": { backgroundColor: gender === "female" ? "#c2185b !important" : "gray" },
            }}
          >
            <Female sx={{ marginRight: 1, color: "white" }} /> Female
          </ToggleButton>
        </ToggleButtonGroup>
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
            <img
              src={imageUrl}
              alt="Captured"
              ref={imageRef}
              className="confirm-image"
            />
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
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRetake}
            >
              Retake
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirmClick}
            >
              Confirm
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              onClick={handleDownload}
            >
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