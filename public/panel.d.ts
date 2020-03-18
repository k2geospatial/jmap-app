declare interface JAppPanel {
  id: string
  icon: string // url or base64 or app name
  tooltip: string
  interactorId?: string
  title?: string
  onPanelCreation?: (panelContainerId: string) => void
  onPanelDestroy?: (panelContainerId: string) => void
}
