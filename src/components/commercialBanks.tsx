import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getCommercialBanks } from '../aggregators/commercialBanks';
import moment from 'moment';

const CommercialBanks = () => {
  const chartData = getCommercialBanks()

  return (
    <div className="card">
      <p>Commercial Banks (USA) (DISCONTINUED)</p>
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
          dataKey: 'thousands',
          name: 'Commercial Banks',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/USNUM" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default CommercialBanks
