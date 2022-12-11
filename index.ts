import { JEventModule } from "jmap-core"

export interface JAppState {
  panel: JAppPanelState
  measure: JAppMeasureState
  selection: JAppSelectionState
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
  wizardStep: JAPP_GEOMETRY_WIZARD_STEPS
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
  popupMenuLayerId: JId | undefined
  editionActiveTab: JAPP_LAYER_EDITION_TABS
  inEditionLayerId: JId | undefined
  isDynamicFilterDialogOpened: boolean
  inEditionDynamicFilterConditionId: number | undefined
}

export interface JAppUiState {
  sidePanelVisible: boolean
  mainPanelWidthInPixel: number
  theme: { [key: string]: any }
}

export interface JAppMeasureState {
  measures: JAppMeasure[]
  isSelectionActive: boolean
  isNewElement: boolean
  draw: JAppDrawState
}

export interface JAppDrawState {
  type: JAPP_DRAW_TYPES
  mode: JAPP_DRAW_MODES
  featuresSelected: JAppDrawFeature[]
  isDeleting: boolean
  isNewElement: boolean
  isStyling: boolean
  style: JAppDrawStyle
}

export interface JAppAnnotationState {
  annotations: JAppAnnotation[]
  draw: JAppDrawState
  presetColors: string[]
}

export interface JAppPrintState {
  paperFormat: JAppPaperFormat
  fileType: JAPP_PRINT_FILE_TYPES
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
  legendPosition: JAPP_PRINT_LEGEND_POSITION
  filterList: any[]
}

export interface JAppSelectionState {
  displayedLayerId: JId
  isNewElement: boolean
  tableVisibility: boolean
  isTabOpened: boolean
  draw: JAppDrawState
}

export interface JAppMessageState {
  messages: JAppMessage[]
  overlayMessages: JAppOverlayMessage[]
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
  Query: JAppQueryService
  Event: JAppEventService
  Annotation: JAppAnnotationService
  Extension: JAppExtensionService
  Message: JAppMessageService
  Project: JAppProjectService
  Feature: JAppFeatureService
  Geometry: JAppGeometryService
  Form: JAppFormService
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
  activateById(projectId: JId): JProject
  setSelectionPanelVisibility(isVisible: boolean): void
}

export interface JAppMessageService {
  error(message: string, options?: JAppMessageOptions): void
  warning(message: string, options?: JAppMessageOptions): void
  info(message: string, options?: JAppMessageOptions): void
  success(message: string, options?: JAppMessageOptions): void
  confirmMessage(params: JAppConfirmMessage): void
  display(message: string, options?: JAppMessageOptions): void
  displayWaitingOverlay(message: string): string
  closeWaitingOverlay(messageId?: string): void
}

export interface JAppAnnotationService {
  getDrawMode(): JAPP_DRAW_MODES
  setDrawMode(drawMode: JAPP_DRAW_MODES): void
  getDrawType(): JAPP_DRAW_TYPES
  setDrawType(drawType: JAPP_DRAW_TYPES): void
  existsById(annotationId: string): boolean
  getById(annotationId: string): JAppAnnotation
  getAll(): JAppAnnotation[]
  getSelectedIds(): string[]
  deleteAll(): void
  deleteByType(annotationType: JAPP_DRAW_TYPES): void
  deleteByIds(annotationIds: string[]): void
  deleteSelected(): void
  getStyle(): JAppDrawStyle
  updateStyle(style: JAppDrawStyle): void
  setStyleByAnnotationIds(annotationIds: string[], style: JAppDrawStyle): void
  setPresetColors(presetColors: string[]): void
  getPresetColors(): string[]
  addPresetColor(presetColor: string): void
  deletePresetColor(presetColor: string): void
}

export interface JAppQueryService {
  activateQuery(groupId: JId, queryId: string): void
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
    getVisiblePolygonGeometry(): GeoJSON.Polygon
  }
  SidePanel: {
    isVisible(): boolean
    toggleVisibility(): void
    setVisible(isVisible: boolean): void
    getWidthOpenInRem(): string
    getWidthOpenInPixel(): number
    getMinimumWidthOpenInPixel(): number
    setWidthOpenInPixel(width: number): void
    getWidthCloseInRem(): string
    getWidthCloseInPixel(): number
    getMainPanelWidthInRem(): string
    getMainPanelWidthInPixel(): number
    getHeaderMinHeightInRem(): string
    getHeaderMinHeightInPixel(): number
    getTitleMinHeightInRem(): string
    getTitleMinHeightInPixel(): number
  }
  Theme: {
    setDark(isDark: boolean): void
    isDark(): boolean
  }
}

