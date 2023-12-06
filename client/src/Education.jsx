import "./Sidebar.css";

const Education = ({
  countryIndicatorData,
  formatPercentage,
}) => {
  return (
    <div className="education indicator-container">
      <h2>Education</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Gov. exp. on education</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[9][1][0]?.value ||
                    countryIndicatorData[9][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">School enrollment, primary</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[10][1][0]?.value ||
                    countryIndicatorData[10][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">School enrollment, secondary</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[11][1][0]?.value ||
                    countryIndicatorData[11][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">School enrollment, tertiary</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[12][1][0]?.value ||
                    countryIndicatorData[12][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Progression to secondary school</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[13][1][0]?.value ||
                    countryIndicatorData[13][1][1]?.value ||
                    countryIndicatorData[13][1][2]?.value ||
                    countryIndicatorData[13][1][3]?.value ||
                    countryIndicatorData[13][1][4]?.value ||
                    countryIndicatorData[13][1][5]?.value ||
                    countryIndicatorData[13][1][6]?.value ||
                    countryIndicatorData[13][1][7]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Primary completion rate, total</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[14][1][0]?.value ||
                    countryIndicatorData[14][1][1]?.value ||
                    countryIndicatorData[14][1][2]?.value ||
                    countryIndicatorData[14][1][3]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Literacy rate, youth total</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[15][1][0]?.value ||
                    countryIndicatorData[15][1][1]?.value ||
                    countryIndicatorData[15][1][2]?.value ||
                    countryIndicatorData[15][1][3]?.value ||
                    countryIndicatorData[15][1][4]?.value ||
                    countryIndicatorData[15][1][5]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
