import { useState } from "react";
import peopleIndicators from "../data/people-indicators";
import economicIndicators from "../data/economic-indicators";
import environmentIndicators from "../data/environment-indicators";
import statesAndMarketsIndicators from "../data/states&markets-indicators";

const useCountryData = () => {
  const [restCountryLoading, setRestCountryLoading] = useState(false);
  const [countryDataLoading, setCountryDataLoading] = useState(false);
  const [peopleIndicatorLoading, setPeopleIndicatorLoading] = useState(false);
  const [economicIndicatorLoading, setEconomicIndicatorLoading] = useState(false);
  const [environmentIndicatorLoading, setEnvironmentIndicatorLoading] = useState(false);
  const [statesMarketsIndicatorLoading, setStatesMarketsIndicatorLoading] = useState(false);

  
  const startDate = new Date().getFullYear() - 6;
  const currentDate = new Date().getFullYear();

  const fetchRESTCountryData = async (countryName) => {
    try {
      setRestCountryLoading(true);
      const url = `https://restcountries.com/v3.1/name/${countryName}`;
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      setRestCountryLoading(false);

      return data;
    } catch (error) {
      setRestCountryLoading(false);
      console.error(`Error fetching country data: ${error.message}`);
      return null;
    }
  };

  const fetchCountryData = async (countryCode) => {
    try {
      setCountryDataLoading(true);
      const url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      setCountryDataLoading(false);
      return data;
    } catch (error) {
      setCountryDataLoading(false);
      console.error(`Error fetching country data: ${error.message}`);
      return {};
    }
  };

  const fetchPeopleIndicatorData = async (countryCode) => {
    try {
      setPeopleIndicatorLoading(true);
      const promises = peopleIndicators.map(async (indicator) => {
        const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?date=${startDate}:${currentDate}&format=json`;
        const response = await fetch(url, { mode: 'cors' });
        return await response.json();
      });

      const data = await Promise.all(promises);
      setPeopleIndicatorLoading(false);
      return data;
    } catch (error) {
      setPeopleIndicatorLoading(false);
      console.error(`Error fetching people indicators data: ${error.message}`);
      return {};
    }
  };

  const fetchEconomicIndicatorData = async (countryCode) => {
    try {
      setEconomicIndicatorLoading(true);
      const promises = economicIndicators.map(async (indicator) => {
        const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?date=${startDate}:${currentDate}&format=json`;
        const response = await fetch(url, { mode: 'cors' });
        return await response.json();
      });

      const data = await Promise.all(promises);
      setEconomicIndicatorLoading(false);
      return data;
    } catch (error) {
      setEconomicIndicatorLoading(false);
      console.error(`Error fetching people indicator data: ${error.message}`);
      return {};
    }
  };

  const fetchEnvironmentIndicatorData = async (countryCode) => {
    try {
      setEnvironmentIndicatorLoading(true);
      const promises = environmentIndicators.map(async (indicator) => {
        const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?date=${startDate}:${currentDate}&format=json`;
        const response = await fetch(url, { mode: 'cors' });
        return await response.json();
      });

      const data = await Promise.all(promises);
      setEnvironmentIndicatorLoading(false);
      return data;
    } catch (error) {
      setEnvironmentIndicatorLoading(false);
      console.error(`Error fetching people indicator data: ${error.message}`);
      return {};
    }
  };

  const fetchStatesMarketsIndicatorData = async (countryCode) => {
    try {
      setStatesMarketsIndicatorLoading(true);
      const promises = statesAndMarketsIndicators.map(async (indicator) => {
        const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?date=${startDate}:${currentDate}&format=json`;
        const response = await fetch(url, { mode: 'cors' });
        return await response.json();
      });

      const data = await Promise.all(promises);
      setStatesMarketsIndicatorLoading(false);
      return data;
    } catch (error) {
      setStatesMarketsIndicatorLoading(false);
      console.error(`Error fetching people indicator data: ${error.message}`);
      return {};
    }
  };

  return {
    fetchCountryData,
    fetchRESTCountryData,
    fetchPeopleIndicatorData,
    fetchEnvironmentIndicatorData,
    fetchEconomicIndicatorData,
    fetchStatesMarketsIndicatorData,
    restCountryLoading,
    countryDataLoading,
    peopleIndicatorLoading,
    economicIndicatorLoading,
    environmentIndicatorLoading,
    statesMarketsIndicatorLoading
  };
};

export default useCountryData;
