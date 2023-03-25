import './App.css'
import React from 'react'
import FederalFundsEffectiveRates from './components/federalFundsEffectiveRates';
import CentralBankAssetsToGDP from './components/centralBankAssetsToGDP';
import M3MoneySupply from './components/m3MoneySupply';
import TotalDebtToGDP from './components/totalDebtToGDP';
import GovernmentDebtToGDP from './components/totalGovernmentDebtToGDP';
import HouseholdDebtToGDP from './components/totalHouseholdDebtToGDP';

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
    </div>
  )
}

export default App
