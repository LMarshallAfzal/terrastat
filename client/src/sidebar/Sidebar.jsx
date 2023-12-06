import "./Sidebar.css";
import PopulationDynamics from "./peopleStats/PopulationDynamics";
import Education from "./peopleStats/Education";
import Labor from "./peopleStats/Labor";
import Health from "./peopleStats/Health";


const Sidebar = ({
  countryData,
  countryIndicatorData,
  handleSidebarClose,
  clickedCountry,
  sidebarIsOpen,
}) => {
  const buttons = [
    { label: "Button 1" },
    { label: "Button 2" },
    { label: "Button 3" },
    { label: "Button 4" },
    { label: "Button 5" },
    { label: "Button 6" },
  ];

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
      <div className="button-row">
        {buttons?.map((button, index) => (
          <button className="indicator-group-button" key={index}>{button.label}</button>
        ))}
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
