import { coordinateData } from './coordinate-data'

export const convertData = (data: any[]) => {
  const res: any[] = []
  for (const item of data) {
    const geoCoord = coordinateData[item.name]
    if (geoCoord) {
      res.push({
        name: item.name,
        value: geoCoord.concat(item.value)
      })
    }
  }

  return res
}
