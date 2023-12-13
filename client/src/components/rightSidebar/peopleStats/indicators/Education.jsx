import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const Education = ({
  peopleIndicatorData,
  peopleIndicatorLoading,
  formatValue
}) => {
  return (
    <div className="education indicator-container">
      <h2>Education</h2>
      {peopleIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Gov. exp. on education</div>
              {formatValue(peopleIndicatorData[9], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">School enrollment, primary</div>
              {formatValue(peopleIndicatorData[10], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">School enrollment, secondary</div>
              {formatValue(peopleIndicatorData[11], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">School enrollment, tertiary</div>
              {formatValue(peopleIndicatorData[12], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Progression to secondary school</div>
              {formatValue(peopleIndicatorData[13], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Primary completion rate, total</div>
              {formatValue(peopleIndicatorData[14], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Literacy rate, youth total</div>
              {formatValue(peopleIndicatorData[15], "%")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Education;
