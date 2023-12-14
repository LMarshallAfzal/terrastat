import { lazy, Suspense } from "react";
import "../../../styling/loading.css";
import * as utils from "../../../utils/formatting";
const LazyPopulationDynamics = lazy(() =>
  import("./indicators/PopulationDynamics")
);
const LazyEducation = lazy(() => import("./indicators/Education"));
const LazyLabor = lazy(() => import("./indicators/Labor"));
const LazyHealth = lazy(() => import("./indicators/Health"));
const LazyGender = lazy(() => import("./indicators/Gender"));

const PeopleStatistics = ({ peopleIndicatorData, peopleIndicatorLoading }) => {
  return (
    <>
      <Suspense
        fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }
      >
        <LazyPopulationDynamics
          peopleIndicatorData={peopleIndicatorData}
          peopleIndicatorLoading={peopleIndicatorLoading}
          formatPopulation={utils.formatPopulation}
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
        <LazyEducation
          peopleIndicatorData={peopleIndicatorData}
          peopleIndicatorLoading={peopleIndicatorLoading}
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
        <LazyLabor
          peopleIndicatorData={peopleIndicatorData}
          peopleIndicatorLoading={peopleIndicatorLoading}
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
        <LazyHealth
          peopleIndicatorData={peopleIndicatorData}
          peopleIndicatorLoading={peopleIndicatorLoading}
          formatPercentage={utils.formatPercentage}
          formatRate={utils.formatRate}
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
        <LazyGender
          peopleIndicatorData={peopleIndicatorData}
          peopleIndicatorLoading={peopleIndicatorLoading}
          formatPercentage={utils.formatPercentage}
          formatRate={utils.formatRate}
          formatValue={utils.formatValue}
        />
      </Suspense>
    </>
  );
};

export default PeopleStatistics;
