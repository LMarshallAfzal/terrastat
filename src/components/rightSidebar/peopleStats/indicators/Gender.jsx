import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const Gender = ({
  peopleIndicatorData,
  peopleIndicatorLoading,
  formatValue,
}) => {
  return (
    <div className="gender indicator-container">
      <h2>Gender</h2>
      {peopleIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                School enrollment, primary & secondary, gender parity index
              </div>
              {formatValue(peopleIndicatorData[30])}
            </div>
            <div className="stats">
              <div className="stat-label">
                Ratio of female to male labor force participation
              </div>
              {formatValue(peopleIndicatorData[31], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Female share of employment in senior & middle management
              </div>
              {formatValue(peopleIndicatorData[32], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
                Proportion of seats held by women in parliaments
              </div>
              {formatValue(peopleIndicatorData[33], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Gender;
