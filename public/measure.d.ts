declare type JAPP_MEASURE_TYPES = JAPP_DRAW_TYPES.POLYGON | JAPP_DRAW_TYPES.LINE_STRING | JAPP_DRAW_TYPES.CIRCLE

// ALL_APP_MEASURE_SYSTEMS in all-enum.ts
declare const enum JAPP_MEASURE_SYSTEMS {
  PLANAR = "planar",
  GEODETIC = "geodetic"
}

declare type JAPP_MEASURE_SPACE_TYPES = JAPP_DRAW_TYPES.POLYGON | JAPP_DRAW_TYPES.LINE_STRING | JAPP_DRAW_TYPES.CIRCLE

declare interface JAppMeasureEdge {
  popupLocation: JPoint
  distance: number
}

declare interface JAppMeasure {
  id: string
  type: JAPP_MEASURE_TYPES
  feature: GeoJSON.Feature<GeoJSON.LineString | GeoJSON.Polygon>
  totalEdges: number
  centroid: JPoint
  edges: JAppMeasureEdge[]
  area: number
  radius: number
}
