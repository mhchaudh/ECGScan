import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./Confirm.css";

function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl } = location.state || {}; // Ensure there's an image

  const [crop, setCrop] = useState({ unit: "%", x: 0, y: 0, width: 100, height: 100 });
  const [croppedImage, setCroppedImage] = useState(null);
  
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!imageUrl) navigate("/home"); //we direct to home page if there is no image
  }, [imageUrl, navigate]);

  const handleRetake = () => navigate("/home", { state: { cameFromConfirm:true }}); // we redirect to the home page if we want to retake the photo

  const handleConfirm = () => {
    console.log("Confirmed cropped image: ", croppedImage || imageUrl);
    navigate("/home");
  };

  const handleDownload = () => {  // as of now we have the ability to download the cropped image
    if (!croppedImage) return;
    
    const link = document.createElement("a");
    link.href = croppedImage;
    link.download = "cropped-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onCropComplete = (crop) => { // this is to show the cropped image next to the actual image
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

  return (
    <div className="confirm-container">
      <h2>Adjust Your Image</h2>

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
