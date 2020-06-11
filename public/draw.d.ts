declare type JAppDrawType = "point" | "polygon" | "line_string" | "rectangle" | "circle"
declare type JAppDrawMode = "draw" | "select" | "delete"
declare type JAppDrawFeaturesSelected = GeoJSON.Feature[]
declare interface JAppDrawStyle {
  fillColor?: string
  fillOpacity?: number
  lineColor?: string
  lineOpacity?: number
  lineWidth?: number
}
