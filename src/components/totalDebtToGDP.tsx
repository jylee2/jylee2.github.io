import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getTotalCreditNonFinancialSector } from '../aggregators/totalCreditNonFinancialSector';
import moment from 'moment';

const TotalDebtToGDP = () => {
  const chartData = getTotalCreditNonFinancialSector()

  return (
    <div className="card">
      <p>Total Debt (Government + Household + Corporate) to GDP (USA)</p>
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
          name: 'Total Debt to GDP',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/QUSCAM770A" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default TotalDebtToGDP
