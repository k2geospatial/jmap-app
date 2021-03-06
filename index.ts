import { JEventModule } from "jmap-core"

export interface JAppState {
  panel: JAppPanelState
  measure: JAppMeasureState
  selection: JAppSelectionState
  mapContext: JAppMapContextState
  layer: JAppLayerState
  ui: JAppUiState
  query: JAppQueryState
  print: JAppPrintState
  project: JAppProjectState
  annotation: JAppAnnotationState
  message: JAppMessageState
  user: JAppUserState
  feature: JAppFeatureState
  geometry: JAppGeometryState
}

export interface JAppGeometryState {
  layerId: JId | undefined
  featureId: JId | undefined // needed for update
  hasChanged: boolean
  feature: GeoJSON.Feature | undefined
  isUpdate: boolean
  wizardStep: JAppGeometryWizardStep
  draw: JAppDrawState
}

export interface JAppFeatureState {
  layerId: JId | undefined
  isLoading: boolean
  hasLoadingError: boolean
  features: GeoJSON.Feature[]
}

export interface JAppProjectState {
  urlExist: boolean
  showProjectList: boolean
}

export interface JAppQueryState {
  activeQuery: JQuery | undefined
  defaultValueById: { [id: string]: any } | undefined
  displayInDialog: boolean
}

export interface JAppPanelState {
  active: JAppPanel
  all: JAppPanel[]
}

export interface JAppLayerState {
  treeFilter: JAppLayerTreeFilterState
  layerInEditionForThematic: JLayer | undefined
  popupMenuLayerId: number | undefined
}

export interface JAppUiState {
  sidePanelVisible: boolean
  theme: { [key: string]: any }
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
  isAvailable: boolean
}

export interface JAppMeasureState {
  measures: JAppMeasure[]
  isSelectionActive: boolean
  isNewElement: boolean
  draw: JAppDrawState
}

export interface JAppDrawState {
  type: JAppDrawType
  mode: JAppDrawMode
  featuresSelected: JAppDrawFeature[]
  isDeleting: boolean
  isNewElement: boolean
  isStyling: boolean
  style: JAppDrawStyle
}

export interface JAppAnnotationState {
  annotations: JAppAnnotation[]
  draw: JAppDrawState,
  presetColors: string[]
}

export interface JAppPrintState {
  paperFormat: JAppPaperFormat
  fileType: JAppPrintFileType
  isOrientationPortrait: boolean
  base64Image: string
  pageTitle: string
  pageSubTitle: string
  isDateVisible: boolean
  isNorthArrowVisible: boolean
  isScaleVisible: boolean
  isLegend: boolean
  legendTitle: string
  legendSubTitle: string
  legendPosition: JAppPrintLegendPosition
  filterList: any[]
}

export interface JAppSelectionState {
  displayedLayerId: number
  isNewElement: boolean
  tableVisibility: boolean
  draw: JAppDrawState
}

export interface JAppMessageState {
  messages: JAppMessage[]
  confirmMessage: JAppConfirmMessage | undefined
}

export interface JAppUserState {
  actions: JAppUserAction[]
}

export interface JApplicationService extends JApplicationMainService {
  User: JApplicationUserService
  Panel: JAppPanelService
  Measure: JAppMeasureService
  Selection: JAppSelectionService
  Layer: JAppLayerService
  Print: JAppPrintService
  UI: JApplicationUIService
  MapContext: JAppMapContextService
  Query: JAppQueryService
  Event: JAppEventService
  Annotation: JAppAnnotationService
  Extension: JAppExtensionService
  Message: JAppMessageService
  Project: JAppProjectService
  Feature: JAppFeatureService
  Geometry: JAppGeometryService
}

export interface JAppGeometryService {
  openPanelForCreation(): void
  openPanelForUpdate(params: JAppGeometryUpdateParams): void
  selectLayer(layerId: JId): void
  startCreationDrawing(): void
  stopCreationDrawing(): void
  finishCreate(): void
  finishUpdate(): Promise<void>
  closePanel(): void
}

