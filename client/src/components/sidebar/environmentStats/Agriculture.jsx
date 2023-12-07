import "../Sidebar.css";

const Agriculture = ({
  environmentIndicatorData,
  formatValue,
  formatPercentage,
}) => {
  return (
    <div className="agriculture indicator-container">
      <h2>Agriculture</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Agricultural land (% of land area)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatPercentage(
                  environmentIndicatorData[0][1][0]?.value ||
                    environmentIndicatorData[0][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Land under cereal production (hectares)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatValue(
                  environmentIndicatorData[1][1][0]?.value ||
                    environmentIndicatorData[1][1][0]?.value ||
                    0,
                    "ha"
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Cereal yield (kg per hectare)</div>
          <div className="stat-value">
            {environmentIndicatorData?.length > 0
              ? formatValue(
                  environmentIndicatorData[2][1][0]?.value ||
                    environmentIndicatorData[2][1][1]?.value ||
                    0,
                    "kg/ha"
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;
