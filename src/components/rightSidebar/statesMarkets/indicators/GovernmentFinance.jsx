import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const GovernmentFinance = ({
  statesMarketsIndicatorData,
  statesMarketsIndicatorLoading,
  formatPrice,
  formatValue
}) => {
  return (
    <div className="population indicator-container">
      <h2>Government Finance & Taxes</h2>
      {statesMarketsIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Revenue, excluding grants</div>
              {formatPrice(statesMarketsIndicatorData[2])}
            </div>
            <div className="stats">
              <div className="stat-label">Expense</div>
              {formatPrice(statesMarketsIndicatorData[3])}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Net lending/borrowing</div>
              {formatPrice(statesMarketsIndicatorData[4])}
            </div>
            <div className="stats">
              <div className="stat-label">Employee compensation</div>
              {formatPrice(statesMarketsIndicatorData[5])}
            </div>
            <div className="stats">
              <div className="stat-label">Taxes on goods & services</div>
              {formatPrice(statesMarketsIndicatorData[6])}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Profit tax (% of profits)</div>
              {formatValue(statesMarketsIndicatorData[7], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Total tax rate (% of profits)</div>
              {formatValue(statesMarketsIndicatorData[8], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GovernmentFinance;
