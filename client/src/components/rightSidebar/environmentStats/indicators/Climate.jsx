import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const Climate = ({
  environmentIndicatorData,
  environmentIndicatorLoading,
  formatValue,
}) => {
  return (
    <div className="climate indicator-container">
      <h2>Climate</h2>
      {environmentIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">CO₂ emissions (tonnes/capita)</div>
              {formatValue(environmentIndicatorData[3])}
            </div>
            <div className="stats">
              <div className="stat-label">
                PM2.5 polution annual mean (µg/m³)
              </div>
              {formatValue(environmentIndicatorData[4])}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                % pop. exposed to PM2.5 above WHO limit
              </div>
              {formatValue(environmentIndicatorData[5], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Climate;
