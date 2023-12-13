import "../../../styling/RightSidebar.css";
import "../../../styling/loading.css";

const CountryData = ({
  countryData,
  countryDataLoading,
  setActiveIndicator,
  activeIndicator
}) => {

  const buttons = [
    { label: "People" },
    { label: "Environment" },
    { label: "Economy" },
    { label: "States & Markets" },
    { label: "Global Links" },
  ];

  const handleButtonClick = (buttonIndex) => {
    let newActiveIndicator = "";

    switch (buttonIndex) {
      case 0:
        newActiveIndicator = "people";
        break;
      case 1:
        newActiveIndicator = "environment";
        break;
      case 2:
        newActiveIndicator = "economy";
        break;
      case 3:
        newActiveIndicator = "states & markets";
        break;
      case 4:
        newActiveIndicator = "global links";
        break;
      default:
        break;
    }
    setActiveIndicator(newActiveIndicator);
  };

  return (
    <>
      {countryDataLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="country indicator-container">
            <h2>
              {(countryData?.length > 0 && countryData[1][0]?.name) || ""}
            </h2>
          </div>
          <div className="button-row">
            {buttons?.map((button, index) => (
              <button
                className={
                  activeIndicator === button.label.toLowerCase()
                    ? "indicator-group-button clicked-button"
                    : "indicator-group-button"
                }
                key={index}
                onClick={() => handleButtonClick(index)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CountryData;
