import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const EnergyMining = ({
  environmentIndicatorData,
  environmentIndicatorLoading,
  formatPercentage,
  formatRate,
}) => {
  return (
    <div className="energy-mining indicator-container">
      <h2>Energy & Mining</h2>
      {environmentIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Energy intensity level of primary energy (MJ/$2017 PPP GDP)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatRate(
                      environmentIndicatorData[6][1][0]?.value ||
                        environmentIndicatorData[6][1][1]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
            <div className="stats">
              <div className="stat-label">
                Renewable energy consumption (% of total final energy
                consumption)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[7][1][0]?.value ||
                        environmentIndicatorData[7][1][1]?.value ||
                        environmentIndicatorData[7][1][2]?.value ||
                        environmentIndicatorData[7][1][3]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
            <div className="stats">
              <div className="stat-label">
                Renewable electricity output (% of total electricity output)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[8][1][0]?.value ||
                        environmentIndicatorData[8][1][1]?.value ||
                        environmentIndicatorData[8][1][2]?.value ||
                        environmentIndicatorData[8][1][3]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Access to electricity (% of population)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[9][1][0]?.value ||
                        environmentIndicatorData[9][1][1]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
            <div className="stats">
              <div className="stat-label">
                Access to clean fuels and technologies for cooking (% of
                population)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[10][1][0]?.value ||
                        environmentIndicatorData[10][1][1]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EnergyMining;
