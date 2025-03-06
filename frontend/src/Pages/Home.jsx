import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// Refrenced: https://mui.com/material-ui/all-components/?srsltid=AfmBOoo3ZuM3R9qLhp_JDLn0Gp7fmQW_nsLmIcqM5lASyIL9qzzICiwf
import { Button, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography, IconButton } from "@mui/material";
import { PhotoCamera, CloudUpload, Male, Female, FlashOn, FlashOff, FlipCameraAndroid } from "@mui/icons-material";
import './Home.css'; 

function Home() {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [facingMode, setFacingMode] = useState("environment");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [previousIdentifiers, setPreviousIdentifiers] = useState(() => {
    return JSON.parse(localStorage.getItem("uniqueIdentifiers")) || [];
  });

  const location = useLocation();
  const cameFromConfirm = location.state?.cameFromConfirm || false;

  useEffect(() => {
    if (cameFromConfirm) {
      handleTakePictureClick();
    }
  }, [cameFromConfirm]);

  // Save identifier to localStorage
  const handleIdentifierChange = (e) => {
    const newIdentifier = e.target.value;
    setIdentifier(newIdentifier);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        navigate('/confirmupload', { state: { imageUrl, age, gender, identifier } });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTakePictureClick = () => {
    setIsCameraOpen(true);
    navigator.mediaDevices.getUserMedia({ video: { facingMode } })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        console.error("Error accessing camera: ", err);
      });
  };

  const handleCapture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png');
    setCapturedImage(imageUrl);
    setIsCameraOpen(false);

    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }

    setTimeout(() => {
      navigate('/confirm', { state: { imageUrl, age, gender, identifier } });
    }, 500);
  };

  const toggleFlash = () => {
    setFlashEnabled(!flashEnabled);
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === "environment" ? "user" : "environment"));
    setTimeout(handleTakePictureClick, 500); // Restart camera smoothly
  };

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" direction="column">
      {!isCameraOpen ? (
        <>
          <Grid item>
            <Typography variant="h4" color="black">Upload Patient Info and ECG</Typography>
            {/* Typography replaces h headers*/}

          </Grid>
          <Grid item>

            {/* I prompted ChatGPT to ask "How to use mui textfields with datalists" */}
            {/* I prompted ChatGPT to ask "How to combine textfields with datalists in material ui" */}
            <TextField // input field for mui
                autoComplete="off"
                label="Unique Patient Identifier"
                variant="outlined"
                value={identifier}
                onChange={handleIdentifierChange}
                sx={{ width: 300 }}
                inputProps={{ list: "identifiers" }} // Link to datalist for suggestions
              />
              <datalist id="identifiers">
                <option value=""></option>
                {previousIdentifiers.map((id, index) => (
                  <option key={index} value={id}>{id}</option>
                ))}
              </datalist>

</Grid>
          <Grid item>
            <TextField 
              label="Age"
              variant="outlined"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              inputProps={{ min: 0, max: 110 }}
            />
          </Grid>
          <Grid item>
          <ToggleButtonGroup

          // I prompted ChatGPT to ask "Give me a guide on how to use mui toggle button groups"
                value={gender}
                exclusive
                onChange={(event, newGender) => setGender(newGender)}
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
          <Grid item>
            <Button 
                sx={{ backgroundColor: "#4CAF50", color: "white", "&:hover": { backgroundColor: "#388E3C" } }}
            variant="contained" color="primary" startIcon={<PhotoCamera />} onClick={handleTakePictureClick}>
              Open Camera
            </Button>
          </Grid>
          <Grid item>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
            <Button 
                sx={{ backgroundColor: "#2196F3", color: "white", "&:hover": { backgroundColor: "#1976D2" } }}

            variant="contained" color="secondary" startIcon={<CloudUpload />} onClick={handleUploadButtonClick}>
              Upload Image
            </Button>
          </Grid>
        </>
      ) : (
        <Grid item>
          <div className="camera-container">
            <video ref={videoRef} className="camera-view"></video>

            <div className="camera-buttons">
              <IconButton color="primary" className="flash-button" onClick={toggleFlash}>
                {flashEnabled ? <FlashOn /> : <FlashOff />}
              </IconButton>
              <IconButton color="primary" className="toggle-camera-button" onClick={toggleCamera}>
                <FlipCameraAndroid />
              </IconButton>
              <IconButton color="primary" className="capture-button" onClick={handleCapture}>
                <PhotoCamera />
              </IconButton>
            </div>

            <Button variant="contained" color="primary" onClick={handleCapture}>
              Capture
            </Button>
          </div>
        </Grid>
      )}
    </Grid>
  );
}

export default Home;
