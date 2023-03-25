import * as jsonResponse from '../data/M3MoneySupply_USA.json'

export interface ChartData {
  time: number; // unix timestamp
  billions: number;
}

export const getM3MoneySupply = (data: any = jsonResponse): ChartData[] => {
  const rawData = (data as any)["default"]

  const aggregatedData: ChartData[] =
    rawData?.observations?.[0]?.map((observation: any[]) => {
      return {
        time: observation[0],
        billions: Number(observation[1]) / 1000000000
      }
    })

  return aggregatedData
}
