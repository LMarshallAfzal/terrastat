import "./Sidebar.css";

const PopulationDynamics = ({
  countryIndicatorData,
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
            {countryIndicatorData?.length > 0
              ? formatPopulation(
                  countryIndicatorData[0][1][0]?.value ||
                    countryIndicatorData[0][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Pop. growth</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[1][1][0]?.value ||
                    countryIndicatorData[1][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">CBR</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatRate(
                  countryIndicatorData[2][1][0]?.value ||
                    countryIndicatorData[2][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">CDR</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatRate(
                  countryIndicatorData[3][1][0]?.value ||
                    countryIndicatorData[3][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">TFR</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatRate(
                  countryIndicatorData[4][1][0]?.value ||
                    countryIndicatorData[4][1][1]?.value ||
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
            {countryIndicatorData?.length > 0
              ? formatRate(
                  countryIndicatorData[5][1][0]?.value ||
                    countryIndicatorData[5][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">LE, male</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatRate(
                  countryIndicatorData[6][1][0]?.value ||
                    countryIndicatorData[6][1][1]?.value ||
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
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[7][1][0]?.value ||
                    countryIndicatorData[7][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Age dependancy ratio, old</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[8][1][0]?.value ||
                    countryIndicatorData[8][1][1]?.value ||
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
