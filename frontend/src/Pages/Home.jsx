import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Home.css'; 
import cameraimage from "../assets/camera-image.png";
import uploadimage from "../assets/upload-icon.png";

function Home() {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [CapturedImage, setCapturedImage] = useState(null);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [facingMode, setFacingMode] = useState("environment");

  const location = useLocation();
  const cameFromConfirm = location.state?.cameFromConfirm || false;
  const cameFromConfirmUpload = location.state?.cameFromConfirmUpload || false;
  useEffect(() => {
    if (cameFromConfirm) {
      handleTakePictureClick(); // Automatically open the camera if coming from Confirm page
    } else if (cameFromConfirmUpload) {
      handleUploadButtonClick(); // Automatically open the file upload dialog if coming from ConfirmUpload page
    }
  }, [cameFromConfirm, cameFromConfirmUpload]);
  

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        navigate('/confirmupload', { state: { imageUrl, file } });
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
    if (videoRef.current.srcObject){
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
    setFacingMode(facingMode === "environment" ? "user" : "environment");
    handleTakePictureClick();
  };

  return (
    <>
      <div>
        <div className="home">
          <div className="uploading">
            <h1 className="upload-title">Upload ECG Image</h1>
            <button className='picture-button' onClick={handleTakePictureClick}>
              <img src={cameraimage} alt="Take a Picture" className="camera-image-icon" />
            </button>
            <button className='upload-button' onClick={handleUploadButtonClick}>
              <img src={uploadimage} alt="Upload Image" className="upload-image-icon" />
            </button>
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileInputChange}
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
