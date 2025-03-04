import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./ConfirmUpload.css";

function ConfirmUpload() {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, file, age: initialAge, gender: initialGender } = location.state || {}; // Retrieve file, age, and gender

  const [crop, setCrop] = useState({ unit: "%", x: 0, y: 0, width: 100, height: 100 });
  const [croppedImage, setCroppedImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null); // Store resized image
  const [age, setAge] = useState(initialAge || "");
  const [gender, setGender] = useState(initialGender || "");

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

  const handleRetake = () => navigate("/home");

  const API_URL = import.meta.env.VITE_API_URL;
  const handleConfirm = async () => {
    console.log("Confirmed cropped image: ", croppedImage);
    console.log("Age: ", age);
    console.log("Gender: ", gender);

    if (!croppedImage) return;

    try {
      const response = await fetch(`${API_URL}/api/image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: croppedImage, age, gender }), // Send cropped image in original resolution
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

  return (
    <div className="confirm-upload-container">
      <h2>Adjust Your Image</h2>

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
          src={resizedImage} // Use resized image for cropping
          crop={crop}
          onChange={setCrop}
          onComplete={onCropComplete}
          ruleOfThirds
        >
          <img
            src={resizedImage} // Use resized image
            alt="Uploaded"
            ref={imageRef}
            className="confirm-upload-image"
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
        <button onClick={handleRetake}>Retake/Re-upload</button>
        <button onClick={handleConfirm} disabled={!croppedImage}>
          Confirm
        </button>
        <button onClick={handleDownload} disabled={!croppedImage}>
          Download
        </button>
      </div>
    </div>
  );
}

export default ConfirmUpload;