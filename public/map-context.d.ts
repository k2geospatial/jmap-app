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
  baseMap: string | undefined
  selection: JMapSelection
  measures: JAppMeasure[]
  thumbnail: string
  annotations: JAppAnnotation[]
  annotationsTextMarkersProperties: JappTextMarkerProperties[]
  extensionData?: { [extensionId: string]: any }
}

declare interface JMapContextDataLayerElement {
  id: number
  isGroup: boolean
  isVisible: boolean
}

declare interface JMapContextDataLayer extends JMapContextDataLayerElement{
  selectable: boolean
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

declare interface JAppMapContextEventParams {
  context: JMapContext
  isExtensionDataSetById(extensionId: string): boolean
  getExtensionDataById(extensionId: string): any
}

declare interface JAppMapContextMapDataEventParams extends JAppMapContextEventParams {
  isCreation: boolean
}

declare interface JAppMapContextBeforeMapDataChangeEventParams extends JAppMapContextMapDataEventParams {
  setExtensionDataById(extensionId: string, data: any): void
  removeExtensionDataById(extensionId: string): void
}

declare interface JAppMapContextAfterMapDataChangeEventParams extends JAppMapContextMapDataEventParams {
  // nothing else
}

declare interface JAppMapContextBeforeApplyEventParams extends JAppMapContextEventParams {
  // nothing else
}

declare interface JAppMapContextAfterApplyEventParams extends JAppMapContextEventParams  {
  // nothing else
}
