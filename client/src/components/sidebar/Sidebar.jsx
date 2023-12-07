import { useState, lazy, Suspense } from "react";
import "./Sidebar.css";
const LazyPopulationDynamics = lazy(() =>
  import("./peopleStats/PopulationDynamics")
);
const LazyEducation = lazy(() => import("./peopleStats/Education"));
const LazyLabor = lazy(() => import("./peopleStats/Labor"));
const LazyHealth = lazy(() => import("./peopleStats/Health"));
const LazyAgriculture = lazy(() => import("./environmentStats/Agriculture"));
const LazyClimate = lazy(() => import("./environmentStats/Climate"));
import EnergyMining from "./environmentStats/Energy&mining";
import Environment from "./environmentStats/Environment";
import UrbanRuralDevelopment from "./environmentStats/Urban&RuralDevelopment";
import WaterSanitation from "./environmentStats/Water&Sanitation";
const LazyGrowthEconomicStructure = lazy(() =>
  import("./economyStats/Growth&EconomicStructure")
);
const LazyIncomeSavings = lazy(() => import("./economyStats/Income&Savings"));
const LazyBalanceOfPayments = lazy(() =>
  import("./economyStats/BalanceOfPayments")
);
const LazyPricesTermsOfTrade = lazy(() =>
  import("./economyStats/Prices&TermsOfTrade")
);
const LazyLaborProductivity = lazy(() =>
  import("./economyStats/Labor&Productivity")
);

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

  const formatPrice = (value) => {
    if (value === 0 || value === null || value === undefined) {
      return "---";
    } else {
      if (value < 1000) {
        return `US$${value.toFixed(2)}`;
      } else if (value < 1000000) {
        return `US$${(value / 1000).toFixed(2)}k`;
      } else if (value < 1000000000) {
        return `US$${(value / 1000000).toFixed(2)}m`;
      } else if (value < 1000000000000) {
        return `US$${(value / 1000000000).toFixed(2)}b`;
      } else {
        return `US$${(value / 1000000000000).toFixed(2)}t`;
      }
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

  const formatValue = (value, unit) => {
    if (value === 0 || value === null || value === undefined) {
      return "---";
    } else {
      return value + unit;
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
              <Suspense fallback={<p>Loading...</p>}>
                <LazyPopulationDynamics
                  peopleIndicatorData={peopleIndicatorData}
                  formatPopulation={formatPopulation}
                  formatRate={formatRate}
                  formatPercentage={formatPercentage}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyEducation
                  peopleIndicatorData={peopleIndicatorData}
                  formatPercentage={formatPercentage}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyLabor
                  peopleIndicatorData={peopleIndicatorData}
                  formatPercentage={formatPercentage}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyHealth
                  peopleIndicatorData={peopleIndicatorData}
                  formatPercentage={formatPercentage}
                  formatRate={formatRate}
                />
              </Suspense>
            </>
          )}
          {activeIndicator === "environment" && (
            <>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyAgriculture
                  environmentIndicatorData={environmentIndicatorData}
                  formatPercentage={formatPercentage}
                  formatValue={formatValue}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
              <LazyClimate 
                environmentIndicatorData={environmentIndicatorData}
                formatPercentage={formatPercentage}
                formatRate={formatRate}
              />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
              <EnergyMining 
                environmentIndicatorData={environmentIndicatorData}
                formatPercentage={formatPercentage}
                formatRate={formatRate}
              />
              </Suspense>
              <Environment />
              <UrbanRuralDevelopment />
              <WaterSanitation />
            </>
          )}
          {activeIndicator === "economy" && (
            <>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyGrowthEconomicStructure
                  economicIndicatorData={economicIndicatorData}
                  formatPercentage={formatPercentage}
                  formatPrice={formatPrice}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyIncomeSavings
                  economicIndicatorData={economicIndicatorData}
                  formatPercentage={formatPercentage}
                  formatPrice={formatPrice}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyBalanceOfPayments
                  economicIndicatorData={economicIndicatorData}
                  formatPercentage={formatPercentage}
                  formatRate={formatRate}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyPricesTermsOfTrade
                  economicIndicatorData={economicIndicatorData}
                  formatRate={formatRate}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyLaborProductivity
                  economicIndicatorData={economicIndicatorData}
                  formatPrice={formatPrice}
                  formatPercentage={formatPercentage}
                />
              </Suspense>
            </>
          )}
        </>
      )}
      <button onClick={handleSidebarClose}>Close Sidebar</button>
    </div>
  );
};

export default Sidebar;
