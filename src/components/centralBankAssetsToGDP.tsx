import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getCentralBankAssetsToGDP } from '../aggregators/centralBankAssetsToGDP';
import moment from 'moment';

const CentralBankAssetsToGDP = () => {
  const chartData = getCentralBankAssetsToGDP()

  return (
    <div className="card">
      <p>Central Bank Assets to GDP (USA)</p>
      <MultiLineChart
        data={chartData}
        xAxisProps={{
          dataKey: "time",
          domain: ['auto', 'auto'],
          name: "Time",
          tickLine: false,
          type: "number",
          tickFormatter: (unixTime: number) => moment(unixTime).format("YYYY")
        }}
        yAxisProps={{
          dataKey: 'pct',
          name: 'Central Bank Assets to GDP',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/DDDI06USA156NWDB" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default CentralBankAssetsToGDP
