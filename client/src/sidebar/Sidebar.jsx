import { useState } from "react";
import "./Sidebar.css";
import PopulationDynamics from "./peopleStats/PopulationDynamics";
import Education from "./peopleStats/Education";
import Labor from "./peopleStats/Labor";
import Health from "./peopleStats/Health";
import Agriculture from "./environmentStats/Agriculture";
import Climate from "./environmentStats/Climate";
import EnergyMining from "./environmentStats/Energy&mining";
import Environment from "./environmentStats/Environment";
import UrbanRuralDevelopment from "./environmentStats/Urban&RuralDevelopment";
import WaterSanitation from "./environmentStats/Water&Sanitation";
import GrowthEconomicStructure from "./economyStats/Growth&EconomicStructure";
import IncomeSavings from "./economyStats/Income&Savings";
import BalanceOfPayments from "./economyStats/BalanceOfPayments";
import PricesTermsOfTrade from "./economyStats/Prices&TermsOfTrade";
import LaborProductivity from "./economyStats/Labor&Productivity";

const Sidebar = ({
  countryData,
  countryIndicatorData,
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
          {activeIndicator === "environment" && (
            <>
              <Agriculture />
              <Climate />
              <EnergyMining />
              <Environment />
              <UrbanRuralDevelopment />
              <WaterSanitation />
            </>
          )}
          {activeIndicator === "economy" && (
            <>
              <GrowthEconomicStructure />
              <IncomeSavings />
              <BalanceOfPayments />
              <PricesTermsOfTrade />
              <LaborProductivity />
            </>
          )}
        </>
      )}
      <button onClick={handleSidebarClose}>Close Sidebar</button>
    </div>
  );
};

export default Sidebar;
