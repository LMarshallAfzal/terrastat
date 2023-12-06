import "../Sidebar.css";

const Labor = ({ countryIndicatorData, formatPercentage, formatRate }) => {
  return (
    <div className="states-markets indicator-container">
        <h2>Gender</h2>
        <div className="stat-row">
          <div className="stats">
            <div className="stat-label">
              School enrollment, primary & secondary, gender parity index
            </div>
            <div className="stat-value">
              {countryIndicatorData?.length > 0
                ? formatRate(
                    countryIndicatorData[30][1][0]?.value ||
                      countryIndicatorData[30][1][1]?.value ||
                      0
                  )
                : "---"}
            </div>
          </div>
          <div className="stats">
            <div className="stat-label">
              Ratio of female to male labor force participation
            </div>
            <div className="stat-value">
              {countryIndicatorData?.length > 0
                ? formatPercentage(
                    countryIndicatorData[31][1][0]?.value ||
                      countryIndicatorData[31][1][0]?.value ||
                      0
                  )
                : "---"}
            </div>
          </div>
        </div>
        <div className="stat-row">
          <div className="stats">
            <div className="stat-label">
              Female share of employment in senior & middle management
            </div>
            <div className="stat-value">
              {countryIndicatorData?.length > 0
                ? formatPercentage(
                    countryIndicatorData[32][1][0]?.value ||
                      countryIndicatorData[32][1][1]?.value ||
                      0
                  )
                : "---"}
            </div>
          </div>
          <div className="stats">
            <div className="stat-label">
              Proportion of seats held by women in parliaments
            </div>
            <div className="stat-value">
              {countryIndicatorData?.length > 0
                ? formatPercentage(
                    countryIndicatorData[33][1][0]?.value ||
                      countryIndicatorData[33][1][1]?.value ||
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
