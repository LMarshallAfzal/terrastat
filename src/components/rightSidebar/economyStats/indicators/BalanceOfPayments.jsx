import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const BalanceOfPayments = ({
  economicIndicatorData,
  economicIndicatorLoading,
  formatValue
}) => {
  return (
    <div className="balance-of-payments indicator-container">
      <h2>Balance of Payments</h2>
      {economicIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Export value index (2000 = 100)</div>
              {formatValue(economicIndicatorData[21])}
            </div>
            <div className="stats">
              <div className="stat-label">Import value index (2000 = 100)</div>
              {formatValue(economicIndicatorData[22])}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Personal remittances, received (% of GDP)
              </div>
              {formatValue(economicIndicatorData[23], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Current account balance (% of GDP)
              </div>
              {formatValue(economicIndicatorData[24], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Foreign direct investment, net inflows (% of GDP)
              </div>
              {formatValue(economicIndicatorData[25], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BalanceOfPayments;
