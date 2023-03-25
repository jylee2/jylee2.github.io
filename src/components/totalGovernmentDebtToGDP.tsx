import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getTotalCreditGovernment } from '../aggregators/totalCreditGovernment';
import moment from 'moment';

const GovernmentDebtToGDP = () => {
  const chartData = getTotalCreditGovernment()

  return (
    <div className="card">
      <p>Government Debt to GDP (USA)</p>
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
          name: 'Government Debt to GDP',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/QUSGAM770A" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default GovernmentDebtToGDP
