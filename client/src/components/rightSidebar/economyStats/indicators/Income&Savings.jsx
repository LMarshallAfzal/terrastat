import "../../RightSidebar.css";

const IncomeSavings = ({
  economicIndicatorData,
  formatPrice,
  formatPercentage
}) => {
  return (
    <div className="income-savings indicator-container">
      <h2>Income & Savings</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">GNI per Capita</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPrice(
                  economicIndicatorData[17][1][0]?.value ||
                    economicIndicatorData[17][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">GNI per capita, PPP</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPrice(
                  economicIndicatorData[18][1][0]?.value ||
                    economicIndicatorData[18][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Gross savings (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[19][1][0]?.value ||
                    economicIndicatorData[19][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Adjusted net savings, including particulate emission damage (% of GNI)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[20][1][0]?.value ||
                    economicIndicatorData[20][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeSavings;
