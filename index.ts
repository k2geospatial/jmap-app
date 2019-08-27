export interface JAppState {
  mode: API_MODE,
  allMode: API_MODE[]
  sidePanelVisible: boolean
  userPanelVisible: boolean
}

export interface JApplicationService {
  getVersion(): string
  openDocumentation(): void
  getMode(): API_MODE
  getAllModes(): API_MODE[]
  setMode(mode: API_MODE): void
  getDomContainerId(): string
  UI: JUIController
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
export interface JSidePanelController extends JHideablePanel {}

// UI CTRL -> USER PANEL
export interface JUserPanelController extends JHideablePanel {}

