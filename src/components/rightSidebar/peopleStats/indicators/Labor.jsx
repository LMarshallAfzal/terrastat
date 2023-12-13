import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const Labor = ({
  peopleIndicatorData,
  peopleIndicatorLoading,
  formatValue
}) => {
  return (
    <div className="labor indicator-container">
      <h2>Labor</h2>
      {peopleIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Labor force participation rate, total
              </div>
              {formatValue(peopleIndicatorData[16], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Employment in agriculture</div>
              {formatValue(peopleIndicatorData[17], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Employment in industry</div>
              {formatValue(peopleIndicatorData[18], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Employment in services</div>
              {formatValue(peopleIndicatorData[19], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Employment to population ratio, 15+, total
              </div>
              {formatValue(peopleIndicatorData[20], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Unemployment, total</div>
              {formatValue(peopleIndicatorData[21], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Children in employment, total</div>
              {formatValue(peopleIndicatorData[22], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Labor;
