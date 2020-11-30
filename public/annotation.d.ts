declare interface JAppAnnotation {
  id: string
  type: JAppDrawType
  feature: any
}

declare interface JappTextMarkerProperties {
  id: string
  location: mapboxgl.LngLatLike
  textSize: number
  textColor: string
  textRotation: number
  label: string
  zoomRef: number
  shapeType: string
}
