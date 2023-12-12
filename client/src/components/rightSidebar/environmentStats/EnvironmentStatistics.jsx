import { lazy, Suspense } from "react";
import * as utils from "../../../utils/formatting";
const LazyAgriculture = lazy(() => import("./indicators/Agriculture"));
const LazyClimate = lazy(() => import("./indicators/Climate"));
const LazyEnergyMining = lazy(() => import("./indicators/Energy&mining"));
const LazyEnvironment = lazy(() => import("./indicators/Environment"));
const LazyUrbanRuralDevelopment = lazy(() => import("./indicators/Urban&RuralDevelopment"));

const EnvironmentStatistics = ({ environmentIndicatorData }) => {
  return (
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
  );
};

export default EnvironmentStatistics;