import * as jsonResponse from '../data/medianSalesPriceHousesSold_USA.json'

export interface ChartData {
  time: number; // unix timestamp
  thousands: number;
}

export const getMedianSalesPriceHousesSold = (data: any = jsonResponse): ChartData[] => {
  const rawData = (data as any)["default"]

  const aggregatedData: ChartData[] =
    rawData?.observations?.[0]?.map((observation: any[]) => {
      return {
        time: observation[0],
        thousands: Number(observation[1]) / 1000
      }
    })

  return aggregatedData
}
