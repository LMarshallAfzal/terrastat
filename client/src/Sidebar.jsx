import "./Sidebar.css";
import PopulationDynamics from "./PopulationDynamics";
import Education from "./Education";
import Labor from "./Labor";
import Health from "./Health";


const Sidebar = ({
  countryData,
  countryIndicatorData,
  handleSidebarClose,
  clickedCountry,
  sidebarIsOpen,
}) => {
  const formatPopulation = (population) => {
    if (population < 1000) {
      return population.toLocaleString();
    } else if (population < 1000000) {
      return `${(population / 1000).toFixed(1)}k`;
    } else if (population < 1000000000) {
      return `${(population / 1000000).toFixed(1)}m`;
    } else {
      return `${(population / 1000000000).toFixed(1)}b`;
    }
  };

  const formatRate = (value) => {
    if (value === 0 || value === null || value === undefined) {
      return "---";
    } else {
      return value.toFixed(2);
    }
  };

  const formatPercentage = (value) => {
    if (value === 0 || value === null || value === undefined) {
      return "---";
    } else {
      return value.toFixed(2) + "%";
    }
  };

  return (
    <div
      className="sidebar"
      style={{
        right: sidebarIsOpen ? "0" : "-400px",
      }}
    >
      <div className="country indicator-container">
        <h2>{(countryData?.length > 0 && countryData[1][0]?.name) || ""}</h2>
      </div>
      {clickedCountry && (
        <>
          <PopulationDynamics
            countryIndicatorData={countryIndicatorData}
            formatPopulation={formatPopulation}
            formatRate={formatRate}
            formatPercentage={formatPercentage}
          />
          <Education
            countryIndicatorData={countryIndicatorData}
            formatPercentage={formatPercentage}
          />
          <Labor
            countryIndicatorData={countryIndicatorData}
            formatPercentage={formatPercentage}
          />
          <Health
            countryIndicatorData={countryIndicatorData}
            formatPercentage={formatPercentage}
            formatRate={formatRate}
          />
        </>
      )}
      <button onClick={handleSidebarClose}>Close Sidebar</button>
    </div>
  );
};

export default Sidebar;
