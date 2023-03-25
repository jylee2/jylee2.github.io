import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getTotalCreditCorporate } from '../aggregators/totalCreditCorporate';
import moment from 'moment';

const CorporateDebtToGDP = () => {
  const chartData = getTotalCreditCorporate()

  return (
    <div className="card">
      <p>Corporate Debt to GDP (USA)</p>
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
          name: 'Corporate Debt to GDP',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/QUSNAM770A" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default CorporateDebtToGDP
