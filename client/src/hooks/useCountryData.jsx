const useCountryData = () => {

  // const INDICATOR_URL = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;

  const fetchCountryData = async (countryCode) => {
    const url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const fetchPeopleIndicatorData = async (countryCode) => {
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

  const fetchEconomicIndicatorData = async (countryCode) => {
    const indicators = [
      // Growth & economic structure
      "NY.GDP.MKTP.CD",
      "NY.GDP.MKTP.KD.ZG",
      "NV.AGR.TOTL.KD.ZG",
      "NV.IND.TOTL.KD.ZG",
      "NV.IND.MANF.KD.ZG",
      "NV.SRV.TOTL.KD.ZG",
      "NE.CON.TOTL.KD.ZG",
      "NE.GDI.TOTL.KD.ZG",
      "NE.EXP.GNFS.KD.ZG",
      "NE.IMP.GNFS.KD.ZG",
      "NV.AGR.TOTL.ZS",
      "NV.IND.TOTL.ZS",
      "NV.SRV.TOTL.ZS",
      "NE.CON.TOTL.ZS",
      "NE.GDI.TOTL.ZS",
      "NE.EXP.GNFS.ZS",
      "NE.IMP.GNFS.ZS",
      // Income & savings
      "NY.GNP.PCAP.CD",
      "NY.GNP.PCAP.PP.CD",
      "NY.GNS.ICTR.ZS",
      "NY.ADJ.SVNG.GN.ZS",
      // Balance of payments
      "TX.VAL.MRCH.XD.WD",
      "TM.VAL.MRCH.XD.WD",
      "BX.TRF.PWKR.DT.GD.ZS",
      "BN.CAB.XOKA.GD.ZS",
      "BX.KLT.DINV.WD.GD.ZS",
      // Prices and terms of trade
      "FP.CPI.TOTL",
      "TT.PRI.MRCH.XD.WD",
      // Labor & productivity
      "SL.GDP.PCAP.EM.KD",
      "SL.UEM.TOTL.ZS",
      "NV.AGR.EMPL.KD",
      "NV.IND.EMPL.KD",
      "NV.SRV.EMPL.KD",
    ];

    const promises = indicators.map((indicator) => {
      const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?format=json`;
      return fetch(url).then((response) => response.json());
    });

    const data = await Promise.all(promises);
    return data;
  };

  const fetchEnvironmentIndicatorData = async (countryCode) => {
    const indicators = [
      // Agriculture
      "AG.LND.AGRI.ZS",
      "AG.LND.CREL.HA",
      "AG.YLD.CREL.KG",
      // Climate
      "EN.ATM.CO2E.PC",
      "EN.ATM.PM25.MC.M3",
      "EN.ATM.PM25.MC.ZS",
      // Energy & Mining
      "EG.EGY.PRIM.PP.KD",
      "EG.FEC.RNEW.ZS",
      "EG.ELC.RNEW.ZS",
      "EG.ELC.ACCS.ZS",
      "EG.CFT.ACCS.ZS",
      // Environment
      "AG.LND.FRST.ZS",
      "NY.GDP.TOTL.RT.ZS",
      "ER.LND.PTLD.ZS",
      "ER.PTD.TOTL.ZS",
      "ER.MRN.PTMR.ZS",
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
    fetchPeopleIndicatorData,
    fetchEnvironmentIndicatorData,
    fetchEconomicIndicatorData,
  };
};

export default useCountryData;
