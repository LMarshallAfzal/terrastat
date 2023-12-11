function formatPopulation(population) {
  if (population < 1000) {
    return population.toLocaleString();
  } else if (population < 1000000) {
    return `${(population / 1000).toFixed(1)}k`;
  } else if (population < 1000000000) {
    return `${(population / 1000000).toFixed(1)}m`;
  } else {
    return `${(population / 1000000000).toFixed(1)}b`;
  }
}

const formatPrice = (value) => {
  if (value === 0 || value === null || value === undefined) {
    return "---";
  } else {
    if (value < 1000) {
      return `US$${value.toFixed(2)}`;
    } else if (value < 1000000) {
      return `US$${(value / 1000).toFixed(2)}k`;
    } else if (value < 1000000000) {
      return `US$${(value / 1000000).toFixed(2)}m`;
    } else if (value < 1000000000000) {
      return `US$${(value / 1000000000).toFixed(2)}b`;
    } else {
      return `US$${(value / 1000000000000).toFixed(2)}t`;
    }
  }
}

function formatPercentage(value) {
  if (value === 0 || value === null || value === undefined) {
    return "---";
  } else {
    return value.toFixed(2) + "%";
  }
}

function formatRate(value) {
  if (value === 0 || value === null || value === undefined) {
    return "---";
  } else {
    return value.toFixed(2);
  }
}

const formatValue = (value, unit) => {
  if (value === 0 || value === null || value === undefined) {
    return "---";
  } else {
    return value + unit;
  }
};

export { formatPopulation, formatPrice, formatPercentage, formatRate, formatValue };
