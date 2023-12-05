import { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import countriesData from "./data/countries.js";
import Sidebar from "./Sidebar";
import { latLng, latLngBounds } from "leaflet";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

const southwestCorner = latLng([-85.0511, -180]);
const northeastCorner = latLng([85.0511, 180]);
const bounds = latLngBounds(southwestCorner, northeastCorner);

function App() {
  const [clickedCountry, setClickedCountry] = useState(null);
  const [countryData, setCountryData] = useState([]);
  const [countryIndicatorData, setCountryIndicatorData] = useState([]);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleCountryClick = (isClicked, country) => {
    if (isClicked) {
      setClickedCountry(null);
      setSidebarIsOpen(false);
    } else {
      setClickedCountry(country);
      fetchCountryData(country.properties.code);
      fetchCountryIndicatorData(country.properties.code);
      setSidebarIsOpen(true);
      console.log(countryIndicatorData);
    }
  };

  const fetchCountryData = async (countryCode) => {
    // const url = `https://restcountries.com/v3.1/name/${countryName}`;
    const url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        // Process and return the country data
        setCountryData(data);
        return data;
      } else {
        throw new Error("Error fetching country data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCountryIndicatorData = async (countryCode) => {
    const indicators = [
      "SP.POP.TOTL",
      "SP.POP.GROW",
      "SP.DYN.CBRT.IN",
      "SP.DYN.CDRT.IN",
      "SP.DYN.TFRT.IN",
      "SP.DYN.LE00.MA.IN",
      "SP.DYN.LE00.FE.IN",
      "SP.POP.DPND.YG",
      "SP.POP.DPND.OL",
      "SE.XPD.TOTL.GD.ZS",
      "SE.PRM.ENRR",
      "SE.SEC.ENRR",
      "SE.TER.ENRR",
      "SE.SEC.PROG.ZS",
      "SE.PRM.CMPT.ZS",
      "SE.ADT.1524.LT.ZS",
      "SL.TLF.CACT.ZS",
      "SL.IND.EMPL.ZS",
      "SL.AGR.EMPL.ZS",
      "SL.SRV.EMPL.ZS",
      "SL.EMP.TOTL.SP.ZS",
      "SL.UEM.TOTL.ZS",
      "SL.TLF.0714.ZS",
    ];

    const promises = indicators.map((indicator) => {
      const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;
      return fetch(url).then((response) => response.json());
    });

    try {
      const data = await Promise.all(promises);
      setCountryIndicatorData(data);
      return data;
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
          <Sidebar
            countryData={countryData}
            countryIndicatorData={countryIndicatorData}
            handleSidebarClose={handleSidebarClose}
            clickedCountry={clickedCountry}
            sidebarIsOpen={sidebarIsOpen}
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
