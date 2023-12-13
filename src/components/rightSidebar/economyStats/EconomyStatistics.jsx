import { lazy, Suspense } from "react";
import * as utils from "../../../utils/formatting";
const LazyGrowthEconomicStructure = lazy(() => import("./indicators/Growth&EconomicStructure"));
const LazyIncomeSavings = lazy(() => import("./indicators/Income&Savings"));
const LazyBalanceOfPayments = lazy(() => import("./indicators/BalanceOfPayments"));
const LazyPricesTermsOfTrade = lazy(() => import("./indicators/Prices&TermsOfTrade"));
const LazyLaborProductivity = lazy(() => import("./indicators/Labor&Productivity"));

const PeopleStatistics = ({ economicIndicatorData, economicIndicatorLoading }) => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyGrowthEconomicStructure
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatPrice={utils.formatPrice}
          formatValue={utils.formatValue}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyIncomeSavings
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatPrice={utils.formatPrice}
          formatValue={utils.formatValue}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyBalanceOfPayments
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatValue={utils.formatValue}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyPricesTermsOfTrade
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatValue={utils.formatValue}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyLaborProductivity
          economicIndicatorData={economicIndicatorData}
          economicIndicatorLoading={economicIndicatorLoading}
          formatPrice={utils.formatPrice}
          formatValue={utils.formatValue}
        />
      </Suspense>
    </>
  );
};

export default PeopleStatistics;
