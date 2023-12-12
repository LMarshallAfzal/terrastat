import "../../RightSidebar.css";
import "../../../../styling/loading.css";

const UrbanRuralDevelopment = ({
  environmentIndicatorData,
  environmentIndicatorLoading,
  formatPercentage,
}) => {
  return (
    <div className="urban-rural-development indicator-container">
      <h2>Urban & Rural Development</h2>
      {environmentIndicatorLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Access to electricity, urban (% of urban population)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[16][1][0]?.value ||
                        environmentIndicatorData[16][1][1]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
            <div className="stats">
              <div className="stat-label">
                People using at least basic drinking water services, urban (% of
                urban population)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[17][1][0]?.value ||
                        environmentIndicatorData[17][1][1]?.value ||
                        environmentIndicatorData[17][1][2]?.value ||
                        environmentIndicatorData[17][1][3]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
            <div className="stats">
              <div className="stat-label">
                People using at least basic sanitation services, urban (% of
                urban population)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[18][1][0]?.value ||
                        environmentIndicatorData[18][1][1]?.value ||
                        environmentIndicatorData[18][1][2]?.value ||
                        environmentIndicatorData[18][1][3]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
          </div>
          <div className="stat-row">
            <div className="stats">
              <div className="stat-label">
                Access to electricity, rural (% of rural population)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[19][1][0]?.value ||
                        environmentIndicatorData[19][1][1]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
            <div className="stats">
              <div className="stat-label">
                People using at least basic sanitation services, rural (% of
                rural population)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[20][1][0]?.value ||
                        environmentIndicatorData[20][1][1]?.value ||
                        0
                    )
                  : "---"}
              </div>
            </div>
            <div className="stats">
              <div className="stat-label">
                People using at least basic drinking water services, rural (% of
                rural population)
              </div>
              <div className="stat-value">
                {environmentIndicatorData?.length > 0
                  ? formatPercentage(
                      environmentIndicatorData[21][1][0]?.value ||
                        environmentIndicatorData[21][1][1]?.value ||
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

export default UrbanRuralDevelopment;
