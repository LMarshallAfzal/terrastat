import "../../../../styling/RightSidebar.css";
import "../../../../styling/loading.css";

const Health = ({ peopleIndicatorData, peopleIndicatorLoading, formatValue }) => {
  return (
    <div className="health indicator-container">
      <h2>Health</h2>
      {peopleIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Prevalence of stunting, height for age
              </div>
              {formatValue(peopleIndicatorData[23], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Maternal mortality ratio</div>
              {formatValue(peopleIndicatorData[24])}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">Child mortality rate</div>
              {formatValue(peopleIndicatorData[25])}
            </div>
            <div className="stats">
              <div className="stat-label">Incidence of HIV</div>
              {formatValue(peopleIndicatorData[26], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">
              Mortality between ages 30-70 from CVD, cancer, diabetes, or CRD
              </div>
              {formatValue(peopleIndicatorData[27], "%")}
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
              Road traffic injury mortality rate / 100k people
              </div>
              {formatValue(peopleIndicatorData[28], "%")}
            </div>
            <div className="stats">
              <div className="stat-label">Adolescent fertility rate</div>
              {formatValue(peopleIndicatorData[29])}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Health;
