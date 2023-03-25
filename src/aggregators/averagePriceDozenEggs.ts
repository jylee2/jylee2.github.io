import * as jsonResponse from '../data/averagePriceDozenEggs_USA.json'

export interface ChartData {
  time: number; // unix timestamp
  dollars: number;
}

export const getAveragePriceDozenEggs = (data: any = jsonResponse): ChartData[] => {
  const rawData = (data as any)["default"]

  const aggregatedData: ChartData[] =
    rawData?.observations?.[0]?.map((observation: any[]) => {
      return {
        time: observation[0],
        dollars: observation[1]
      }
    })

  return aggregatedData
}
