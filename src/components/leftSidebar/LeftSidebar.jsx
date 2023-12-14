import "../../styling/LeftSidebar.css";
import "../../styling/loading.css";
// import { useState, useEffect } from "react";

import { MapContainer, TileLayer } from "react-leaflet";

const LeftSidebar = ({
  countryData,
  countryDataLoading,
  restCountryData,
  sidebarIsOpen,
  handleSidebarClose,
}) => {
  // const [coordinates, setCoordinates] = useState([]);

  // const formatCoordinates = (latlng) => {
  //   const lat = latlng[0]
  //   const long = latlng[1]
  //   setCoordinates([lat, long])

  //   return coordinates
  // };

  return (
    <div
      className="left-sidebar"
      style={{
        left: sidebarIsOpen ? "0" : "-400px",
      }}
    >
      {countryDataLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          {countryData[0]?.message ? (
            <div className="no-data-message">No country data available</div>
          ) : (
            <>
              <div className="name indicator-container">
                <h2>
                  {(countryData?.length > 0 && countryData[1][0]?.name) || ""}
                </h2>
                <img
                  className="flag"
                  src={
                    restCountryData[0]?.flags.png ||
                    "src/assets/no-data-flag.jpg"
                  }
                  alt="Country flag"
                />
              </div>
              <div className="indicator-container">
                <MapContainer
                  // center={restCountryData[0]?.latlng}
                  center={[0, 0]}
                  zoom={2}
                  style={{ width: "100%", height: "200px" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                </MapContainer>
              </div>
            </>
          )}
        </>
      )}
      <button onClick={handleSidebarClose}>Close Sidebar</button>
    </div>
  );
};

export default LeftSidebar;
