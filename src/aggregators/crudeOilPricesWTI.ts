import * as jsonResponse from '../data/crudeOilPricesWTI.json'

export interface ChartData {
  time: number; // unix timestamp
  dollars: number;
}

export const getCrudeOilPricesWTI = (data: any = jsonResponse): ChartData[] => {
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
