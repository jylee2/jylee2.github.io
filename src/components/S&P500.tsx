import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getSP500 } from '../aggregators/s&p500';
import moment from 'moment';

const SP500 = () => {
  const chartData = getSP500()

  return (
    <div className="card">
      <p>S&P 500</p>
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
          dataKey: 'index',
          name: 'S&P 500',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/SP500" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default SP500
