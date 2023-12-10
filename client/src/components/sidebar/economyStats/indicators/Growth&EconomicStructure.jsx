import "../../Sidebar.css";

const GrowthEconomicStructure = ({
  economicIndicatorData,
  formatPercentage,
  formatPrice
}) => {
  return (
    <div className="growth-economic-structure indicator-container">
      <h2>Growth & Economic Structure</h2>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">GDP</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPrice(
                  economicIndicatorData[0][1][0]?.value ||
                    economicIndicatorData[0][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">GDP growth</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[1][1][0]?.value ||
                    economicIndicatorData[1][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Agriculture, value added (% growth)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[2][1][0]?.value ||
                    economicIndicatorData[2][1][0]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Industry, value added (% growth)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[3][1][0]?.value ||
                    economicIndicatorData[3][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Manufacturing, value added (% growth)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[4][1][0]?.value ||
                    economicIndicatorData[4][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Services, value added (% growth)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[5][1][0]?.value ||
                    economicIndicatorData[5][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Final consumption expenditure (% growth)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[6][1][0]?.value ||
                    economicIndicatorData[6][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Gross capital formation (% growth)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[7][1][0]?.value ||
                    economicIndicatorData[7][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Exports of goods & services (% growth)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[8][1][0]?.value ||
                    economicIndicatorData[8][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Imports of goods & services (% growth)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[9][1][0]?.value ||
                    economicIndicatorData[9][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Agriculture, value added (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[10][1][0]?.value ||
                    economicIndicatorData[10][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Industry, value added (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[11][1][0]?.value ||
                    economicIndicatorData[11][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Services, value added (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[12][1][0]?.value ||
                    economicIndicatorData[12][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Final consumption expenditure (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[13][1][0]?.value ||
                    economicIndicatorData[13][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Gross captial formation (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[14][1][0]?.value ||
                    economicIndicatorData[14][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
      <div className="stat-row">
        <div className="stats">
          <div className="stat-label">Exports of goods & services (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[15][1][0]?.value ||
                    economicIndicatorData[15][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
        <div className="stats">
          <div className="stat-label">Imports of goods & services (% of GDP)</div>
          <div className="stat-value">
            {economicIndicatorData?.length > 0
              ? formatPercentage(
                  economicIndicatorData[16][1][0]?.value ||
                    economicIndicatorData[16][1][1]?.value ||
                    0
                )
              : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthEconomicStructure;
