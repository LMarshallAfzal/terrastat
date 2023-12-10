import { useState, lazy, Suspense } from "react";
import "./Sidebar.css";
import * as utils from "../../utils/utils";
const LazyPopulationDynamics = lazy(() => import("./peopleStats/PopulationDynamics"));
const LazyEducation = lazy(() => import("./peopleStats/Education"));
const LazyLabor = lazy(() => import("./peopleStats/Labor"));
const LazyHealth = lazy(() => import("./peopleStats/Health"));
const LazyAgriculture = lazy(() => import("./environmentStats/Agriculture"));
const LazyClimate = lazy(() => import("./environmentStats/Climate"));
const LazyEnergyMining = lazy(() => import("./environmentStats/Energy&mining"));
const LazyEnvironment = lazy(() => import("./environmentStats/Environment"));
const LazyUrbanRuralDevelopment = lazy(() => import("./environmentStats/Urban&RuralDevelopment"));
const LazyGrowthEconomicStructure = lazy(() => import("./economyStats/Growth&EconomicStructure"));
const LazyIncomeSavings = lazy(() => import("./economyStats/Income&Savings"));
const LazyBalanceOfPayments = lazy(() => import("./economyStats/BalanceOfPayments"));
const LazyPricesTermsOfTrade = lazy(() => import("./economyStats/Prices&TermsOfTrade"));
const LazyLaborProductivity = lazy(() => import("./economyStats/Labor&Productivity"));

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
            <>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyPopulationDynamics
                  peopleIndicatorData={peopleIndicatorData}
                  formatPopulation={utils.formatPopulation}
                  formatRate={utils.formatRate}
                  formatPercentage={utils.formatPercentage}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyEducation
                  peopleIndicatorData={peopleIndicatorData}
                  formatPercentage={utils.formatPercentage}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyLabor
                  peopleIndicatorData={peopleIndicatorData}
                  formatPercentage={utils.formatPercentage}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyHealth
                  peopleIndicatorData={peopleIndicatorData}
                  formatPercentage={utils.formatPercentage}
                  formatRate={utils.formatRate}
                />
              </Suspense>
            </>
          )}
          {activeIndicator === "environment" && (
            <>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyAgriculture
                  environmentIndicatorData={environmentIndicatorData}
                  formatPercentage={utils.formatPercentage}
                  formatValue={utils.formatValue}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyClimate
                  environmentIndicatorData={environmentIndicatorData}
                  formatPercentage={utils.formatPercentage}
                  formatRate={utils.formatRate}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyEnergyMining
                  environmentIndicatorData={environmentIndicatorData}
                  formatPercentage={utils.formatPercentage}
                  formatRate={utils.formatRate}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyEnvironment
                  environmentIndicatorData={environmentIndicatorData}
                  formatPercentage={utils.formatPercentage}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyUrbanRuralDevelopment
                  environmentIndicatorData={environmentIndicatorData}
                  formatPercentage={utils.formatPercentage}
                />
              </Suspense>
            </>
          )}
          {activeIndicator === "economy" && (
            <>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyGrowthEconomicStructure
                  economicIndicatorData={economicIndicatorData}
                  formatPercentage={utils.formatPercentage}
                  formatPrice={utils.ormatPrice}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyIncomeSavings
                  economicIndicatorData={economicIndicatorData}
                  formatPercentage={utils.formatPercentage}
                  formatPrice={utils.formatPrice}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyBalanceOfPayments
                  economicIndicatorData={economicIndicatorData}
                  formatPercentage={utils.formatPercentage}
                  formatRate={utils.formatRate}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyPricesTermsOfTrade
                  economicIndicatorData={economicIndicatorData}
                  formatRate={utils.formatRate}
                />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <LazyLaborProductivity
                  economicIndicatorData={economicIndicatorData}
                  formatPrice={utils.formatPrice}
                  formatPercentage={utils.formatPercentage}
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
