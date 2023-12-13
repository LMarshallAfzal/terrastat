import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const UrbanRuralDevelopment = ({
  environmentIndicatorData,
  environmentIndicatorLoading,
  formatValue
}) => {
  return (
    <div className="urban-rural-development indicator-container">
      <h2>Urban & Rural Development</h2>
      {environmentIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Access to electricity, urban (% of urban population)
              </div>
              {formatValue(environmentIndicatorData[16], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                People using at least basic drinking water services, urban (% of
                urban population)
              </div>
              {formatValue(environmentIndicatorData[17], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                People using at least basic sanitation services, urban (% of
                urban population)
              </div>
              {formatValue(environmentIndicatorData[18], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Access to electricity, rural (% of rural population)
              </div>
              {formatValue(environmentIndicatorData[19], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                People using at least basic sanitation services, rural (% of
                rural population)
              </div>
              {formatValue(environmentIndicatorData[20], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                People using at least basic drinking water services, rural (% of
                rural population)
              </div>
              {formatValue(environmentIndicatorData[22], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UrbanRuralDevelopment;