export interface JAppFeatureService {
  openEditMenuById(layerId: JId, featureId: JId): Promise<GeoJSON.Feature>
  openEditMenuByIds(layerId: JId, featureIds: JId[]): Promise<GeoJSON.Feature[]>
  closeEditMenu(): void
  deleteByIds(layerId: JId, featureIds: JId[]): Promise<JFeatureDeleteByIdsResult>
}

export interface JAppProjectService {
  activateById(projectId: number): JProject
  setSelectionPanelVisibility(isVisible: boolean): void
}

export interface JAppMessageService {
  error(message: string, options?: JAppMessageOptions): void
  warning(message: string, options?: JAppMessageOptions): void
  info(message: string, options?: JAppMessageOptions): void
  success(message: string, options?: JAppMessageOptions): void
  confirmMessage(params: JAppConfirmMessage): void
  display(message: string, options?: JAppMessageOptions): void
}

export interface JAppAnnotationService {
  getDrawMode(): JAppDrawMode
  setDrawMode(drawMode: JAppDrawMode): void
  getDrawType(): JAppDrawType
  setDrawType(drawType: JAppDrawType): void
  existsById(annotationId: string): boolean
  getById(annotationId: string): JAppAnnotation
  getAll(): JAppAnnotation[]
  getSelectedIds(): string[]
  deleteAll(): void
  deleteByType(annotationType: JAppDrawType): void
  deleteByIds(annotationIds: string[]): void
  deleteSelected(): void
  getStyle(): JAppDrawStyle
  updateStyle(style: JAppDrawStyle): void
  setStyleByAnnotationIds(annotationIds: string[], style: JAppDrawStyle): void
  setPresetColors(presetColors: string[]): void,
  getPresetColors(): string[]
  addPresetColor(presetColor: string): void,
  deletePresetColor(presetColor: string): void
}

export interface JAppQueryService {
  activateQuery(groupId: number, queryId: string): void
  deactivateQuery(): void
  setDefaultData(values: any): void
  getDefaultData(): { [id: string]: any }
  clearDefaultData(): void
  displayInDialog(isVisibleInDialog: boolean): void
  processQuery(values: any): Promise<GeoJSON.Feature[]>
}

export interface JApplicationUserService {
  addPopupMenuAction(action: JAppUserAction, index?: number): void
  existsPopupMenuActionById(actionId: string): boolean
  removePopupMenuActionById(actionId: string): void
}

export interface JApplicationMainService {
  getVersion(): string
  getApiVersion(): string
  openDocumentation(): void
  openUserManual(): void
}

export interface JApplicationUIService {
  Container: {
    getId(): string
    getWidth(): number
    getHeight(): number
  }
  SidePanel: {
    isVisible(): boolean
    toggleVisibility(): void
    setVisible(isVisible: boolean): void
    getWidthOpenInRem(): string
    getWidthOpenInPixel(): number
    getWidthCloseInRem(): string
    getWidthCloseInPixel(): number
    getMainPanelWidthInRem(): string
    getMainPanelWidthInPixel(): number
    getHeaderMinHeightInRem(): string
    getHeaderMinHeightInPixel(): number
  }
  Theme: {
    setDark(isDark: boolean): void
    isDark(): boolean
  }
}

export interface JAppEventService {
  Main: JAppAppEventModule
  Layer: JAppLayerEventModule
  MapContext: JAppMapContextEventModule
}

export interface JAppSelectionService {
  getDisplayedLayerId(): number
  setDisplayedLayerId(layerId: number): void
  activateSelectionType(selectionType: JAppSelectionType): void
  getActiveSelectionType(): JAppSelectionType
  getTableVisibility(): boolean
  setTableVisibility(tableVisibility: boolean): void
  clearSelectionForLayer(layerId: number): void
  clearSelection(): void
  selectFromFeature(feature: GeoJSON.Feature, selectionType?: JAppSelectionType): void
  exportAsExcelFile(): void
  fitMapToDisplayLayerSelection(): void
}

