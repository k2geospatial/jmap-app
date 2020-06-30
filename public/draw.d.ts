declare type JAppDrawType = "point" | "polygon" | "line_string" | "rectangle" | "circle" | "text"
declare type JAppDrawMode = "draw" | "select"
declare interface JAppDrawFeature extends GeoJSON.Feature {
  id: string
  properties: JAppDrawStyle
}
declare type JAppDrawFeaturesFn = (features: JAppDrawFeature[]) => void
declare interface JAppDrawStyle {
  fillColor?: string
  fillOpacity?: number
  lineColor?: string
  lineOpacity?: number
  lineWidth?: number
  textSize?: number
  textColor?: string
  textRotation?: number
  textZoomRef?: number
  shapeType?: string
}

declare interface JAppDrawTextStyle {
  textSize: number
  textColor: string
  textRotation: number
  textZoomRef: number
}
