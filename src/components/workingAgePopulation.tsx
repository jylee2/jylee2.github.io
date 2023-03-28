import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getWorkingAgePopulation } from '../aggregators/workingAgePopulation';
import moment from 'moment';

const WorkingAgePopulation = () => {
  const chartData = getWorkingAgePopulation()

  return (
    <div className="card">
      <p>Working Age Population: Aged 15-64 (USA)</p>
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
          dataKey: 'millions',
          domain: [120, 220],
          name: 'Working Age Population: Aged 15-64',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/LFWA64TTUSM647S" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default WorkingAgePopulation
