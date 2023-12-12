import "../../RightSidebar.css";

const PopulationDynamics = ({
  peopleIndicatorData,
  formatPopulation,
  formatRate,
  formatPercentage,
}) => {
  return (
    <div className="population indicator-container">
      <h2>Population Dynamics</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Population</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatPopulation(
                  peopleIndicatorData[0][1][0]?.value ||
                    peopleIndicatorData[0][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Pop. growth</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatPercentage(
                  peopleIndicatorData[1][1][0]?.value ||
                    peopleIndicatorData[1][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
          {/* <div className="stat-year-label">2020</div> */}
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">CBR</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatRate(
                  peopleIndicatorData[2][1][0]?.value ||
                    peopleIndicatorData[2][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">CDR</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatRate(
                  peopleIndicatorData[3][1][0]?.value ||
                    peopleIndicatorData[3][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">TFR</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatRate(
                  peopleIndicatorData[4][1][0]?.value ||
                    peopleIndicatorData[4][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">LE, male</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatRate(
                  peopleIndicatorData[5][1][0]?.value ||
                    peopleIndicatorData[5][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">LE, male</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatRate(
                  peopleIndicatorData[6][1][0]?.value ||
                    peopleIndicatorData[6][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Age dependancy ratio, young</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatPercentage(
                  peopleIndicatorData[7][1][0]?.value ||
                    peopleIndicatorData[7][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Age dependancy ratio, old</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatPercentage(
                  peopleIndicatorData[8][1][0]?.value ||
                    peopleIndicatorData[8][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulationDynamics;
