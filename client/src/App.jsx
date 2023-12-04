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
      "SP.POP.DPND.OL"
    ];
  
    const promises = indicators.map((indicator) => {
      const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;
      return fetch(url).then((response) => response.json());
    });
  
    try {
      const data = await Promise.all(promises);
      setCountryIndicatorData(data)
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
          <div
            className="sidebar"
            style={{
              right: sidebarIsOpen ? "0" : "-400px",
            }}
          >
            <div className="country indicator-container">
              <h2>{countryData?.length > 0 && countryData[1][0]?.name || ""}</h2>
            </div>
            <div className="social indicator-container">
              {clickedCountry && (
                <>
                  <h2>Social</h2>
                  <h3>Population Dynamics</h3>
                  <p>Population: {countryIndicatorData?.length > 0 && countryIndicatorData[0][1][0]?.value || ""}</p>
                  <p>Population growth: {countryIndicatorData?.length > 0 && countryIndicatorData[1][1][0]?.value || ""}</p>
                  <p>Birth rate, crude: {countryIndicatorData?.length > 0 && countryIndicatorData[2][1][1]?.value || ""}</p>
                  <p>Death rate, crude: {countryIndicatorData?.length > 0 && countryIndicatorData[3][1][1]?.value || ""}</p>
                  <p>Fertility rate, total: {countryIndicatorData?.length > 0 && countryIndicatorData[4][1][1]?.value || ""}</p>
                  <p>Life expectancy, male: {countryIndicatorData?.length > 0 && countryIndicatorData[5][1][1]?.value || ""}</p>
                  <p>Life expectancy, female: {countryIndicatorData?.length > 0 && countryIndicatorData[6][1][1]?.value || ""}</p>
                  <p>Age dependancy ratio, young: {countryIndicatorData?.length > 0 && countryIndicatorData[7][1][0]?.value || ""}</p>
                  <p>Age dependancy ratio, old: {countryIndicatorData?.length > 0 && countryIndicatorData[8][1][0]?.value || ""}</p>
                  <h3>Education</h3>
                  <h3>Labor</h3>
                  <h3>Health</h3>
                  <h3>Gender</h3>
                </>
              )}
            </div>
            <div className="poverty indicator-container">
              <h2>Poverty & Inequality</h2>
            </div>
            <div className="environment indicator-container">
              <h2>Environmental</h2>
            </div>
            <div className="economy indicator-container">
              <h2>Economy</h2>
            </div>
            <div className="states-markets indicator-container">
              <h2>States & Markets</h2>
            </div>
            <div className="global-links indicator-container">
              <h2>Global Links</h2>
            </div>
            <button onClick={handleSidebarClose}>Close Sidebar</button>
          </div>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
