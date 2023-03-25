// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonResponse = require("../data/federalFundsEffectiveRate.json")

export interface FederalFundsEffectiveRate {
  time: number; // unix timestamp
  rate: number;
}

export const getFederalFundsEffectiveRate = (): FederalFundsEffectiveRate[] => {
  const aggregatedData: FederalFundsEffectiveRate[] =
    jsonResponse?.observations?.[0]?.map((observation: any[]) => {
      return {
        time: observation[0],
        rate: observation[1]
      }
    })

  return aggregatedData
}
