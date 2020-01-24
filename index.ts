import { Feature } from "geojson"

export interface JAppState {
  panel: JAppPanelState
  measure: JAppMeasureState
  selection: JAppSelectionState
  mapContext: JAppMapContextState
  layer: JAppLayerState
  ui: JAppUiState
  print: JAppPrintState
}

export interface JAppPanelState {
  active: JAppPanel,
  all: JAppPanel[]
}

export interface JAppLayerState {
  activeTab: JAppLayerTab
}

export interface JAppUiState {
  sidePanelVisible: boolean
  theme: { [Key: string]: string | boolean | number }
  container: {
    width: number
    height: number
  }
}

export interface JAppMapContextState {
  contexts: JMapContext[]
  selectedContextId?: number
  defaultContextId?: number
  draftContextId?: number
  draftContextTitle: string
  draftContextDescription: string
  section: JMapContextSection
  filter: string
  sortBy: JMapContextSortOption
}

export interface JAppMeasureState {
  measureType: JAppMeasureType,
  isNewElement: boolean,
  isDeletingMeasure: boolean,
  totalLength: number,
  totalArea: number
}

export interface JAppPrintState {
  activeTab: JAppPrintTab
  paperFormat: JAppPaperFormat
  fileType: JAppPrintFileType
  isOrientationPortrait: boolean
  marginRatio: number
  imagePPI: number
  base64Image: string
  pageTitle: string
  pageSubTitle: string
  isDateVisible: boolean
  isNorthArrowVisible: boolean
  isScaleVisible: boolean
  scale: number
  isLegend: boolean
  legendTitle: string
  legendSubTitle: string
  legendPosition: JAppPrintLegendPosition
  filterList: any[]
}

export interface JAppSelectionState {
  selectionType: JAppSelectionType,
  isNewElement: boolean,
  tableLayerId?: number
}

export interface JApplicationMainService {
  getVersion(): string
  openDocumentation(): void
}

export interface JApplicationUIService {
  Container: {
    getId(): string
    getWidth(): number
    getHeight(): number
  },
  SidePanel: {
    isVisible(): boolean
    setVisible(isVisible: boolean): void
  }
}

export interface JApplicationService extends JApplicationMainService {
  Panel: JAppPanelService
  Measure: JAppMeasureService
  Selection: JAppSelectionService
  Layer: JAppLayerService
  Print: JAppPrintService
  UI: JApplicationUIService
  MapContext: JAppMapContextService
}

export interface JAppPaperFormat {
  type: string,
  width: number
  height: number
  ratio: number
}

export interface JMapContext {
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
    measure: JExternalMeasureItem[]
    thumbnail: string
    lastUseDate?: number
  }
}

export interface JExternalMeasureItem {
  point: Feature
  line: Feature
  fill?: Feature
  popups: Array<{ coordinates: [number, number], html: string }>
  id: number
  type: JAppMeasureType
}

export interface JHideablePanel {
  setVisible(open: boolean): void
  isVisible(): boolean
  toggleVisibility(): void
  open(): void
  close(): void
}

export interface JAppSelectionService {
  activateSelectionType(selectionType: JAppSelectionType): void
  cancelSelection(): void
  getCurrentDrawnSelectionContent(): JMapSelection
  removeLastDrawnSelectionCoordinate(): void
}

export interface JAppMeasureService {
  activateMeasureType(measureType: JAppMeasureType): void
  activateDeleting(): void
  deleteAllMeasures(): void
  cancelCurrentMeasure(): void
  deleteMeasureAtLocation(location: JLocation): void
  finalizeMeasure(): void
}

export interface JAppPanelService {
  getActive(): JAppPanel
  getAll(): JAppPanel[]
  activate(panelId: string): void
}

export interface JAppPrintService {
  toggleTab(): void
  activateTab(tab: JAppPrintTab): void
  getActiveTab(): JAppPrintTab
  getAllTabs(): JAppPrintTab[]
  refreshScaleForCurrentZoom(): void
  setScaleControlVisibility(isVisible: boolean): void
  isScaleControlVisible(): boolean
  setPageTitle(title: string): void
  getPageTitle(): string
  setPageSubTitle(subTitle: string): void
  getPageSubTitle(): string
  setDateVisibility(isVisible: boolean): void
  isDateVisibile(): boolean
  setNorthArrowVisibility(isVisible: boolean): void
  isNorthArrowVisible(): boolean
  getAllPaperFormats(): JAppPaperFormat[]
  setPaperFormat(format: JAppPaperFormat): void
  getPaperFormat(): JAppPaperFormat
  setImagePPI(imagePPI: number): void
  getImagePPI(): number
  setOrientation(isPortrait: boolean): void
  isOrientationPortrait(): boolean
  setFileType(fileType: JAppPrintFileType): void
  getFileType(): JAppPrintFileType
  setMarginRatio(marginRatio: number): void
  getMarginRatio(): number
  getScale(): number
  setZoomFromScale(scale: number): void
  takeCapture(): void
}

export interface JAppMapContextService {
  setDefaultMapContext(mapContextId?: number): void
  selectMapContext(mapContextId: number): void
  saveDraftContext(): void
  requestMapContexts(): void
  deleteMapContext(mapContextId: number | number[]): void
  toggleMapContextSharing(mapContextId: number): void
  getDraftContextId(): number | undefined
  setDraftContextId(mapContextId?: number): void
  getDraftContextTitle(): string
  setDraftContextTitle(title: string): void
  getDraftContextDescription(): string
  setDraftContextDescription(description: string): void
  getAllContexts(): JMapContext[]
  getDefaultContextId(): number | undefined
  getSelectedContextId(): number | undefined
  getActiveSection(): JMapContextSection
  activateSection(mapContextSection: JMapContextSection): void
}

export interface JAppLayerService {
  getActiveTab(): JAppLayerTab
  activateTab(newTab: JAppLayerTab): void
}
