import * as jsonResponse from '../data/workingAgePopulation_USA.json'

export interface ChartData {
  time: number; // unix timestamp
  millions: number;
}

export const getWorkingAgePopulation = (data: any = jsonResponse): ChartData[] => {
  const rawData = (data as any)["default"]

  const aggregatedData: ChartData[] =
    rawData?.observations?.[0]?.map((observation: any[]) => {
      return {
        time: observation[0],
        millions: Number(observation[1]) / 1000000
      }
    })

  return aggregatedData
}