export interface JAppMeasureService {
  getAll(): JAppMeasure[]
  existsById(measureId: string): boolean
  getById(measureId: string): JAppMeasure
  getAllLineMeasures(): JAppMeasure[]
  getAllPolygonMeasures(): JAppMeasure[]
  getAllCircleMeasures(): JAppMeasure[]
  setAllMeasures(measures: JAppMeasure[]): void
  activateMeasureType(measureType: JAppMeasureType): void
  getActiveMeasureType(): JAppMeasureType
  getSelectedIds(): string[]
  setSelectionActive(isSelectionActive: boolean): void
  deleteAll(): number
  deleteSelected(): number
  deleteMeasuresById(measureIds: string[]): number
  deleteAllLines(): number
  deleteAllPolygons(): number
  deleteAllCircles(): number
}

export interface JAppExtensionService {
  register(extension: JAppExtension): void
  isRegistered(extensionId: string): boolean
  getAllRegisteredIds(): string[]
}

export interface JAppPanelService {
  getActive(): JAppPanel
  getAll(): JAppPanel[]
  existById(panelId: string): boolean
  activateById(panelId?: string, params?: JAppPanelActivationParams): void
  deactivateCurrent(params?: JAppPanelDeactivationParams): void
  add(panel: JAppPanel): void
  removeById(panelId: string): void
}

export interface JAppPrintService {
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
  setPaperFormat(format: JAppPaperFormat | string): void
  getPaperFormat(): JAppPaperFormat
  setOrientation(isPortrait: boolean): void
  isOrientationPortrait(): boolean
  setFileType(fileType: JAppPrintFileType): void
  getFileType(): JAppPrintFileType
  takeCapture(): void
}

export interface JAppMapContextService {
  isAvailable(): boolean
  startCreation(): void
  cancelCreation(): void
  getAll(): JMapContext[]
  getById(contextId: number): JMapContext
  applyContextById(contextId: number): void
  deleteContextById(contextId: number | number[]): Promise<void>
  create(params?: JMapContextMetaData): Promise<JMapContext>
  update(
    contextId: number,
    params?: Partial<JMapContextMetaData>
  ): Promise<JMapContext>
  updateMetaData(
    contextId: number,
    params: Partial<JMapContextMetaData>
  ): Promise<void>
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
  clearListFilter(): void
}

export interface JAppLayerService {
  Tree: JAppLayerTreeService
  startThematicEdition(layerId: number): void
  stopThematicEdition(): void
}

export interface JAppLayerTreeService {
  Filter: JAppLayerTreeFilterService
}

export interface JAppLayerTreeFilterService {
  setName(nameFilter: string): void
  isApplied(): boolean
  isActive(): boolean
  setActive(active: boolean): void
  applyToMap(): void
  existById(filterId: number): boolean
  oneFilterExistForMetadataId(metadataId: number): boolean
  getAll(): JAppGetAllFiltersResult
  getById(filterId: number): JAppAnyLayerFilter
  add(filter: JAppAnyLayerFilter): JAppAnyLayerFilter
  deleteById(filterId: number): JAppAnyLayerFilter
  openAddFilterDialog(): void
  closeAddFilterDialog(): void
}

export interface JAppAppEventModule extends JEventModule {
  on: {
    appReady(listenerId: string, fn: () => void): void
  }
}

export interface JAppLayerEventModule extends JEventModule {
  on: {
    doubleClick(listenerId: string, fn: (params: JAppLayerEventParams) => void): void
  }
}

export interface JAppMapContextEventModule extends JEventModule {
  on: {
    beforeMapDataChange(listenerId: string, fn: (params: JAppMapContextBeforeMapDataChangeEventParams) => void): void
    afterMapDataChange(listenerId: string, fn: (params: JAppMapContextAfterMapDataChangeEventParams) => void): void
    beforeApply(listenerId: string, fn: (params: JAppMapContextBeforeApplyEventParams) => void): void
    afterApply(listenerId: string, fn: (params: JAppMapContextAfterApplyEventParams) => void): void
  }
}
