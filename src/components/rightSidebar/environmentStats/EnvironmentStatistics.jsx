import { lazy, Suspense } from "react";
import "../../../styling/loading.css";
import * as utils from "../../../utils/formatting";
const LazyAgriculture = lazy(() => import("./indicators/Agriculture"));
const LazyClimate = lazy(() => import("./indicators/Climate"));
const LazyEnergyMining = lazy(() => import("./indicators/Energy&mining"));
const LazyEnvironment = lazy(() => import("./indicators/Environment"));
const LazyUrbanRuralDevelopment = lazy(() =>
  import("./indicators/Urban&RuralDevelopment")
);

const EnvironmentStatistics = ({
  environmentIndicatorData,
  environmentIndicatorLoading,
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
        <LazyAgriculture
          environmentIndicatorData={environmentIndicatorData}
          environmentIndicatorLoading={environmentIndicatorLoading}
          formatPercentage={utils.formatPercentage}
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
        <LazyClimate
          environmentIndicatorData={environmentIndicatorData}
          environmentIndicatorLoading={environmentIndicatorLoading}
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
        <LazyEnergyMining
          environmentIndicatorData={environmentIndicatorData}
          environmentIndicatorLoading={environmentIndicatorLoading}
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
        <LazyEnvironment
          environmentIndicatorData={environmentIndicatorData}
          environmentIndicatorLoading={environmentIndicatorLoading}
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
        <LazyUrbanRuralDevelopment
          environmentIndicatorData={environmentIndicatorData}
          environmentIndicatorLoading={environmentIndicatorLoading}
          formatValue={utils.formatValue}
        />
      </Suspense>
    </>
  );
};

export default EnvironmentStatistics;
