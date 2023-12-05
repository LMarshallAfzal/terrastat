import "./Sidebar.css";

const Sidebar = ({
  countryData,
  countryIndicatorData,
  handleSidebarClose,
  clickedCountry,
  sidebarIsOpen,
}) => {
  const formatPopulation = (population) => {
    if (population < 1000) {
      return population.toLocaleString();
    } else if (population < 1000000) {
      return `${(population / 1000).toFixed(1)}k`;
    } else if (population < 1000000000) {
      return `${(population / 1000000).toFixed(1)}m`;
    } else {
      return `${(population / 1000000000).toFixed(1)}b`;
    }
  };

  const formatRate = (value) => {
    if (value === 0 || value === null || value === undefined) {
      return "---";
    } else {
      return value.toFixed(2);
    }
  };

  const formatPercentage = (value) => {
    if (value === 0 || value === null || value === undefined) {
      return "---";
    } else {
      return value.toFixed(2) + "%";
    }
  };

  return (
    <div
      className="sidebar"
      style={{
        right: sidebarIsOpen ? "0" : "-400px",
      }}
    >
      <div className="country indicator-container">
        <h2>{(countryData?.length > 0 && countryData[1][0]?.name) || ""}</h2>
      </div>
      <div className="social indicator-container">
        {clickedCountry && (
          <>
            <h2>Social</h2>
            <h3>Population Dynamics</h3>
            <div className="stat-row">
              <div className="stats">
                <div className="stat-label">Population:</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPopulation(
                        countryIndicatorData[0][1][0]?.value ||
                          countryIndicatorData[0][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">Pop. growth</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[1][1][0]?.value ||
                          countryIndicatorData[1][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
            </div>
            <div className="stat-row">
              <div className="stats">
                <div className="stat-label">CBR</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatRate(
                        countryIndicatorData[2][1][0]?.value ||
                          countryIndicatorData[2][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">CDR</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatRate(
                        countryIndicatorData[3][1][0]?.value ||
                          countryIndicatorData[3][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">TFR</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatRate(
                        countryIndicatorData[4][1][0]?.value ||
                          countryIndicatorData[4][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
            </div>
            <div className="stat-row">
              <div className="stats">
                <div className="stat-label">LE, male</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatRate(
                        countryIndicatorData[5][1][0]?.value ||
                          countryIndicatorData[5][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">LE, male</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatRate(
                        countryIndicatorData[6][1][0]?.value ||
                          countryIndicatorData[6][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
            </div>
            <div className="stat-row">
              <div className="stats">
                <div className="stat-label">Age dependancy ratio, young</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[7][1][0]?.value ||
                          countryIndicatorData[7][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">Age dependancy ratio, old</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[8][1][0]?.value ||
                          countryIndicatorData[8][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
            </div>

            <h3>Education</h3>
            <div className="stat-row">
              <div className="stats">
                <div className="stat-label">Gov. exp. on education</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[9][1][0]?.value ||
                          countryIndicatorData[9][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
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
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">School enrollment, secondary</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[11][1][0]?.value ||
                          countryIndicatorData[11][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">School enrollment, tertiary</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[12][1][0]?.value ||
                          countryIndicatorData[12][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
            </div>
            <div className="stat-row">
              <div className="stats">
                <div className="stat-label">
                  Progression to secondary school
                </div>
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
                    : "No data available"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">Primary completion rate, total</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[14][1][0]?.value ||
                          countryIndicatorData[14][1][1]?.value ||
                          "No data available"
                      )
                    : "No data available"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">Literacy rate, youth total</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[15][1][0]?.value ||
                          countryIndicatorData[15][1][1]?.value ||
                          countryIndicatorData[15][1][1]?.value ||
                          0
                      )
                    : "No data available"}
                </div>
              </div>
            </div>
            <h3>Labor</h3>
            <h3>Health</h3>
            <h3>Gender</h3>
          </>
        )}
      </div>
      <div className="poverty indicator-container">
        <h2>Poverty & Inequality</h2>
      </div>
      <div className="environment indicator-container">
        <h2>Environmental</h2>
      </div>
      <div className="economy indicator-container">
        <h2>Economy</h2>
      </div>
      <div className="states-markets indicator-container">
        <h2>States & Markets</h2>
      </div>
      <div className="global-links indicator-container">
        <h2>Global Links</h2>
      </div>
      <button onClick={handleSidebarClose}>Close Sidebar</button>
    </div>
  );
};

export default Sidebar;
