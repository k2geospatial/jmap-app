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
  activeTab: JMapContextTab
  contexts: JMapContext[]
  defaultContextId: number | undefined
  filter: string
  sortBy: JMapContextSortByOption
  sortByDirection: JMapContextSortByDirection
  createTitle: string
  createDescription: string
  createTitleError: boolean
}

export interface JAppMeasureState {
  measureType: JAppMeasureType,
  measures: JAppMeasure[]
  isNewElement: boolean,
  isDeleting: boolean
}

export interface JAppPrintState {
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
  selectionType: JAppSelectionType
  displayedLayerId: number
  isNewElement: boolean
  tableVisibility: boolean
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
    toggleVisibility(): void
    setVisible(isVisible: boolean): void
  },
  Theme: {
    setDark(isDark: boolean): void
    isDark(): boolean
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

export interface JHideablePanel {
  setVisible(open: boolean): void
  isVisible(): boolean
  toggleVisibility(): void
  open(): void
  close(): void
}

export interface JAppSelectionService {
  getDisplayedLayerId(): number
  setDisplayedLayerId(layerId: number): void
  activateSelectionType(selectionType: JAppSelectionType): void
  getTableVisibility(): boolean
  setTableVisibility(tableVisibility: boolean): void
  clearSelectionForLayer(layerId: number): void
  clearSelection(): void
  applyDrawnSelection(): void
  exportAsExcelFile(): void
  fitMapToDisplayLayerSelection(): void
  removeLastDrawnSelectionCoordinate(): void
}

export interface JAppMeasureService {
  activateMeasureType(measureType: JAppMeasureType): void
  setDeletingMode(isDeleting: boolean): void
  deleteAllMeasures(measureType?: JAppMeasureType): void
  deleteMeasureAtLocation(location: JLocation): void
  finalizeMeasure(): void
  resetState(): void
}

export interface JAppPanelService {
  getActive(): JAppPanel
  getAll(): JAppPanel[]
  activate(panelId: string): void
}

export interface JAppPrintService {
  refreshScaleForCurrentZoom(): void
  setScaleControlVisibility(isVisible: boolean): void
  isScaleControlVisible(): boolean
  setPageTitle(title: string): void
  getPageTitle(type?: string): string
  setPageSubTitle(subTitle: string): void
  getPageSubTitle(): string
  setDateVisibility(isVisible: boolean): void
  isDateVisibile(): boolean
  setNorthArrowVisibility(isVisible: boolean): void
  isNorthArrowVisible(): boolean
  getAllPaperFormats(): JAppPaperFormat[]
  setPaperFormat(format: JAppPaperFormat | string): void
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

export interface JMapContextMetaData {
  title: string
  shareLink: boolean
  description?: string
}

export interface JAppMapContextService {
  startCreation(): void
  cancelCreation(): void
  getAll(): JMapContext[]
  getById(contextId: number): JMapContext
  applyContextById(contextId: number): void
  deleteContextById(contextId: number | number[]): Promise<void>
  create(params?: JMapContextMetaData): Promise<JMapContext>
  update(contextId: number, params?: Partial<JMapContextMetaData>): Promise<JMapContext>
  setContextMetaData(contextId: number, data: Partial<JMapContextMetaData>): Promise<void>
  getContextTitle(contextId: number): string
  setContextTitle(contextId: number, title: string): Promise<void>
  getContextDescription(contextId: number): string
  setContextDescription(contextId: number, description: string): Promise<void>
  isLinkShared(contextId: number): boolean
  setLinkShare(contextId: number, isShared: boolean): Promise<void>
  getDefaultContext(): JMapContext | undefined
  isDefaultContext(contextId: number): boolean
  setDefaultContext(contextId?: number): Promise<void>
  sortListBy(sortBy: JMapContextSortByOption): void
  getListSortBy(): JMapContextSortByOption
  getAllListSortBy(): JMapContextSortByOption[]
  setListSortDirection(sortByDirection: JMapContextSortByDirection): void
  getListSortDirection(): JMapContextSortByDirection
  getAllListSortDirection(): JMapContextSortByDirection[]
  filterList(filter: string): void
  getListFilter(): string
  clearListFilter(filter: string): void
}

export interface JAppLayerService {
  activateTab(newTab: JAppLayerTab): void
  getAllTabs(): JAppLayerTab[]
  getActiveTab(): JAppLayerTab
}
