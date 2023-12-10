import { lazy, Suspense } from "react";
import * as utils from "../../../utils/utils";
const LazyPopulationDynamics = lazy(() => import("./indicators/PopulationDynamics"));
const LazyEducation = lazy(() => import("./indicators/Education"));
const LazyLabor = lazy(() => import("./indicators/Labor"));
const LazyHealth = lazy(() => import("./indicators/Health"));

const PeopleStatistics = ({ peopleIndicatorData }) => {
  return (
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
  );
};

export default PeopleStatistics;
