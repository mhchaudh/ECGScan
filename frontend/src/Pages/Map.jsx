import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography, Paper, CircularProgress, Alert } from "@mui/material";
import './Map.css';
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [diagnoses, setDiagnoses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mapResponse, diagnosesResponse] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/getmap`),
          fetch(`${import.meta.env.VITE_API_URL}/api/getdiagnoses`)
        ]);

        if (!mapResponse.ok || !diagnosesResponse.ok) {
          throw new Error(`HTTP error! Status: ${mapResponse.status}, ${diagnosesResponse.status}`);
        }

        const locationsData = await mapResponse.json();
        const diagnosesData = await diagnosesResponse.json();

        setLocations(locationsData);
        setDiagnoses(diagnosesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <CircularProgress sx={{ display: "block", margin: "auto", mt: 2 }} />;
  if (error) return <Alert severity="error" sx={{ m: 2 }}>{error}</Alert>;

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <MapContainer center={[51.505, -0.09]} zoom={3} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => {
          const diagnosesList = diagnoses[location.display_name] || {};
          const sortedDiagnoses = Object.entries(diagnosesList)
            .sort((a, b) => b[1] - a[1])
            .map(([diagnosis, count]) => (
              <Typography key={diagnosis} variant="body2" sx={{ my: 0.5 }}>
                <strong>{diagnosis}</strong>: {count}
              </Typography>
            ));

          return (
            <Marker key={index} position={[location.lat, location.long]}>
              <Popup>
                <Paper sx={{ p: 2, minWidth: 200 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {location.display_name}
                  </Typography>
                  {sortedDiagnoses.length > 0 ? sortedDiagnoses : (
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                      No diagnoses recorded
                    </Typography>
                  )}
                </Paper>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Box>
  );
};

export default Map;
