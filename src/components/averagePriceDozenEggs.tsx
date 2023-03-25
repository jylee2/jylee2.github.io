import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getAveragePriceDozenEggs } from '../aggregators/averagePriceDozenEggs';
import moment from 'moment';

const AveragePriceDozenEggs = () => {
  const chartData = getAveragePriceDozenEggs()

  return (
    <div className="card">
      <p>Average Price: Eggs, Grade A, Large (Cost per Dozen) (USA)</p>
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
          name: 'Average Price: Eggs, Grade A, Large (Cost per Dozen)',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/APU0000708111" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default AveragePriceDozenEggs
