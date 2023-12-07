import "../Sidebar.css";

const LaborProductivity = ({
  economicIndicatorData,
  formatPrice,
  formatPercentage
}) => {
  return (
    <div className="labor-productivity indicator-container">
      <h2>Labor & Productivity</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">GDP per person employed</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPrice(
                  economicIndicatorData[27][1][0]?.value ||
                    economicIndicatorData[27][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Unemployment, total (% of labor force)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[28][1][0]?.value ||
                    economicIndicatorData[28][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Agriculture, value added per worker</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPrice(
                  economicIndicatorData[29][1][0]?.value ||
                    economicIndicatorData[29][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Industry, value added per worker</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPrice(
                  economicIndicatorData[30][1][0]?.value ||
                    economicIndicatorData[30][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Services, value added per worker</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPrice(
                  economicIndicatorData[31][1][0]?.value ||
                    economicIndicatorData[31][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaborProductivity;
