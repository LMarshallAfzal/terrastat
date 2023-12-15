import { lazy, Suspense } from "react";
import "../../../styling/loading.css";
import * as utils from "../../../utils/formatting";
const LazyStockMarkets = lazy(() => import("./indicators/StockMarkets"));
const LazyGovernmentFinance = lazy(() => import("./indicators/GovernmentFinance"));
const LazyInfrastructureCommunications = lazy(() => import("./indicators/InfrastrucutreCommunications"));
const LazyScienceInnovation = lazy(() => import("./indicators/ScienceInnovation"));


const StatesMarketsStatistics = ({ statesMarketsIndicatorData, statesMarketsIndicatorLoading }) => {
  return (
    <>
      <Suspense
        fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }
      >
        <LazyStockMarkets
          statesMarketsIndicatorData={statesMarketsIndicatorData}
          statesMarketsIndicatorLoading={statesMarketsIndicatorLoading}
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
        <LazyGovernmentFinance
          statesMarketsIndicatorData={statesMarketsIndicatorData}
          statesMarketsIndicatorLoading={statesMarketsIndicatorLoading}
          formatValue={utils.formatValue}
          formatPrice={utils.formatPrice}
        />
      </Suspense>
      <Suspense
        fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }
      >
        <LazyInfrastructureCommunications
          statesMarketsIndicatorData={statesMarketsIndicatorData}
          statesMarketsIndicatorLoading={statesMarketsIndicatorLoading}
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
        <LazyScienceInnovation
          statesMarketsIndicatorData={statesMarketsIndicatorData}
          statesMarketsIndicatorLoading={statesMarketsIndicatorLoading}
          formatValue={utils.formatValue}
        />
      </Suspense>
    </>
  );
};

export default StatesMarketsStatistics;
