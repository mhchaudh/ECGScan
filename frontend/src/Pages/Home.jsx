import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Home.css'; 
import cameraimage from "../assets/camera-image.png";
import uploadimage from "../assets/upload-icon.png";
import manicon from "../assets/man-icon.png";
import womenicon from "../assets/women-icon.png";

function Home() {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [CapturedImage, setCapturedImage] = useState(null);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [facingMode, setFacingMode] = useState("environment");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(""); // Add gender state

  const location = useLocation();
  const cameFromConfirm = location.state?.cameFromConfirm || false;

  useEffect(() => {
    if (cameFromConfirm) {
      handleTakePictureClick(); // Automatically open the camera if coming from Confirm page
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
        const imageUrl = reader.result; // This is the data URL of the uploaded image
        navigate('/confirmupload', { state: { imageUrl, age, gender } }); // Pass age and gender
      };
      reader.readAsDataURL(file); // Read the file as a data URL
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
      navigate('/confirm', { state: { imageUrl, age, gender } }); // Pass age and gender
    }, 500); 
  };

  const toggleFlash = () => {
    setFlashEnabled(!flashEnabled);
  };

  const toggleCamera = () => {
    setFacingMode(facingMode === "environment" ? "user" : "environment");
    handleTakePictureClick();
  };

  const handleAgeChange = (e) => {
    if (e.target.value < 0 || e.target.value > 110) {
      setAge("");
      return;
    }
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value); // Update gender state
  };

  return (
    <>
      <div>
        <div className="home">
          <div className="uploading">
            <h1 className="upload-title">Upload Patient Info and ECG</h1>
            <input className="age-input" placeholder="Age" min="0" max="110" value={age} onChange={handleAgeChange} type="number"></input>
            <div className="gender-input">
              <label>
                <input type="radio" name="gender" value="female" onChange={handleGenderChange} />
                <img id="input_female" src={womenicon} alt="Female" />
              </label>

              <label>
                <input type="radio" name="gender" value="male" onChange={handleGenderChange} />
                <img id="input_male" src={manicon} alt="Male" />
              </label>
            </div>
            
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