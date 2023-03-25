import MultiLineChart from './components/lineChart';
import React from 'react'
import FederalFundsEffectiveRates from './components/federalFundsEffectiveRates';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Jun&apos;s Dashboard</h1>

      <FederalFundsEffectiveRates />
    </div>
  )
}

export default App
