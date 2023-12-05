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
      <div className="population indicator-container">
        {clickedCountry && (
          <>
            <h2>Population Dynamics</h2>
            <div className="stat-row">
              <div className="stats">
                <div className="stat-label">Population</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPopulation(
                        countryIndicatorData[0][1][0]?.value ||
                          countryIndicatorData[0][1][1]?.value ||
                          0
                      )
                    : "---"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">Pop. growth</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[1][1][0]?.value ||
                          countryIndicatorData[1][1][1]?.value ||
                          0
                      )
                    : "---"}
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
                          0
                      )
                    : "---"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">CDR</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatRate(
                        countryIndicatorData[3][1][0]?.value ||
                          countryIndicatorData[3][1][1]?.value ||
                          0
                      )
                    : "---"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">TFR</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatRate(
                        countryIndicatorData[4][1][0]?.value ||
                          countryIndicatorData[4][1][1]?.value ||
                          0
                      )
                    : "---"}
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
                          0
                      )
                    : "---"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">LE, male</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatRate(
                        countryIndicatorData[6][1][0]?.value ||
                          countryIndicatorData[6][1][1]?.value ||
                          0
                      )
                    : "---"}
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
                          0
                      )
                    : "---"}
                </div>
              </div>
              <div className="stats">
                <div className="stat-label">Age dependancy ratio, old</div>
                <div className="stat-value">
                  {countryIndicatorData?.length > 0
                    ? formatPercentage(
                        countryIndicatorData[8][1][0]?.value ||
                          countryIndicatorData[8][1][1]?.value ||
                          0
                      )
                    : "---"}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
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
            <div className="stat-label">
              Maternal mortality ratio
            </div>
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
            <div className="stat-label">Mortality from CVD, cancer, diabetes, or CRD between age 30 and 70</div>
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
      <div className="states-markets indicator-container">
        <h2>Gender</h2>
      </div>
      <button onClick={handleSidebarClose}>Close Sidebar</button>
    </div>
  );
};

export default Sidebar;
