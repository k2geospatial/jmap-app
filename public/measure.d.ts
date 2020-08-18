declare type JAppMeasureType = "circleArea" | "distance" | "polygonArea"

declare interface JAppMeasure {
  id: number
  type: JAppMeasureType
  total: number
  popups: Array<{ coordinates: JPoint, html: string }>
  multiPointFeature: GeoJSON.Feature<GeoJSON.MultiPoint>
  lineFeature: GeoJSON.Feature<GeoJSON.LineString>
  fillFeature: GeoJSON.Feature<GeoJSON.LineString>
}
