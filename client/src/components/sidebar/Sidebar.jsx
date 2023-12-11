import { useState } from "react";
import "./Sidebar.css";
import PeopleStatistics from "./peopleStats/PeopleStatistics";
import EnvironmentStatistics from "./environmentStats/EnvironmentStatistics";
import EconomyStatistics from "./economyStats/EconomyStatistics";

const Sidebar = ({
  countryData,
  peopleIndicatorData,
  environmentIndicatorData,
  economicIndicatorData,
  handleSidebarClose,
  clickedCountry,
  sidebarIsOpen,
}) => {
  const [activeIndicator, setActiveIndicator] = useState("people");

  const buttons = [
    { label: "People" },
    { label: "Environment" },
    { label: "Economy" },
    { label: "States & Markets" },
    { label: "Global Links" },
  ];

  const handleButtonClick = (buttonIndex) => {
    let newActiveIndicator = "";

    switch (buttonIndex) {
      case 0:
        newActiveIndicator = "people";
        break;
      case 1:
        newActiveIndicator = "environment";
        break;
      case 2:
        newActiveIndicator = "economy";
        break;
      case 3:
        newActiveIndicator = "states & markets";
        break;
      case 4:
        newActiveIndicator = "global links";
        break;
      default:
        break;
    }
    setActiveIndicator(newActiveIndicator);
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
          <button
            className={
              activeIndicator === button.label.toLowerCase()
                ? "indicator-group-button clicked-button"
                : "indicator-group-button"
            }
            key={index}
            onClick={() => handleButtonClick(index)}
          >
            {button.label}
          </button>
        ))}
      </div>
      {clickedCountry && (
        <>
          {activeIndicator === "people" && (
            <PeopleStatistics peopleIndicatorData={peopleIndicatorData} />
          )}
          {activeIndicator === "environment" && (
            <EnvironmentStatistics
              environmentIndicatorData={environmentIndicatorData}
            />
          )}
          {activeIndicator === "economy" && (
            <EconomyStatistics economicIndicatorData={economicIndicatorData} />
          )}
        </>
      )}
      <button onClick={handleSidebarClose}>Close Sidebar</button>
    </div>
  );
};

export default Sidebar;
