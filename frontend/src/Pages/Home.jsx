import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// Refrenced: https://mui.com/material-ui/all-components/?srsltid=AfmBOoo3ZuM3R9qLhp_JDLn0Gp7fmQW_nsLmIcqM5lASyIL9qzzICiwf
import { Button, Grid, Typography, IconButton } from "@mui/material";
import { PhotoCamera, CloudUpload, FlashOn, FlashOff, FlipCameraAndroid } from "@mui/icons-material";
import './Home.css'; 

function Home() {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [facingMode, setFacingMode] = useState("environment");

  const location = useLocation();
  const cameFromConfirm = location.state?.cameFromConfirm || false;

  useEffect(() => {
    if (cameFromConfirm) {
      handleTakePictureClick();
    }
  }, [cameFromConfirm]);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        navigate('/confirmupload', { state: { imageUrl } });
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
      navigate('/confirm', { state: { imageUrl } });
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
            <Typography variant="h4" color="black">Upload or Take a Picture of your ECG Report</Typography>
          </Grid>
          <Grid item>
            <Button 
                sx={{ backgroundColor: "#4CAF50", color: "white", "&:hover": { backgroundColor: "#388E3C" }, padding: "20px 40px",  
                fontSize: "1.5rem",   
                height: "80px",        
                minWidth: "250px" }}
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
                sx={{ backgroundColor: "#2196F3", color: "white", "&:hover": { backgroundColor: "#1976D2" } , padding: "20px 40px",  
                fontSize: "1.5rem",   
                height: "80px",        
                minWidth: "250px" }}
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