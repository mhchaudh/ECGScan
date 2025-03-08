import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./Confirm.css";
import {
  Grid,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Dialog, DialogActions, DialogContent, DialogTitle
} from "@mui/material";
import { Male, Female } from "@mui/icons-material";

function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl} = location.state || {}; // Retrieve file, age, and gender

  const [crop, setCrop] = useState({ unit: "%", x: 0, y: 0, width: 100, height: 100 });
  const [croppedImage, setCroppedImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null); // Store resized image
  const [age, setAge] = useState( "");
  const [gender, setGender] = useState( "");
  const [identifier, setIdentifier] = useState("");
  const previousIdentifiers = JSON.parse(localStorage.getItem("uniqueIdentifiers")) || [];
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const originalImageRef = useRef(null);

  useEffect(() => {
    if (!imageUrl) {
      navigate("/home"); // Redirect if no image is provided
      return;
    }
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
    originalImageRef.current = img; // Store the original image
    };
    resizeImage(imageUrl, 500, 500, setResizedImage); // Resize uploaded image for display
  }, [imageUrl, navigate]);

  // Function to resize image only for display
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

      callback(canvas.toDataURL("image/png")); // Convert to Base64
    };
    img.src = src;
  };

  const handleRetake = () => navigate("/home", { state: { cameFromConfirm: true }});

  const API_URL = import.meta.env.VITE_API_URL;
  const handleConfirm = async () => {
    console.log("Confirmed image: ", croppedImage || imageUrl);
    console.log("Age: ", age);
    console.log("Gender: ", gender);
  
  
    const previousIdentifiers = JSON.parse(localStorage.getItem("uniqueIdentifiers")) || [];
  
    
    const uniqueIdentifiersSet = new Set(previousIdentifiers);

    if (identifier && !uniqueIdentifiersSet.has(identifier)) {
      uniqueIdentifiersSet.add(identifier);
    }
  
    
    const uniqueIdentifiers = Array.from(uniqueIdentifiersSet);
  
    localStorage.setItem("uniqueIdentifiers", JSON.stringify(uniqueIdentifiers));
  
    const imageToSend = croppedImage || imageUrl;
  
    try {
      const response = await fetch(`${API_URL}/api/image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageToSend, age: age, gender: gender, identifier: identifier }),
      });
      if (!response.ok) {
        console.error("Upload failed");
      } else {
        console.log("Image uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  
    navigate("/home");
  };
  const handleDownload = () => {
    const imagetodownload = croppedImage || imageUrl

    const link = document.createElement("a");
    link.href = imagetodownload;
    link.download = "cropped-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onCropComplete = (crop) => {
    if (originalImageRef.current && canvasRef.current) {
      const image = originalImageRef.current; // Use the original image for cropping
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
  
      setCroppedImage(canvas.toDataURL("image/png")); // Store cropped image in original resolution
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

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
  }
  const handleConfirmClick = () => {
    setShowConfirmPopup(true);
  };
  
  const handlePopupResponse = (confirm) => {
    setShowConfirmPopup(false);
    if (confirm) {
      handleConfirm(); // continue to confirm if we press yes
    }
  };

  return (
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
      {/* Confirmation Dialog (Popup) */}
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
  );
}

export default Confirm;