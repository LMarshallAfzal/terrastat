const useCountryData = () => {

  const fetchCountryData = async (countryCode) => {
    const url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const fetchCountryIndicatorData = async (countryCode) => {
    const indicators = [
      "SP.POP.TOTL",
      "SP.POP.GROW",
      "SP.DYN.CBRT.IN",
      "SP.DYN.CDRT.IN",
      "SP.DYN.TFRT.IN",
      "SP.DYN.LE00.MA.IN",
      "SP.DYN.LE00.FE.IN",
      "SP.POP.DPND.YG",
      "SP.POP.DPND.OL",
      "SE.XPD.TOTL.GD.ZS",
      "SE.PRM.ENRR",
      "SE.SEC.ENRR",
      "SE.TER.ENRR",
      "SE.SEC.PROG.ZS",
      "SE.PRM.CMPT.ZS",
      "SE.ADT.1524.LT.ZS",
      "SL.TLF.CACT.ZS",
      "SL.IND.EMPL.ZS",
      "SL.AGR.EMPL.ZS",
      "SL.SRV.EMPL.ZS",
      "SL.EMP.TOTL.SP.ZS",
      "SL.UEM.TOTL.ZS",
      "SL.TLF.0714.ZS",
      "SH.STA.STNT.ZS",
      "SH.STA.MMRT",
      "SH.DYN.MORT",
      "SH.HIV.INCD.ZS",
      "SH.DYN.NCOM.ZS",
      "SH.STA.TRAF.P5",
      "SP.ADO.TFRT",
      "SE.ENR.PRSC.FM.ZS",
      "SL.TLF.CACT.FM.ZS",
      "SL.EMP.SMGT.FE.ZS",
      "SG.GEN.PARL.ZS",
    ];

    const promises = indicators.map((indicator) => {
      const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;
      return fetch(url).then((response) => response.json());
    });

    const data = await Promise.all(promises);
    return data;
  };

  return {
    fetchCountryData,
    fetchCountryIndicatorData
  };
};

export default useCountryData;
