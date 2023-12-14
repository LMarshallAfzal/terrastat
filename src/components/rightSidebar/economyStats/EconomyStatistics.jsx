import { lazy, Suspense } from "react";
import "../../../styling/loading.css";
import * as utils from "../../../utils/formatting";
const LazyGrowthEconomicStructure = lazy(() =>
  import("./indicators/Growth&EconomicStructure")
);
const LazyIncomeSavings = lazy(() => import("./indicators/Income&Savings"));
const LazyBalanceOfPayments = lazy(() =>
  import("./indicators/BalanceOfPayments")
);
const LazyPricesTermsOfTrade = lazy(() =>
  import("./indicators/Prices&TermsOfTrade")
);
const LazyLaborProductivity = lazy(() =>
  import("./indicators/Labor&Productivity")
);

const PeopleStatistics = ({
  economicIndicatorData,
  economicIndicatorLoading,
}) => {
  return (
    <>
      <Suspense
        fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }
      >
        <LazyGrowthEconomicStructure
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatPrice={utils.formatPrice}
          formatValue={utils.formatValue}
        />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }
      >
        <LazyIncomeSavings
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatPrice={utils.formatPrice}
          formatValue={utils.formatValue}
        />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }
      >
        <LazyBalanceOfPayments
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatValue={utils.formatValue}
        />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }
      >
        <LazyPricesTermsOfTrade
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatValue={utils.formatValue}
        />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }
      >
        <LazyLaborProductivity
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatPrice={utils.formatPrice}
          formatValue={utils.formatValue}
        />
      </Suspense>
    </>
  );
};

export default PeopleStatistics;
