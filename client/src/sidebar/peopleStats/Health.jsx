import "../Sidebar.css";

const Labor = ({ countryIndicatorData, formatPercentage, formatRate }) => {
  return (
    <div className="health indicator-container">
      <h2>Health</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">
            Prevalence of stunting, height for age
          </div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[23][1][0]?.value ||
                    countryIndicatorData[23][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Maternal mortality ratio</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatRate(
                  countryIndicatorData[24][1][0]?.value ||
                    countryIndicatorData[24][1][0]?.value ||
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
            {countryIndicatorData?.length > 0
              ? formatRate(
                  countryIndicatorData[25][1][0]?.value ||
                    countryIndicatorData[25][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Incidence of HIV</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[26][1][0]?.value ||
                    countryIndicatorData[26][1][1]?.value ||
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
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[27][1][0]?.value ||
                    countryIndicatorData[27][1][1]?.value ||
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
            {countryIndicatorData?.length > 0
              ? formatRate(
                  countryIndicatorData[28][1][0]?.value ||
                    countryIndicatorData[28][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Adolescent fertility rate</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatRate(
                  countryIndicatorData[29][1][0]?.value ||
                    countryIndicatorData[29][1][1]?.value ||
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
