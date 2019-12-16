
export interface JAppState {
  mode: JAppModeState
  measure: JAppMeasureState
  selection: JAppSelectionState
  ui: JAppUiState
}

export interface JAppModeState {
  currentMode: JAppMode,
  allModes: JAppMode[]
}
export interface JAppUiState {
  sidePanelVisible: boolean
  theme: { [Key: string]: string | boolean | number }
}

export interface JAppMeasureState {
  measureType: JAppMeasureType,
  isNewElement: boolean,
  isDeletingMeasure: boolean,
  totalLength: number,
  totalArea: number
}

export interface JAppSelectionState {
  selectionType: JAppSelectionType,
  isNewElement: boolean,
  tableLayerId?: number
}

export interface JApplicationService {
  Mode: JAppModeService
  Measure: JAppMeasureService
  Selection: JAppSelectionService
  getVersion(): string
  openDocumentation(): void
  getDomContainerId(): string
}

export interface JAppSelectionService {
  changeCurrentSelectionType(newSelectionType: JAppSelectionType): void
  cancelSelection(): void
  getCurrentDrawnSelectionContent(): JMapSelection
  removeLastDrawnSelectionCoordinate(): void
}

export interface JAppMeasureService {
  changeCurrentMeasureType(newMeasureType: JAppMeasureType): void
  activateDeleting(): void
  deleteAllMeasures(): void
  cancelCurrentMeasure(): void
  deleteMeasureAtLocation(location: JLocation): void
  finalizeMeasure(): void
}

export interface JAppModeService {
  getMode(): JAppMode
  getAllModes(): JAppMode[]
  setMode(modeId: string): void
}

export interface JUIController {
  SidePanel: JSidePanelController
  UserPanel: JUserPanelController
}

export interface JHideablePanel {
  setVisible(open: boolean): void
  isVisible(): boolean
  toggleVisibility(): void
  open(): void
  close(): void
}

// UI CTRL -> SIDE PANEL
export interface JSidePanelController extends JHideablePanel { }

// UI CTRL -> USER PANEL
export interface JUserPanelController extends JHideablePanel { }
