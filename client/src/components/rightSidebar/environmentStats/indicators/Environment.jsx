import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const Environment = ({
  environmentIndicatorData,
  environmentIndicatorLoading,
  formatValue
}) => {
  return (
    <div className="environment indicator-container">
      <h2>Environment</h2>
      {environmentIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Forest area (% of land area)</div>
              {formatValue(environmentIndicatorData[11], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Total natural resources rents (% of GDP)
              </div>
              {formatValue(environmentIndicatorData[12], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Terrestrial protected areas (% of total land area)
              </div>
              {formatValue(environmentIndicatorData[13], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Terrestrial & marine protected areas (% of total territorial
                area)
              </div>
              {formatValue(environmentIndicatorData[14], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Marine protected areas (% of territorial waters)
              </div>
              {formatValue(environmentIndicatorData[15], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Environment;
