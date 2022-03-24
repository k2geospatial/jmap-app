declare interface JAppAnnotation {
  id: string
  type: JAPP_DRAW_TYPES
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
