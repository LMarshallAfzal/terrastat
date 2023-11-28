// import { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import countriesData from "./data/countries.js";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

function App() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={4}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countriesData.features.map((country) => {
        const coordinates = country.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        return (
          <Polygon
            key={country}
            pathOptions={{
              fillColor: "#000",
              fillOpacity: 0.7,
              weight: 5,
              opacity: 1,
              dashArray: 3,
              color: "black",
            }}
            positions={coordinates}
          />
        );
      })}
    </MapContainer>
  );
}

export default App;
