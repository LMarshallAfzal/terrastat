import "./Sidebar.css";

const Sidebar = ({ countryData, countryIndicatorData, handleSidebarClose, clickedCountry, sidebarIsOpen}) => {
  return (
    <div
            className="sidebar"
            style={{
              right: sidebarIsOpen ? "0" : "-400px",
            }}
          >
            <div className="country indicator-container">
              <h2>{countryData?.length > 0 && countryData[1][0]?.name || ""}</h2>
            </div>
            <div className="social indicator-container">
              {clickedCountry && (
                <>
                  <h2>Social</h2>
                  <h3>Population Dynamics</h3>
                  <p>
                    Population: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[0][1][0]?.value ||
                          countryIndicatorData[0][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Population growth: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[1][1][0]?.value ||
                          countryIndicatorData[1][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Birth rate, crude: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[2][1][0]?.value ||
                          countryIndicatorData[2][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Death rate, crude: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[3][1][0]?.value ||
                          countryIndicatorData[3][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Fertility rate, total: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[4][1][0]?.value ||
                          countryIndicatorData[4][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Life expectancy, male: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[5][1][0]?.value ||
                          countryIndicatorData[5][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Life expectancy, female: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[6][1][0]?.value ||
                          countryIndicatorData[6][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Age dependancy ratio, young: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[7][1][0]?.value ||
                          countryIndicatorData[7][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Age dependancy ratio, old: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[8][1][0]?.value ||
                          countryIndicatorData[8][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  
                  <h3>Education</h3>
                  <p>
                    Government expenditure on education: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[8][1][0]?.value ||
                          countryIndicatorData[8][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    School enrollment, primary: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[9][1][0]?.value ||
                          countryIndicatorData[9][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    School enrollment, secondary: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[10][1][0]?.value ||
                          countryIndicatorData[10][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    School enrollment, tertiary: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[11][1][0]?.value ||
                          countryIndicatorData[11][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Progression to secondary school: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[12][1][0]?.value ||
                          countryIndicatorData[12][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Primary school completion rate: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[13][1][0]?.value ||
                          countryIndicatorData[13][1][1]?.value ||
                          countryIndicatorData[13][1][2]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
                  <p>
                    Literacy rate, youth total: {
                      countryIndicatorData?.length > 0
                        ? (
                          countryIndicatorData[14][1][0]?.value ||
                          countryIndicatorData[14][1][1]?.value ||
                          "No data available"
                        )
                        : "No data available"
                    }
                  </p>
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
  )
};

export default Sidebar;