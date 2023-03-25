import * as jsonResponse from '../data/federalFundsEffectiveRate.json'

export interface FederalFundsEffectiveRate {
  time: number; // unix timestamp
  rate: number;
}

export const getFederalFundsEffectiveRate = (data: any = jsonResponse): FederalFundsEffectiveRate[] => {
  const rawData = (data as any)["default"]

  const aggregatedData: FederalFundsEffectiveRate[] =
    rawData?.observations?.[0]?.map((observation: any[]) => {
      return {
        time: observation[0],
        rate: observation[1]
      }
    })

  return aggregatedData
}
