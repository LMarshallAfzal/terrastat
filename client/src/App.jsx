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
  const [clickedCountry, setClickedCountry] = useState(null);
  const [formattedCountry, setFormattedCountry] = useState("");
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleCountryClick = (isClicked, country) => {
    if (isClicked) {
      setClickedCountry(null);
      setFormattedCountry("");
      setSidebarIsOpen(false);
    } else { 
      setClickedCountry(country);
      setFormattedCountry(country.properties.name);
      
      if (formattedCountry.includes(" - ")) {
        const hypenIndex = formattedCountry.indexOf(' - ');
        setFormattedCountry(formattedCountry.substring(0, hypenIndex));
      }
      if (formattedCountry.includes(' ')) {
        formattedCountry.replace(' ', '-');
      }
      fetchCountryData(formattedCountry);
      setSidebarIsOpen(true);
    }
  };

  const fetchCountryData = async (countryName) => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        // Process and return the country data
        console.log(data);
        return data;
      } else {
        throw new Error("Error fetching country data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSidebarClose = () => {
    setClickedCountry(null);
    setSidebarIsOpen(false);
  };

  return (
    <div className="App">
      <div className="map-container">
        <MapContainer
          maxBounds={bounds}
          maxZoom={18}
          minZoom={3}
          center={[51.505, -0.09]}
          zoom={4}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=2K46SsHb5CdTvQzDyjPq"
          />
          {countriesData.features.map((country) => {
            const coordinates = country.geometry.coordinates[0].map((item) => [
              item[1],
              item[0],
            ]);

            const isClicked = clickedCountry === country;

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
                  click: () => handleCountryClick(isClicked, country),
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
          <div
            className="sidebar"
            style={{
              right: sidebarIsOpen ? "0" : "-400px",
            }}
          >
            <h2>Country Details</h2>
            <p>Country Name: {formattedCountry} </p>
            <p>Official Country Name: {formattedCountry} </p>
            <button onClick={handleSidebarClose}>Close Sidebar</button>
          </div>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
