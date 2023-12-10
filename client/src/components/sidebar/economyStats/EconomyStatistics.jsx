import { lazy, Suspense } from "react";
import * as utils from "../../../utils/utils";
const LazyGrowthEconomicStructure = lazy(() => import("./indicators/Growth&EconomicStructure"));
const LazyIncomeSavings = lazy(() => import("./indicators/Income&Savings"));
const LazyBalanceOfPayments = lazy(() => import("./indicators/BalanceOfPayments"));
const LazyPricesTermsOfTrade = lazy(() => import("./indicators/Prices&TermsOfTrade"));
const LazyLaborProductivity = lazy(() => import("./indicators/Labor&Productivity"));

const PeopleStatistics = ({ economicIndicatorData }) => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyGrowthEconomicStructure
          economicIndicatorData={economicIndicatorData}
          formatPercentage={utils.formatPercentage}
          formatPrice={utils.formatPrice}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyIncomeSavings
          economicIndicatorData={economicIndicatorData}
          formatPercentage={utils.formatPercentage}
          formatPrice={utils.formatPrice}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyBalanceOfPayments
          economicIndicatorData={economicIndicatorData}
          formatPercentage={utils.formatPercentage}
          formatRate={utils.formatRate}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyPricesTermsOfTrade
          economicIndicatorData={economicIndicatorData}
          formatRate={utils.formatRate}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyLaborProductivity
          economicIndicatorData={economicIndicatorData}
          formatPrice={utils.formatPrice}
          formatPercentage={utils.formatPercentage}
        />
      </Suspense>
    </>
  );
};

export default PeopleStatistics;
