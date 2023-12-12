import "../../RightSidebar.css";

const PricesTermsOfTrade = ({
  economicIndicatorData,
  formatRate
}) => {
  return (
    <div className="Prices-terms-of-trade indicator-container">
      <h2>Prices & Terms of Trade</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">CPI (2010 = 100)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatRate(
                  economicIndicatorData[26][1][0]?.value ||
                    economicIndicatorData[26][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Net barter terms of trade index (2000 = 100)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatRate(
                  economicIndicatorData[27][1][0]?.value ||
                    economicIndicatorData[27][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesTermsOfTrade;
