import React from 'react'
import MultiLineChart from './shared/lineChart';
import { getFederalFundsEffectiveRate } from '../aggregators/federalFundsEffectiveRate';
import moment from 'moment';

const FederalFundsEffectiveRates = () => {
  const federalFundsEffectiveRates = getFederalFundsEffectiveRate()

  return (
    <div className="card">
      <p>Federal Funds Effective Rates (USA)</p>
      <MultiLineChart
        data={federalFundsEffectiveRates}
        xAxisProps={{
          dataKey: "time",
          domain: ['auto', 'auto'],
          name: "Time",
          tickLine: false,
          type: "number",
          tickFormatter: (unixTime: number) => moment(unixTime).format("YYYY")
        }}
        yAxisProps={{
          dataKey: 'rate',
          name: 'Federal Funds Effective Rate',
          tickLine: false,
        }}
      />
      <a href="https://fred.stlouisfed.org/series/FEDFUNDS" target="_blank" rel="noreferrer">Reference</a>
    </div>
  )
}

export default FederalFundsEffectiveRates
