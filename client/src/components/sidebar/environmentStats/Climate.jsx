import "../Sidebar.css";

const Climate = ({
  environmentIndicatorData,
  formatPercentage,
  formatRate
}) => {
  return (
    <div className="climate indicator-container">
      <h2>Climate</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">CO₂ emissions (tonnes/capita)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatRate(
                  environmentIndicatorData[3][1][0]?.value ||
                    environmentIndicatorData[3][1][1]?.value ||
                    environmentIndicatorData[3][1][2]?.value ||
                    environmentIndicatorData[3][1][3]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">PM2.5 polution annual mean (µg/m³)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatRate(
                  environmentIndicatorData[4][1][0]?.value ||
                    environmentIndicatorData[4][1][1]?.value ||
                    environmentIndicatorData[4][1][2]?.value ||
                    environmentIndicatorData[4][1][3]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">% pop. exposed to PM2.5 above WHO limit</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatPercentage(
                  environmentIndicatorData[5][1][0]?.value ||
                    environmentIndicatorData[5][1][1]?.value ||
                    environmentIndicatorData[5][1][2]?.value ||
                    environmentIndicatorData[5][1][3]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Climate;