export interface JAppEventService {
  Main: JAppAppEventModule
  Layer: JAppLayerEventModule
  UI: JAppUIEventModule
  Extension: JAppExtensionEventModule
  MapContext: JAppMapContextEventModule
}

export interface JAppSelectionService {
  getDisplayedLayerId(): JId
  setDisplayedLayerId(layerId: JId): void
  activateSelectionType(selectionType: JAPP_SELECTION_TYPES): void
  getActiveSelectionType(): JAPP_SELECTION_TYPES
  getTableVisibility(): boolean
  setTableVisibility(tableVisibility: boolean): void
  isTableDisplayedInTab(): boolean
  openTableInTab(): void
  closeTableTab(): void
  clearSelectionForLayer(layerId: JId): void
  clearSelection(): void
  selectFromFeature(feature: GeoJSON.Feature, selectionType?: JAPP_SELECTION_TYPES): void
  exportAsExcelFile(): void
  fitMapToDisplayLayerSelection(options?: JPanAndZoomOptions): void
}

export interface JAppMeasureService {
  getAll(): JAppMeasure[]
  existsById(measureId: string): boolean
  getById(measureId: string): JAppMeasure
  getAllLineMeasures(): JAppMeasure[]
  getAllPolygonMeasures(): JAppMeasure[]
  getAllCircleMeasures(): JAppMeasure[]
  setAllMeasures(measures: JAppMeasure[]): void
  activateMeasureType(measureType: JAPP_MEASURE_TYPES): void
  getActiveMeasureType(): JAPP_MEASURE_TYPES
  getSelectedIds(): string[]
  setSelectionActive(isSelectionActive: boolean): void
  deleteAll(): number
  deleteSelected(): number
  deleteMeasuresById(measureIds: string[]): number
  deleteAllLines(): number
  deleteAllPolygons(): number
  deleteAllCircles(): number
  setMeasureSystem(measureSystem: JAPP_MEASURE_SYSTEMS): void
  getMeasureSystem(): JAPP_MEASURE_SYSTEMS
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
  setFileType(fileType: JAPP_PRINT_FILE_TYPES): void
  getFileType(): JAPP_PRINT_FILE_TYPES
  takeCapture(): void
}

export interface JAppLayerService {
  Tree: JAppLayerTreeService
  Edition: JAppLayerEditionService
}

export interface JAppDynamicFilterService {
  openPanel(layerId: JId): void
  closePanel(): void
  openCreateDialog(layerId: JId): void
  openUpdateDialog(layerId: JId, conditionId: number): void
  closeDialog(): void
}

export interface JAppLayerEditionInfoService {
  openPanel(layerId: JId): void
  closePanel(): void
}

export interface JAppLayerEditionThematicService {
  openPanel(layerId: JId): void
  closePanel(): void
}

export interface JAppLayerEditionService {
  DynamicFilter: JAppDynamicFilterService
  Info: JAppLayerEditionInfoService
  Thematic: JAppLayerEditionThematicService
  openPanel(layerId: JId, tab: JAPP_LAYER_EDITION_TABS): void
  closePanel(): void
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
  oneFilterExistForMetadataId(metadataId: JId): boolean
  getAll(): JAppGetAllFiltersResult
  getById(filterId: number): JAppAnyLayerFilter
  add(filter: JAppAnyLayerFilter): JAppAnyLayerFilter
  deleteById(filterId: number): JAppAnyLayerFilter
  openAddFilterDialog(): void
  closeAddFilterDialog(): void
}

export interface JAppFormService {
  render(containerId: string, formParams: JFormParams): JFormMetaData
  destroyByContainerId(containerId: string): void
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

export interface JAppExtensionEventModule extends JEventModule {
  on: {
    registration(listenerId: string, fn: (params: JAppExtensionEventParams) => void): void
  }
}

export interface JAppUIEventModule extends JEventModule {
  on: {
    sidePanelVisibilityChanged(
      listenerId: string,
      fn: (params: JAppUISidePanelVisibilityChangedEventParams) => void
    ): void
    sidePanelWidthChanged(listenerId: string, fn: (params: JAppUISidePanelWidthChangedEventParams) => void): void
  }
}

export interface JAppMapContextEventModule extends JEventModule {
  on: {
    afterApply(listenerId: string, fn: (params: JMapContextAfterApplyEventParams) => void): void
  }
}
