import { LineChart, Line, XAxis, XAxisProps, YAxis, YAxisProps, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react'

export interface MultiLineChartProps {
  data: any[];
  xAxisProps: XAxisProps;
  yAxisProps: YAxisProps;
}

const MultiLineChart = ({ data, xAxisProps, yAxisProps }: MultiLineChartProps) => {
  return (
    // <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis {...xAxisProps} />
        <YAxis {...yAxisProps} />
        <Tooltip />
        <Legend />
        <Line
          dataKey={yAxisProps.dataKey}
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    // </ResponsiveContainer>
  )
}

export default MultiLineChart
