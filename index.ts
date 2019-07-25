export interface JAppState {
  mode: API_MODE,
  allMode: API_MODE[]
  sidePanelOpen: boolean
}

export interface JApplicationService {
  getVersion(): string
  openDocumentation(): void
  getMode(): API_MODE
  getAllModes(): API_MODE[]
  setMode(mode: API_MODE): void
  getDomContainerId(): string
  UI: {
    SidePanel: JSidePanelController
  }
}

// UI -> SIDE_PANEL
export interface JSidePanelController {
  setVisible(open: boolean): void
  isOpen(): boolean
  open(): void
  close(): void
}
