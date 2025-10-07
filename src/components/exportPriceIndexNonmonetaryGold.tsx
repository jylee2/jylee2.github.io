import React from 'react'
import MultiLineChart from './shared/lineChart';
import moment from 'moment';
import { getExportPriceIndexNonmonetaryGold } from '../aggregators/exportPriceIndexNonmonetaryGold';

const ExportPriceIndexNonmonetaryGold = () => {
  const chartData = getExportPriceIndexNonmonetaryGold()

  return (
    <div className="card">
      <p>Export Price Index (End Use): Nonmonetary Gold (Dec 2024=100)</p>
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
          name: 'Index Dec 2024=100',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/IQ12260" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default ExportPriceIndexNonmonetaryGold
