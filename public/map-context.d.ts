declare type JMapContextSection = "all-contexts" | "draft"
declare type JMapContextSortOption = "alphabetic" | "lastUse" | "lastUpdate"

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
  data: {
    mapCenter: { x: number, y: number }
    mapZoom: number
    mapPitch: number
    mapBearing: number
    baseMap: string
    selection: JMapSelection
    measures: JAppMeasure[]
    thumbnail: string
    lastUseDate?: number
  }
}