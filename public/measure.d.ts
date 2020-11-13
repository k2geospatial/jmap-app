declare type JAppMeasureType = "polygon" | "line_string" | "circle"

declare interface JAppMeasureEdge {
  popupLocation: JPoint
  distance: number
}

declare interface JAppMeasure {
  id: string
  type: JAppMeasureType
  feature: GeoJSON.Feature<GeoJSON.LineString | GeoJSON.Polygon>
  totalEdges: number
  centroid: JPoint
  edges: JAppMeasureEdge[]
  area: number
  radius: number
}
