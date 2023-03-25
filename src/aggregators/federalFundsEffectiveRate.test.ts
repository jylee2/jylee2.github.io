import { getFederalFundsEffectiveRate } from './federalFundsEffectiveRate'

describe("federalFundsEffectiveRate", () => {
  test("getFederalFundsEffectiveRate returns chart data", () => {
    const chartData = getFederalFundsEffectiveRate({
      default: {
        observations: [
          [
            [-489265200000, 0.8],
            [-486586800000, 1.22],
            [-483908400000, 1.07],
            [-481312800000, 0.85]
          ]
        ]
      }
    })

    expect(Array.isArray(chartData)).toBeTruthy()
    expect(chartData.length > 1).toBeTruthy()
    expect(Object.keys(chartData[0])).toStrictEqual(['time', 'rate'])
    expect(typeof chartData[0].time === 'number').toBeTruthy()
    expect(typeof chartData[0].rate === 'number').toBeTruthy()
  })
})
