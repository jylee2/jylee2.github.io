import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
import ExportPriceIndexNonmonetaryGold from './components/exportPriceIndexNonmonetaryGold';
import MedianSalesPriceHousesSold from './components/medianSalesPriceHousesSold';
import CrudeOilPricesWTI from './components/crudeOilPricesWTI';
import AveragePriceDozenEggs from './components/averagePriceDozenEggs';
import QuizSelector from './components/QuizSelector';

const App = () => {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={
          <>
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
            <ExportPriceIndexNonmonetaryGold />
            <CrudeOilPricesWTI />
            <AveragePriceDozenEggs />
          </>
        } />
        <Route path="/quiz" element={<QuizSelector />} />
      </Routes>
    </div>
  )
}

export default App
