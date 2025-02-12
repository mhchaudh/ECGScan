import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Home.css'; 
import cameraimage from "../assets/camera-image.png"
import uploadimage from "../assets/upload-icon.png"
import manicon from "../assets/man-icon.png"
import womenicon from "../assets/women-icon.png"
function Home() {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [CapturedImage, setCapturedImage] = useState(null);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [facingMode, setFacingMode] = useState("environment");
  const [age, setAge] = useState("");

  const location = useLocation();
  const cameFromConfirm = location.state?.cameFromConfirm || false; // Check if the user came from Confirm page

  useEffect(() => {
    if (cameFromConfirm) {
      handleTakePictureClick(); // Automatically open the camera if coming from Confirm page
    }
  });

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
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
    videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    navigate('/confirm', { state: { imageUrl } });
  };

  const toggleFlash = () => {
    setFlashEnabled(!flashEnabled);
    // Note: Flash control is not supported in all browsers and devices
  };

  const toggleCamera = () => {
    setFacingMode(facingMode === "environment" ? "user" : "environment");
    handleTakePictureClick();
  };
  const handleAgeChange = (e) => {
    let value = e.target.value;
    if (value !== "" && (value < 0 || value > 110)) {
      value = "";
    }
    setAge(value);
  };
  return (
    <>
      <div>
        <input className="age-input" placeholder= "Age (e.g. 25)" min="0" max="110" value={age} onChange={handleAgeChange} type="number"></input>
        <div className="gender-input">
          <input id="gender-female" value="female" type="radio" name="gender"/>
          <img src = {womenicon} id = "input_female"/>
          <input id="gender-male" value="male" type="radio" name="gender"/>
          <img src = {manicon} id = "input_male"/>
        </div>
        <button className = 'picture-button' onClick={handleTakePictureClick}><img
              src={cameraimage}
              alt="Take a Picture"
              className="camera-image-icon"
            /></button>
        <button className = 'upload-button' onClick={handleUploadButtonClick}><img
              src={uploadimage}
              alt="Upload Image"
              className="upload-image-icon"
            />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        {isCameraOpen && (
          <div className="camera-container">
            <video ref={videoRef} className="camera-view"></video>
            <button className="capture-button" onClick={handleCapture}> </button>
            <button className="flash-button" onClick={toggleFlash}>
              {flashEnabled ? "⚡" : "⚡"}
            </button>
            <button className="toggle-camera-button" onClick={toggleCamera}>
              🔄
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
