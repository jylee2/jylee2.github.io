import { getFederalFundsEffectiveRate } from './federalFundsEffectiveRate'

describe("federalFundsEffectiveRate", () => {
  test("getFederalFundsEffectiveRate returns chart data", () => {
    const chartData = getFederalFundsEffectiveRate()

    expect(Array.isArray(chartData)).toBeTruthy()
    expect(chartData.length > 10).toBeTruthy()
    expect(Object.keys(chartData[0])).toStrictEqual(['time', 'rate'])
    expect(typeof chartData[0].time === 'number').toBeTruthy()
    expect(typeof chartData[0].rate === 'number').toBeTruthy()
  })
})
