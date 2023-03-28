import './App.css'
import React from 'react'
import FederalFundsEffectiveRates from './components/federalFundsEffectiveRates';
import CentralBankAssetsToGDP from './components/centralBankAssetsToGDP';
import M3MoneySupply from './components/m3MoneySupply';
import CommercialBanks from './components/commercialBanks';
import TotalDebtToGDP from './components/totalDebtToGDP';
import GovernmentDebtToGDP from './components/totalGovernmentDebtToGDP';
import HouseholdDebtToGDP from './components/totalHouseholdDebtToGDP';
import CorporateDebtToGDP from './components/totalCorporateDebtToGDP';
import WorkingAgePopulation from './components/workingAgePopulation';
import SP500 from './components/S&P500';
import MedianSalesPriceHousesSold from './components/medianSalesPriceHousesSold';
import CrudeOilPricesWTI from './components/crudeOilPricesWTI';
import AveragePriceDozenEggs from './components/averagePriceDozenEggs';

const App = () => {
  return (
    <div className="App">
      <h1>Jun&apos;s Dashboard</h1>
      <FederalFundsEffectiveRates />
      <CentralBankAssetsToGDP />
      <M3MoneySupply />
      <CommercialBanks />
      <TotalDebtToGDP />
      <GovernmentDebtToGDP />
      <HouseholdDebtToGDP />
      <CorporateDebtToGDP />
      <WorkingAgePopulation />
      <SP500 />
      <MedianSalesPriceHousesSold />
      <CrudeOilPricesWTI />
      <AveragePriceDozenEggs />
    </div>
  )
}

export default App
