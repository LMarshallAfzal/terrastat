import { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import countriesData from "./data/countries.json";
import useCountryData from "./hooks/useCountryData";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import { latLng, latLngBounds } from "leaflet";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const southwestCorner = latLng([-85.0511, -180]);
const northeastCorner = latLng([85.0511, 180]);
const bounds = latLngBounds(southwestCorner, northeastCorner);

const defaultStyle = {
  fillColor: "#000",
  fillOpacity: 0.7,
  weight: 3,
  opacity: 0.7,
  dashArray: 3,
  color: "black",
};

const highlightStyle = {
  fillOpacity: 0.7,
  weight: 5,
  dashArray: "",
  color: "#807c7c",
  fillColor: "#ffffff",
};

const clickStyle = {
  fillColor: "#fa0000",
  fillOpacity: 1,
  weight: 5,
  opacity: 1,
  dashArray: "",
  color: "#807c7c",
};

function App() {
  const {
    fetchCountryData,
    fetchRESTCountryData,
    fetchPeopleIndicatorData,
    fetchEconomicIndicatorData,
    fetchEnvironmentIndicatorData,
    restCountryLoading,
    countryDataLoading,
    peopleIndicatorLoading,
    economicIndicatorLoading,
    environmentIndicatorLoading,
  } = useCountryData();

  const [clickedCountry, setClickedCountry] = useState(null);
  const [countryData, setCountryData] = useState([]);
  const [restCountryData, setRestCountryData] = useState({});
  const [peopleIndicatorData, setPeopleIndicatorData] = useState([]);
  const [environmentIndicatorData, setEnvironmentIndicatorData] = useState([]);
  const [economicIndicatorData, setEconomicIndicatorData] = useState([]);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [countryStyles, setCountryStyles] = useState({});

  // useEffect(() => {
  //   console.log("Clicked Country Updated:", clickedCountry);
  // }, [clickedCountry]);

  const handleCountryClick = async (country) => {
    if (clickedCountry === country.properties.ISO_A3) {
      setClickedCountry("");
      setSidebarIsOpen(false);
      setCountryStyles({});
    } else {
      setSidebarIsOpen(true);

      const [countryData, restData] = await Promise.all([
        fetchCountryData(country.properties.ISO_A3),
        fetchRESTCountryData(country.properties.ADMIN),
      ]);
      
      setCountryData(countryData);
      setRestCountryData(restData);

      setPeopleIndicatorData(
        await fetchPeopleIndicatorData(country.properties.ISO_A3)
      );
      setEconomicIndicatorData(
        await fetchEconomicIndicatorData(country.properties.ISO_A3)
      );
      setEnvironmentIndicatorData(
        await fetchEnvironmentIndicatorData(country.properties.ISO_A3)
      );

      setCountryStyles({
        [country.properties.ISO_A3]: clickStyle,
      });

      setClickedCountry(country.properties.ISO_A3);
    }
  };

  const onEachCountry = (country, layer) => {
    layer.on({
      click: () => {
        handleCountryClick(country);
      },
      mouseover: () => {
        if (clickedCountry !== country.properties.ISO_A3) {
          setCountryStyles((prevStyles) => ({
            ...prevStyles,
            [country.properties.ISO_A3]: highlightStyle,
          }));
        }
      },
      mouseout: () => {
        if (clickedCountry !== country.properties.ISO_A3) {
          setCountryStyles((prevStyles) => ({
            ...prevStyles,
            [country.properties.ISO_A3]: defaultStyle,
          }));
        }
      },
    });
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

          <GeoJSON
            data={countriesData.features}
            style={(feature) =>
              countryStyles[feature.properties.ISO_A3] || defaultStyle
            }
            onEachFeature={onEachCountry}
            
          />
          <RightSidebar
            countryData={countryData}
            peopleIndicatorData={peopleIndicatorData}
            environmentIndicatorData={environmentIndicatorData}
            economicIndicatorData={economicIndicatorData}
            countryDataLoading={countryDataLoading}
            peopleIndicatorLoading={peopleIndicatorLoading}
            economicIndicatorLoading={economicIndicatorLoading}
            environmentIndicatorLoading={environmentIndicatorLoading}
            handleSidebarClose={handleSidebarClose}
            sidebarIsOpen={sidebarIsOpen}
          />
          <LeftSidebar
            countryData={countryData}
            restCountryData={restCountryData}
            countryDataLoading={countryDataLoading}
            restCountryLoading={restCountryLoading}
            sidebarIsOpen={sidebarIsOpen}
            handleSidebarClose={handleSidebarClose}
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
