import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getCrudeOilPricesWTI } from '../aggregators/crudeOilPricesWTI';
import moment from 'moment';

const CrudeOilPricesWTI = () => {
  const chartData = getCrudeOilPricesWTI()

  return (
    <div className="card">
      <p>Crude Oil Prices per Barrel: West Texas Intermediate (WTI) - Cushing, Oklahoma</p>
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
          dataKey: 'dollars',
          name: 'Commercial Banks',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/DCOILWTICO" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default CrudeOilPricesWTI
