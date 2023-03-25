import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getAverageSalesPriceHousesSold } from '../aggregators/averageSalesPriceHousesSold';
import moment from 'moment';

const AverageSalesPriceHousesSold = () => {
  const chartData = getAverageSalesPriceHousesSold()

  return (
    <div className="card">
      <p>Average Sales Price of Houses Sold (USA)</p>
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
          name: 'Average Sales Price of Houses Sold',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/ASPUS" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default AverageSalesPriceHousesSold
