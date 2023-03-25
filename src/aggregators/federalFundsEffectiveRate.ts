import * as jsonResponse from "../data/federalFundsEffectiveRate.json"

export interface FederalFundsEffectiveRate {
  time: number; // unix timestamp
  rate: number;
}

export const getFederalFundsEffectiveRate = (): FederalFundsEffectiveRate[] => {
  const rawData = (jsonResponse as any)["default"]

  const aggregatedData: FederalFundsEffectiveRate[] =
    rawData?.observations?.[0]?.map((observation: any[]) => {
      return {
        time: observation[0],
        rate: observation[1]
      }
    })

  return aggregatedData
}
