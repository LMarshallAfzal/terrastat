import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const GrowthEconomicStructure = ({
  economicIndicatorData,
  economicIndicatorLoading,
  formatPrice,
  formatValue
}) => {
  return (
    <div className="growth-economic-structure indicator-container">
      <h2>Growth & Economic Structure</h2>
      {economicIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">GDP</div>
              {formatPrice(economicIndicatorData[0])}
            </div>
            <div className="stats">
              <div className="stat-label">GDP growth</div>
              {formatValue(economicIndicatorData[1], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Agriculture, value added (% growth)
              </div>
              {formatValue(economicIndicatorData[2], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Industry, value added (% growth)</div>
              {formatValue(economicIndicatorData[3], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Manufacturing, value added (% growth)
              </div>
              {formatValue(economicIndicatorData[4], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Services, value added (% growth)</div>
              {formatValue(economicIndicatorData[5], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Final consumption expenditure (% growth)
              </div>
              {formatValue(economicIndicatorData[6], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Gross capital formation (% growth)
              </div>
              {formatValue(economicIndicatorData[7], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Exports of goods & services (% growth)
              </div>
              {formatValue(economicIndicatorData[8], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Imports of goods & services (% growth)
              </div>
              {formatValue(economicIndicatorData[9], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Agriculture, value added (% of GDP)
              </div>
              {formatValue(economicIndicatorData[10], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Industry, value added (% of GDP)</div>
              {formatValue(economicIndicatorData[11], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Services, value added (% of GDP)</div>
              {formatValue(economicIndicatorData[12], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Final consumption expenditure (% of GDP)
              </div>
              {formatValue(economicIndicatorData[13], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Gross captial formation (% of GDP)
              </div>
              {formatValue(economicIndicatorData[14], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Exports of goods & services (% of GDP)
              </div>
              {formatValue(economicIndicatorData[15], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Imports of goods & services (% of GDP)
              </div>
              {formatValue(economicIndicatorData[16], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GrowthEconomicStructure;
