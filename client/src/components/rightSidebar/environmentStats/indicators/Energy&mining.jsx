import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const EnergyMining = ({
  environmentIndicatorData,
  environmentIndicatorLoading,
  formatValue,
}) => {
  return (
    <div className="energy-mining indicator-container">
      <h2>Energy & Mining</h2>
      {environmentIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Primary energy intensity (MJ/$2017 PPP GDP)
              </div>
              {formatValue(environmentIndicatorData[6])}
            </div>
            <div className="stats">
              <div className="stat-label">
                Renewable energy consumption (% of total final energy
                consumption)
              </div>
              {formatValue(environmentIndicatorData[7], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Renewable electricity output (% of total electricity output)
              </div>
              {formatValue(environmentIndicatorData[8], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Access to electricity (% of population)
              </div>
              {formatValue(environmentIndicatorData[9], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Access to clean fuels & technologies for cooking (% of
                population)
              </div>
              {formatValue(environmentIndicatorData[10], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EnergyMining;
