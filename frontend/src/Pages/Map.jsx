import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography, Paper, CircularProgress, Alert } from "@mui/material";
import "./Map.css";
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
          fetch(`${import.meta.env.VITE_API_URL}/api/getdiagnoses`),
        ]);

        if (!mapResponse.ok || !diagnosesResponse.ok) {
          throw new Error(
            `HTTP error! Status: ${mapResponse.status}, ${diagnosesResponse.status}`
          );
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

  if (loading) return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh' 
    }}>
      <CircularProgress size={60} thickness={4} />
    </Box>
  );
  
  if (error) return (
    <Alert severity="error" sx={{ 
      m: 2, 
      maxWidth: '80%', 
      mx: 'auto' 
    }}>
      <Typography variant="h6">Map Loading Failed</Typography>
      <Typography>{error}</Typography>
    </Alert>
  );
  return (
    <Box sx={{ position: "relative", height: "calc(100vh - 64px)", width: "100%",overflow: "hidden", borderRadius: 2, boxShadow: 3, mt: 2 }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        className="map-container"
        style={{ height: '100%', width: '100%' }}
      >
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
              <Popup maxWidth={300} minWidth={200} closeButton={false}>
                <Paper sx={{ 
                  p: 1.5, 
                  borderRadius: 2,
                  boxShadow: 3
                }}>
                  <Typography variant="subtitle1" sx={{ 
                    fontWeight: 'bold', 
                    mb: 1,
                    color: 'primary.main'
                  }}>
                    {location.display_name}
                  </Typography>
                  {sortedDiagnoses.length > 0 ? (
                    <Box sx={{ maxHeight: 200, overflowY: 'auto', pr: 1 }}>
                      {sortedDiagnoses}
                    </Box>
                  ) : (
                    <Typography variant="body2" sx={{ 
                      fontStyle: 'italic', 
                      color: 'text.secondary' 
                    }}>
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