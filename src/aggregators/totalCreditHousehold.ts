import * as jsonResponse from '../data/totalCreditHousehold_USA.json'

export interface ChartData {
  time: number; // unix timestamp
  pct: number;
}

export const getTotalCreditHousehold = (data: any = jsonResponse): ChartData[] => {
  const rawData = (data as any)["default"]

  const aggregatedData: ChartData[] =
    rawData?.observations?.[0]?.map((observation: any[]) => {
      return {
        time: observation[0],
        pct: observation[1]
      }
    })

  return aggregatedData
}
