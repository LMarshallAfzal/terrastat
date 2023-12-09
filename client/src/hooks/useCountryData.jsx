import peopleIndicators from "../data/people-indicators";
import economicIndicators from "../data/economic-indicators";
import environmentIndicators from "../data/environment-indicators";

const useCountryData = () => {
  // const INDICATOR_URL = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;

  const fetchCountryData = async (countryCode) => {
    try {
      const url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching country data: ${error.message}`);
      return {};
    }
  };

  const fetchPeopleIndicatorData = async (countryCode) => {
    try {
      const promises = peopleIndicators.map(async (indicator) => {
        const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;
        const response = await fetch(url);
        return await response.json();
      });

      const data = await Promise.all(promises);
      return data;
    } catch (error) {
      console.error(`Error fetching people indicators data: ${error.message}`);
      return {};
    }
  };

  const fetchEconomicIndicatorData = async (countryCode) => {
    try {
      const promises = economicIndicators.map(async (indicator) => {
        const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;
        const response = await fetch(url);
        return await response.json();
      });

      const data = await Promise.all(promises);
      return data;
    } catch (error) {
      console.error(`Error fetching people indicator data: ${error.message}`);
      return {};
    }
  };

  const fetchEnvironmentIndicatorData = async (countryCode) => {
    try {
      const promises = environmentIndicators.map(async (indicator) => {
        const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;
        const response = await fetch(url);
        return await response.json();
      });

      const data = await Promise.all(promises);
      return data;
    } catch (error) {
      console.error(`Error fetching people indicator data: ${error.message}`);
      return {};
    }
  };

  return {
    fetchCountryData,
    fetchPeopleIndicatorData,
    fetchEnvironmentIndicatorData,
    fetchEconomicIndicatorData,
  };
};

export default useCountryData;
