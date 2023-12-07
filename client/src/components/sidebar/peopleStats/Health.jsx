import "../Sidebar.css";

const Labor = ({ peopleIndicatorData, formatPercentage, formatRate }) => {
  return (
    <div className="health indicator-container">
      <h2>Health</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">
            Prevalence of stunting, height for age
          </div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatPercentage(
                  peopleIndicatorData[23][1][0]?.value ||
                    peopleIndicatorData[23][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Maternal mortality ratio</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatRate(
                  peopleIndicatorData[24][1][0]?.value ||
                    peopleIndicatorData[24][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Mortality rate, under 5</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatRate(
                  peopleIndicatorData[25][1][0]?.value ||
                    peopleIndicatorData[25][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Incidence of HIV</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatPercentage(
                  peopleIndicatorData[26][1][0]?.value ||
                    peopleIndicatorData[26][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">
            Mortality from CVD, cancer, diabetes, or CRD between age 30 and 70
          </div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatPercentage(
                  peopleIndicatorData[27][1][0]?.value ||
                    peopleIndicatorData[27][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">
            Mortality caused by road traffic injury
          </div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatRate(
                  peopleIndicatorData[28][1][0]?.value ||
                    peopleIndicatorData[28][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Adolescent fertility rate</div>
          <div className="stat-value">
            {peopleIndicatorData?.length > 0
              ? formatRate(
                  peopleIndicatorData[29][1][0]?.value ||
                    peopleIndicatorData[29][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labor;
