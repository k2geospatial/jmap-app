declare type JAppDrawType = "point" | "polygon" | "line_string" | "rectangle" | "circle" | "text"
declare type JAppDrawMode = "draw" | "select" | "delete"

declare type JAppDrawFeaturesFn = (features: JAppDrawFeature[]) => void

declare interface JAppDrawFeature extends GeoJSON.Feature {
  id: string
  properties: JAppDrawStyle
  coordinates: JPoint[]
  addCoordinate: (path?: string | number, lng?: number, lat?: number) => void
  isValid: () => boolean
  updateCoordinate: (path?: string | number, lng?: number, lat?: number) => void
  toGeoJSON: () => GeoJSON.Feature
  removeCoordinate: (path: string | number) => void
  incomingCoords(coords: JPoint[][]): void
}

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
  radiusInKm?: number
  center?: number[]
}

declare interface JAppDrawTextStyle {
  textSize: number
  textColor: string
  textRotation: number
  textZoomRef: number
}
