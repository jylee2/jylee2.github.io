import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getTotalCreditHousehold } from '../aggregators/totalCreditHousehold';
import moment from 'moment';

const HouseholdDebtToGDP = () => {
  const chartData = getTotalCreditHousehold()

  return (
    <div className="card">
      <p>Household Debt to GDP (USA)</p>
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
          name: 'Household Debt to GDP',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/QUSHAM770A" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default HouseholdDebtToGDP
