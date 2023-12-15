function formatPopulation(population) {
  let value = 0;
  let formattedPopulation = 0;
  let formattedDate = "";

  if (population !== undefined) {
    for (let i = 0; i < population[1].length; i++) {
      if (population[1][i]?.value !== null) {
        value = population[1][i]?.value;
        formattedDate = population[1][i]?.date;
        break;
      }
    }

    if (value < 1000) {
      formattedPopulation = value.toLocaleString();
    } else if (value < 1000000) {
      formattedPopulation = `${(value / 1000).toFixed(1)}K`;
    } else if (value < 1000000000) {
      formattedPopulation = `${(value / 1000000).toFixed(1)}M`;
    } else if (value < 1000000000000) {
      formattedPopulation = `${(value / 1000000000).toFixed(1)}B`;
    } else {
      formattedPopulation = "---";
    }
  }

  return (
    <>
      <div className="stat-value">{formattedPopulation}</div>
      <div className="stat-year-label">{formattedDate}</div>
    </>
  );
}

const formatPrice = (data) => {
  let value = 0;
  let formattedData = 0;
  let formattedDate = "";
  let output = "";

  if (data !== undefined) {

    for (let i = 0; i < data[1].length; i++) {
      if (data[1][i]?.value !== null) {
        value = data[1][i]?.value;
        formattedDate = data[1][i]?.date;
        break;
      }
    }

    const absValue = Math.abs(value);

    if (absValue < 1000) {
      formattedData = value >= 0 ? `$${absValue.toFixed(2)}` : `-$${absValue.toFixed(2)}`;
    } else if (absValue < 1000000) {
      formattedData = value >= 0 ? `$${(absValue / 1000).toFixed(2)}K` : `-$${(absValue / 1000).toFixed(2)}K`;
    } else if (absValue < 1000000000) {
      formattedData = value >= 0 ? `$${(absValue / 1000000).toFixed(2)}M` : `-$${(absValue / 1000000).toFixed(2)}M`;
    } else if (absValue < 1000000000000) {
      formattedData = value >= 0 ? `$${(absValue / 1000000000).toFixed(2)}B` : `-$${(absValue / 1000000000).toFixed(2)}B`;
    } else {
      formattedData = value >= 0 ? `$${(absValue / 1000000000000).toFixed(2)}T` : `-$${(absValue / 1000000000000).toFixed(2)}T`;
    }
    output = `${formattedData}`;
  }

    return (
      <>
        <div className="stat-value">{value !== 0 ? output : "---"}</div>
        <div className="stat-year-label">{formattedDate}</div>
      </>
    );
  
};

function formatValue(data, postfix = "") {
  let value = 0;
  let formattedData = 0;
  let formattedDate = "";
  let output = "";

  if (data !== undefined) {
    for (let i = 0; i < data[1].length; i++) {
      if (data[1][i]?.value !== null) {
        value = data[1][i]?.value;
        formattedDate = data[1][i]?.date;
        break;
      }
    }

    if (value < 1000) {
      formattedData = `${value.toFixed(2)}`;
    } else if (value < 1000000) {
      formattedData = `${(value / 1000).toFixed(2)}K `;
    } else if (value < 1000000000) {
      formattedData = `${(value / 1000000).toFixed(2)}M `;
    } else if (value < 1000000000000) {
      formattedData = `${(value / 1000000000).toFixed(2)}b `;
    } else {
      formattedData = `${(value / 1000000000000).toFixed(2)}t `;
    }

    output = `${formattedData}${postfix}`;
  }

  return (
    <>
      <div className="stat-value">{formattedData !== '0.00' ? output : "---"}</div>
      <div className="stat-year-label">{formattedDate}</div>
    </>
  );
}

export {
  formatPopulation,
  formatPrice,
  formatValue,
};
