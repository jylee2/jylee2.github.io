import '@testing-library/jest-dom'
import MultiLineChart from './lineChart'
import React from 'react'
import { render, screen } from '@testing-library/react'

describe("MultiLineChart", () => {
  test("should render a line chart", () => {
    render(
      <MultiLineChart
        data={[
          { time: -278877600000, rate: 2.02 },
          { time: -276199200000, rate: 1.49 },
          { time: -273610800000, rate: 1.98 
        }]}
        xAxisProps={{
          dataKey: "time",
          domain: ['auto', 'auto'],
          name: "Time",
          tickLine: false,
          type: "number",
        }}
        yAxisProps={{
          dataKey: 'rate',
          name: 'Federal Funds Effective Rate',
          tickLine: false,
        }}
      />
    )

    expect(screen.getByText('rate')).toBeVisible()
  })
})
