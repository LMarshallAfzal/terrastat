import { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import countriesData from "./data/countries.js";
import { latLng, latLngBounds } from "leaflet";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

const southwestCorner = latLng([-85.0511, -180]);
const northeastCorner = latLng([85.0511, 180]);
const bounds = latLngBounds(southwestCorner, northeastCorner);

function App() {
  const [clickedPolygonId, setClickedPolygonId] = useState(null);

  return (
    <MapContainer maxBounds={bounds} maxZoom={18} minZoom={3} center={[51.505, -0.09]} zoom={4}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=2K46SsHb5CdTvQzDyjPq"
      />

      {countriesData.features.map((country) => {
        const coordinates = country.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        const isClicked = clickedPolygonId === country;

        return (
          <Polygon
            key={country}
            pathOptions={{
              fillColor: isClicked ? "#fa0000" : "#000",
              fillOpacity: isClicked ? 1 : 0.7,
              weight: isClicked ? 5 : 3,
              opacity: isClicked ? 1 : 0.7,
              dashArray: isClicked ? "" : 3,
              color: isClicked ? "#807c7c" : "black",
            }}
            positions={coordinates}
            eventHandlers={{
              click: () => {
                if (!isClicked) {
                  setClickedPolygonId(country);
                } else {
                  setClickedPolygonId(null);
                }
              },
              mouseover: (e) => {
                if (!isClicked) {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 5,
                    dashArray: "",
                    color: "#807c7c",
                    fillColor: "#ffffff",
                  });
                }
              },
              mouseout: (e) => {
                if (!isClicked) {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 3,
                    dashArray: 3,
                    color: "black",
                    fillColor: "#000",
                  });
                }
              },
            }}
          />
        );
      })}
    </MapContainer>
  );
}

export default App;
