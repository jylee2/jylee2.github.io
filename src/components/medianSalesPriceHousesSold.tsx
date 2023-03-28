import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getMedianSalesPriceHousesSold } from '../aggregators/medianSalesPriceHousesSold';
import moment from 'moment';

const MedianSalesPriceHousesSold = () => {
  const chartData = getMedianSalesPriceHousesSold()

  return (
    <div className="card">
      <p>Median Sales Price of Houses Sold (USA)</p>
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
          name: 'Median Sales Price of Houses Sold',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/MSPUS" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default MedianSalesPriceHousesSold
