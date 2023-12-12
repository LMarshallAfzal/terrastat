import "../../RightSidebar.css";

const BalanceOfPayments = ({
  economicIndicatorData,
  formatPercentage,
  formatRate
}) => {
  return (
    <div className="balance-of-payments indicator-container">
      <h2>Balance of Payments</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Export value index (2000 = 100)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatRate(
                  economicIndicatorData[21][1][0]?.value ||
                    economicIndicatorData[21][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Import value index (2000 = 100)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatRate(
                  economicIndicatorData[22][1][0]?.value ||
                    economicIndicatorData[22][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Personal remittances, received (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[23][1][0]?.value ||
                    economicIndicatorData[23][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Current account balance (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[24][1][0]?.value ||
                    economicIndicatorData[24][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Foreign direct investment, net inflows (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[25][1][0]?.value ||
                    economicIndicatorData[25][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceOfPayments;
