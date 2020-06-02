declare type JAppMeasureType = "circleArea" | "distance" | "polygonArea"

declare interface JAppMeasure {
  id: number
  type: JAppMeasureType
  total: number
  popups: Array<{ coordinates: [number, number], html: string }>
  multiPointFeature: any // Feature<MultiPoint>
  lineFeature: any // Feature<LineString>
  fillFeature: any //Feature<LineString>
}
