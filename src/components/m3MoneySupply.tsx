import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getM3MoneySupply } from '../aggregators/m3MoneySupply';
import moment from 'moment';

const M3MoneySupply = () => {
  const chartData = getM3MoneySupply()

  return (
    <div className="card">
      <p>M3 Money Supply (USA)</p>
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
          dataKey: 'billions',
          name: 'M3 Money Supply',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/MABMM301USM189S" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default M3MoneySupply
