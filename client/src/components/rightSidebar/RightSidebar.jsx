import { useState } from "react";
import "./RightSidebar.css";
import "../../styling/loading.css";
import CountryData from "./countryName/CountryData";
import PeopleStatistics from "./peopleStats/PeopleStatistics";
import EnvironmentStatistics from "./environmentStats/EnvironmentStatistics";
import EconomyStatistics from "./economyStats/EconomyStatistics";

const RightSidebar = ({
  countryData,
  peopleIndicatorData,
  environmentIndicatorData,
  economicIndicatorData,
  countryDataLoading,
  peopleIndicatorLoading,
  economicIndicatorLoading,
  environmentIndicatorLoading,
  handleSidebarClose,
  sidebarIsOpen,
}) => {
  const [activeIndicator, setActiveIndicator] = useState("people");

  // const handleSectionError = (error) => {
  //   setError(`Could not find data. Error: ${error.message}`);
  // };

  return (
    <div
      className="right-sidebar"
      style={{
        right: sidebarIsOpen ? "0" : "-400px",
      }}
    >
      {countryData[0]?.message ? (
        <div className="no-data-message">No country data available</div>
      ) : (
        <>
          <CountryData
            countryData={countryData}
            countryDataLoading={countryDataLoading}
            setActiveIndicator={setActiveIndicator}
            activeIndicator={activeIndicator}
          />

          {activeIndicator === "people" && (
            <PeopleStatistics
              peopleIndicatorData={peopleIndicatorData}
              peopleIndicatorLoading={peopleIndicatorLoading}
            />
          )}
          {activeIndicator === "environment" && (
            <EnvironmentStatistics
              environmentIndicatorData={environmentIndicatorData}
              environmentIndicatorLoading={environmentIndicatorLoading}
            />
          )}
          {activeIndicator === "economy" && (
            <EconomyStatistics
              economicIndicatorData={economicIndicatorData}
              economicIndicatorLoading={economicIndicatorLoading}
            />
          )}
        </>
      )}
      <button onClick={handleSidebarClose}>Close Sidebar</button>
    </div>
  );
};

export default RightSidebar;
