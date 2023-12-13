import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const PopulationDynamics = ({
  peopleIndicatorData,
  peopleIndicatorLoading,
  formatPopulation,
  formatValue,
}) => {
  return (
    <div className="population indicator-container">
      <h2>Population Dynamics</h2>
      {peopleIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Population</div>
              {formatPopulation(peopleIndicatorData[0])}
            </div>
            <div className="stats">
              <div className="stat-label">Pop. growth</div>
              {formatValue(peopleIndicatorData[1], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">CBR</div>
              {formatValue(peopleIndicatorData[2])}
            </div>
            <div className="stats">
              <div className="stat-label">CDR</div>
              {formatValue(peopleIndicatorData[3])}
            </div>
            <div className="stats">
              <div className="stat-label">TFR</div>
              {formatValue(peopleIndicatorData[4])}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">LE, male</div>
              {formatValue(peopleIndicatorData[5])}
            </div>
            <div className="stats">
              <div className="stat-label">LE, male</div>
              {formatValue(peopleIndicatorData[6])}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Age dependancy ratio, young</div>
              {formatValue(peopleIndicatorData[7], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Age dependancy ratio, old</div>
              {formatValue(peopleIndicatorData[8], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PopulationDynamics;
