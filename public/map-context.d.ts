declare type JMapContextTab = "list" | "create"
declare type JMapContextSortByOption = "alphabetic" | "lastUpdate" //  | "lastUse"
declare type JMapContextSortByDirection = "asc" | "desc"

declare interface JMapContextEditResponse {
  id: number
  uuid: string
  modificationDate: string
}

declare interface JMapContextMetaData {
  title: string
  shareLink: boolean
  description?: string
}

declare interface JMapContextData {
  layerElements: JMapContextDataLayerElement[]
  mapCenter: { x: number, y: number }
  mapZoom: number
  mapPitch: number
  mapBearing: number
  baseMap: string
  selection: JMapSelection
  measures: JAppMeasure[]
  thumbnail: string
  annotations: JAppAnnotation[]
  annotationsTextMarkersProperties: JappTextMarkerProperties[]
}

declare interface JMapContextDataLayerElement {
  id: number
  isGroup: boolean
  isVisible: boolean
}

declare interface JMapContextDataLayer extends JMapContextDataLayerElement{
  thematics: JMapContextDataThematic[]
}

declare interface JMapContextDataThematic {
  id: number
  isVisible: boolean
}

declare interface JMapContext {
  id?: number,
  title: string,
  description: string,
  shared: boolean,
  origin: "web-ng",
  uuid?: string,
  author?: string
  creationDate?: string
  modificationDate?: string
  projectId?: string
  data: JMapContextData
}