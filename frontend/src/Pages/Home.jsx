import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// Refrenced: https://mui.com/material-ui/all-components/?srsltid=AfmBOoo3ZuM3R9qLhp_JDLn0Gp7fmQW_nsLmIcqM5lASyIL9qzzICiwf
import { Button, Grid, Typography, IconButton } from "@mui/material";
import { PhotoCamera, CloudUpload, FlashOn, FlashOff, FlipCameraAndroid } from "@mui/icons-material";
import logo from '../assets/1-3b2842e1-removebg-preview.png'; 
import './Home.css'; 

const Home = () => {
  const fileInputRef = useRef(null); 
  const videoRef = useRef(null); 
  const navigate = useNavigate(); 
  const [isCameraOpen, setIsCameraOpen] = useState(false); 
  const [capturedImage, setCapturedImage] = useState(null); 
  const [flashEnabled, setFlashEnabled] = useState(false); 
  const [facingMode, setFacingMode] = useState("environment"); 
  const location = useLocation(); 
  
  // check if the user is coming from confirmation pages
  const cameFromConfirm = location.state?.cameFromConfirm || false;
  const cameFromConfirmUpload = location.state?.cameFromConfirmUpload || false;
  // if it is from picture, we retake the picture, if not, we retake the upload
  useEffect(() => {
    if (cameFromConfirm) {
      handleTakePictureClick();
    } else if (cameFromConfirmUpload) {
      handleUploadButtonClick();
    }
  }, [cameFromConfirm, cameFromConfirmUpload]);

  // this is to trigger the file input click for uploading an image
  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  // this is to handle file selection and navigate to the confirmation page
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

  // this is to to open the camera
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

  // this is to capture the image from the video stream
  const handleCapture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png');
    setCapturedImage(imageUrl);
    setIsCameraOpen(false);

    // stop the camera stream
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }

    // navigate to the confirmation page with the captured image
    setTimeout(() => {
      navigate('/confirm', { state: { imageUrl } });
    }, 500);
  };

  // toggle the camera flash (wont work on laptops, etc)
  const toggleFlash = () => {
    setFlashEnabled(!flashEnabled);
  };

  // toggle between front and back camera(wont work on laptops, etc)
  const toggleCamera = () => {
    setFacingMode((prev) => (prev === "environment" ? "user" : "environment"));
    setTimeout(handleTakePictureClick, 500); // restart the camera
  };

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" direction="column" style={{ height: '100vh' }}>
      {!isCameraOpen ? (
        <>
          {/* Logo Display */}
          <Grid item>
            <img 
              src={logo}
              alt="ECGenius Logo" 
              style={{ height: '200px', marginBottom: '20px' }} 
            />
          </Grid>
          
          {/* Title */}
          <Grid item>
            <Typography variant="h4" color="black" align="center" style={{ fontWeight: 'bold', marginBottom: '20px', fontFamily: 'Monaco' }}>
              Take or Upload ECG Report
            </Typography>
          </Grid>
          
          {/* Open Camera Button */}
          <Grid item>
            <Button 
                sx={{ backgroundColor: "#4CAF50", color: "white", "&:hover": { backgroundColor: "#388E3C" }, padding: "20px 46px",  
                fontSize: "1.5rem", height: "80px", minWidth: "250px", fontFamily: 'Monaco' }}
                variant="contained" color="primary" startIcon={<PhotoCamera />} onClick={handleTakePictureClick}>
              Open Camera
            </Button>
          </Grid>
          
          {/* Upload Image Button */}
          <Grid item>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
            <Button 
                sx={{ backgroundColor: "#2196F3", color: "white", "&:hover": { backgroundColor: "#1976D2" }, padding: "20px 40px",  
                fontSize: "1.5rem", height: "80px", minWidth: "250px", fontFamily: 'Monaco' }}
                variant="contained" color="secondary" startIcon={<CloudUpload />} onClick={handleUploadButtonClick}>
              Upload Image
            </Button>
          </Grid>
        </>
      ) : (
        <Grid item>
          {/* Camera View */}
          <div className="camera-container">
            <video ref={videoRef} className="camera-view"></video>

            {/* Camera Control Buttons */}
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
          </div>
        </Grid>
      )}
    </Grid>
  );
}

export default Home;
