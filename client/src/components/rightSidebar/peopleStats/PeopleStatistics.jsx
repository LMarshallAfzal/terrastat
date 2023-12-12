import { lazy, Suspense } from "react";
import * as utils from "../../../utils/formatting";
const LazyPopulationDynamics = lazy(() => import("./indicators/PopulationDynamics"));
const LazyEducation = lazy(() => import("./indicators/Education"));
const LazyLabor = lazy(() => import("./indicators/Labor"));
const LazyHealth = lazy(() => import("./indicators/Health"));

const PeopleStatistics = ({ peopleIndicatorData, peopleIndicatorLoading }) => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyPopulationDynamics
          peopleIndicatorData={peopleIndicatorData}
          peopleIndicatorLoading={peopleIndicatorLoading}
          formatPopulation={utils.formatPopulation}
          formatRate={utils.formatRate}
          formatPercentage={utils.formatPercentage}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyEducation
          peopleIndicatorData={peopleIndicatorData}
          peopleIndicatorLoading={peopleIndicatorLoading}
          formatPercentage={utils.formatPercentage}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyLabor
          peopleIndicatorData={peopleIndicatorData}
          peopleIndicatorLoading={peopleIndicatorLoading}
          formatPercentage={utils.formatPercentage}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyHealth
          peopleIndicatorData={peopleIndicatorData}
          peopleIndicatorLoading={peopleIndicatorLoading}
          formatPercentage={utils.formatPercentage}
          formatRate={utils.formatRate}
        />
      </Suspense>
    </>
  );
};

export default PeopleStatistics;