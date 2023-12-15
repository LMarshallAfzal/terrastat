import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const InfrastructureCommunications = ({
  statesMarketsIndicatorData,
  statesMarketsIndicatorLoading,
  formatValue,
}) => {
  return (
    <div className="population indicator-container">
      <h2>Infrastructure & Communications</h2>
      {statesMarketsIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Air Transport, Passengers Carried</div>
              {formatValue(statesMarketsIndicatorData[9])}
            </div>
            <div className="stats">
              <div className="stat-label">Air Transport, Freight (million ton-km)</div>
              {formatValue(statesMarketsIndicatorData[10], "MT-km")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Container port traffic (TEU)</div>
              {formatValue(statesMarketsIndicatorData[11],)}
            </div>
            <div className="stats">
              <div className="stat-label">Internet users (% of population)</div>
              {formatValue(statesMarketsIndicatorData[12], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Mobile cellular subscriptions (per 100 people)</div>
              {formatValue(statesMarketsIndicatorData[13])}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfrastructureCommunications;
