import './App.css'
import React from 'react'
import FederalFundsEffectiveRates from './components/federalFundsEffectiveRates';
import CentralBankAssetsToGDP from './components/centralBankAssetsToGDP';
import M3MoneySupply from './components/m3MoneySupply';
import TotalDebtToGDP from './components/totalDebtToGDP';
import GovernmentDebtToGDP from './components/totalGovernmentDebtToGDP';
import HouseholdDebtToGDP from './components/totalHouseholdDebtToGDP';
import CorporateDebtToGDP from './components/totalCorporateDebtToGDP';
import SP500 from './components/S&P500';
import AverageSalesPriceHousesSold from './components/averageSalesPriceHousesSold';
import AveragePriceDozenEggs from './components/averagePriceDozenEggs';

const App = () => {
  return (
    <div className="App">
      <h1>Jun&apos;s Dashboard</h1>
      <FederalFundsEffectiveRates />
      <CentralBankAssetsToGDP />
      <M3MoneySupply />
      <TotalDebtToGDP />
      <GovernmentDebtToGDP />
      <HouseholdDebtToGDP />
      <CorporateDebtToGDP />
      <SP500 />
      <AverageSalesPriceHousesSold />
      <AveragePriceDozenEggs />
    </div>
  )
}

export default App
