import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const LaborProductivity = ({
  economicIndicatorData,
  economicIndicatorLoading,
  formatPrice,
  formatValue,
}) => {
  return (
    <div className="labor-productivity indicator-container">
      <h2>Labor & Productivity</h2>
      {economicIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">GDP per person employed</div>
              {formatPrice(economicIndicatorData[28])}
            </div>
            <div className="stats">
              <div className="stat-label">
                Unemployment, total (% of labor force)
              </div>
              {formatValue(economicIndicatorData[29], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Agriculture, value added per worker
              </div>
              {formatPrice(economicIndicatorData[30])}
            </div>
            <div className="stats">
              <div className="stat-label">Industry, value added per worker</div>
              {formatPrice(economicIndicatorData[31])}
            </div>
            <div className="stats">
              <div className="stat-label">Services, value added per worker</div>
              {formatPrice(economicIndicatorData[32])}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LaborProductivity;
