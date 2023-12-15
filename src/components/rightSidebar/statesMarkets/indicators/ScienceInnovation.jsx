import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const InfrastructureCommunications = ({
  statesMarketsIndicatorData,
  statesMarketsIndicatorLoading,
  formatValue,
}) => {
  return (
    <div className="population indicator-container">
      <h2>Science & Innovation</h2>
      {statesMarketsIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">R&D Expenditure (% of GDP)</div>
              {formatValue(statesMarketsIndicatorData[14], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Patent applications, residents</div>
              {formatValue(statesMarketsIndicatorData[15])}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Resident Industrial Design Applications (Count)</div>
              {formatValue(statesMarketsIndicatorData[16],)}
            </div>
            <div className="stats">
              <div className="stat-label">Scientific & Technical Journal Articles</div>
              {formatValue(statesMarketsIndicatorData[17])}
            </div>
            <div className="stats">
              <div className="stat-label">ICT Goods Exports (% of Total Exports)</div>
              {formatValue(statesMarketsIndicatorData[18], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfrastructureCommunications;
