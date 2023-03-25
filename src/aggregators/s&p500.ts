import * as jsonResponse from '../data/S&P500.json'

export interface ChartData {
  time: number; // unix timestamp
  index: number;
}

export const getSP500 = (data: any = jsonResponse): ChartData[] => {
  const rawData = (data as any)["default"]

  const aggregatedData: ChartData[] =
    rawData?.observations?.[0]?.map((observation: any[]) => {
      return {
        time: observation[0],
        index: observation[1]
      }
    })

  return aggregatedData
}
