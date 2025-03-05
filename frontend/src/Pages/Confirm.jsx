import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./Confirm.css";

function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, age: initialAge, gender: initialGender, identifier: initialIdentifier  } = location.state || {}; // Retrieve age and gender

  const [crop, setCrop] = useState({ unit: "%", x: 0, y: 0, width: 100, height: 100 });
  const [croppedImage, setCroppedImage] = useState(null);
  const [age, setAge] = useState(initialAge || ""); // Local state for age
  const [gender, setGender] = useState(initialGender || ""); // Local state for gender
  const [identifier, setIdentifier] = useState(initialIdentifier || "");
  const previousIdentifiers = JSON.parse(localStorage.getItem("uniqueIdentifiers")) || [];

  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!imageUrl) navigate("/home"); // Redirect to home page if there is no image
  }, [imageUrl, navigate]);

  const handleRetake = () => navigate("/home", { state: { cameFromConfirm: true } }); // Redirect to the home page to retake the photo

  const API_URL = import.meta.env.VITE_API_URL;
  const handleConfirm = async () => {
    console.log("Confirmed cropped image: ", croppedImage || imageUrl);
    console.log("Age: ", age);
    console.log("Gender: ", gender);
    previousIdentifiers.push(identifier);
    localStorage.setItem("uniqueIdentifiers", JSON.stringify(previousIdentifiers));

    const imageToSend = croppedImage || imageUrl;
    try {
      const response = await fetch(`${API_URL}/api/image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageToSend, age: age, gender: gender,identifier:previousIdentifiers }), // Include age and gender in the request body
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
    if (!croppedImage) return;

    const link = document.createElement("a");
    link.href = croppedImage;
    link.download = "cropped-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onCropComplete = (crop) => {
    if (imageRef.current && canvasRef.current) {
      const image = imageRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

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

  const handleGenderChange = (e) => {
    setGender(e.target.value); // Update gender state
  };

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
  }

  return (
    <div className="confirm-container">
      <h2>Adjust Your Image</h2>

      {/* Editable Identifier Input */}
      <div className="identifier-input-container">
        <label htmlFor="identifier">Identifier:</label>
        <input
          id="identifier"
          type="text"
          placeholder="Identifier"
          value={identifier}
          onChange={handleIdentifierChange}
          autoComplete="off"
        />
      </div>

      {/* Editable Age Input */}
      <div className="age-input-container">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          placeholder="Age"
          min="0"
          max="110"
          value={age}
          onChange={handleAgeChange}
        />
      </div>

      {/* Editable Gender Input */}
      <div className="gender-input-container">
        <label>Gender:</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
        </div>
      </div>

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
          <h3>Cropped Image:</h3>
          {croppedImage ? (
            <img src={croppedImage} alt="Cropped Preview" className="cropped-image" />
          ) : (
            <p>No cropped image yet</p>
          )}
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <div className="button-group">
        <button onClick={handleRetake}>Retake</button>
        <button onClick={handleConfirm} disabled={!croppedImage}>Confirm</button>
        <button onClick={handleDownload} disabled={!croppedImage}>Download</button>
      </div>
    </div>
  );
}

export default Confirm;