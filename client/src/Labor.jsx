import "./Sidebar.css";

const Labor = ({ countryIndicatorData, formatPercentage }) => {
  return (
    <div className="labor indicator-container">
      <h2>Labor</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">
            Labor force participation rate, total
          </div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[16][1][0]?.value ||
                    countryIndicatorData[16][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Employment in agriculture</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[17][1][0]?.value ||
                    countryIndicatorData[17][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Employment in industry</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[18][1][0]?.value ||
                    countryIndicatorData[18][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Employment in services</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[19][1][0]?.value ||
                    countryIndicatorData[19][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">
            Employment to population ratio, 15+, total
          </div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[20][1][0]?.value ||
                    countryIndicatorData[20][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Unemployment, total</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[21][1][0]?.value ||
                    countryIndicatorData[21][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Children in employment, total</div>
          <div className="stat-value">
            {countryIndicatorData?.length > 0
              ? formatPercentage(
                  countryIndicatorData[22][1][0]?.value ||
                    countryIndicatorData[22][1][1]?.value ||
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
