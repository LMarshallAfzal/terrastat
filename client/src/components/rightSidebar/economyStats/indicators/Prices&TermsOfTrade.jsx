import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const PricesTermsOfTrade = ({
  economicIndicatorData,
  economicIndicatorLoading,
  formatValue
}) => {
  return (
    <div className="Prices-terms-of-trade indicator-container">
      <h2>Prices & Terms of Trade</h2>
      {economicIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">CPI (2010 = 100)</div>
              {formatValue(economicIndicatorData[26])}
            </div>
            <div className="stats">
              <div className="stat-label">
                Net barter terms of trade index (2000 = 100)
              </div>
              {formatValue(economicIndicatorData[27])}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PricesTermsOfTrade;
