import { useLocation, useNavigate } from "react-router-dom";
import './Confirm.css';

function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl } = location.state;

  const handleRetake = () => {
    navigate('/home');
  };

  const handleConfirm = () => {
    console.log("Confirmed image URL: ", imageUrl);
    // Handle the confirmed image URL (e.g., upload to server)
    navigate('/home');
  };

  return (
    <div className="confirm-container">
      <img src={imageUrl} alt="Captured" className="confirm-image" />
      <button onClick={handleRetake}>Retake</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

export default Confirm;