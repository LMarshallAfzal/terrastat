import { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import * as geojson from "./data/countries-fixed.geojson";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleFeatureClick = (e) => {
    setSelectedCountry(e.feature.properties);
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={4}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={geojson}
        style={{
          fillColor: "#f00",
          fillOpacity: 0.5,
          stroke: true,
          weight: 1,
          color: "#000",
        }}
        onEachFeature={(feature, layer) => {
          layer.on("click", handleFeatureClick);
        }}
      />
      {selectedCountry && (
        <div className="country-info">
          <h2>{selectedCountry.name}</h2>
          <p>{selectedCountry.description}</p>
        </div>
      )}
    </MapContainer>
  );
}

export default App;