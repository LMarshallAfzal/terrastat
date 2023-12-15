import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const StockMarkets = ({
  statesMarketsIndicatorData,
  statesMarketsIndicatorLoading,
  formatValue,
}) => {
  return (
    <div className="population indicator-container">
      <h2>Stock Markets</h2>
      {statesMarketsIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Market Cap of listed companies as % of GDP</div>
              {formatValue(statesMarketsIndicatorData[0], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Domestic Stock Turnover Ratio (%)</div>
              {formatValue(statesMarketsIndicatorData[1], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StockMarkets;
