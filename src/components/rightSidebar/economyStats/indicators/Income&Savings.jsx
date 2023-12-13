import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const IncomeSavings = ({
  economicIndicatorData,
  economicIndicatorLoading,
  formatPrice,
  formatValue
}) => {
  return (
    <div className="income-savings indicator-container">
      <h2>Income & Savings</h2>
      {economicIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">GNI per Capita</div>
              {formatPrice(economicIndicatorData[17])}
            </div>
            <div className="stats">
              <div className="stat-label">GNI per capita, PPP</div>
              {formatPrice(economicIndicatorData[18])}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Gross savings (% of GDP)</div>
              {formatValue(economicIndicatorData[19], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Adjusted net savings, including particulate emission damage (%
                of GNI)
              </div>
              {formatValue(economicIndicatorData[20], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IncomeSavings;
