import "../../Sidebar.css";

const Environment = ({
  environmentIndicatorData,
  formatPercentage
}) => {
  return (
    <div className="environment indicator-container">
      <h2>Environment</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Forest area (% of land area)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatPercentage(
                  environmentIndicatorData[11][1][0]?.value ||
                    environmentIndicatorData[11][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Total natural resources rents (% of GDP)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatPercentage(
                  environmentIndicatorData[12][1][0]?.value ||
                    environmentIndicatorData[12][1][1]?.value ||
                    environmentIndicatorData[12][1][2]?.value ||
                    environmentIndicatorData[12][1][3]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Terrestrial protected areas (% of total land area)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatPercentage(
                  environmentIndicatorData[13][1][0]?.value ||
                    environmentIndicatorData[13][1][1]?.value ||
                    environmentIndicatorData[13][1][2]?.value ||
                    environmentIndicatorData[13][1][3]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Terrestrial and marine protected areas (% of total territorial area)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatPercentage(
                  environmentIndicatorData[14][1][0]?.value ||
                    environmentIndicatorData[14][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Marine protected areas (% of territorial waters)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatPercentage(
                  environmentIndicatorData[15][1][0]?.value ||
                    environmentIndicatorData[15][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
