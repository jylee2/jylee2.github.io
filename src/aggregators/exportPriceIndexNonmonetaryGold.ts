import * as jsonResponse from '../data/exportPriceIndexNonmonetaryGold.json'

export interface ChartData {
  time: number; // unix timestamp
  index: number;
}

export const getExportPriceIndexNonmonetaryGold = (data: any = jsonResponse): ChartData[] => {
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
