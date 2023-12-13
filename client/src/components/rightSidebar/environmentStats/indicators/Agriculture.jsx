import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const Agriculture = ({
  environmentIndicatorData,
  environmentIndicatorLoading,
  formatValue,
}) => {
  return (
    <div className="agriculture indicator-container">
      <h2>Agriculture</h2>
      {environmentIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Agricultural land (% of land area)
              </div>
              {formatValue(environmentIndicatorData[0], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Land under cereal production (ha)
              </div>
              {formatValue(environmentIndicatorData[1], "ha")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Cereal yield (kg/ha)</div>
              {formatValue(environmentIndicatorData[2], "kg/ha")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Agriculture;
