declare interface JAppPanel {
  id: string
  icon: string // url or base64 or app name
  iconTooltip: string | JTranslationItem
  interactorId?: string
  title?: string | JTranslationItem
  onPanelCreation?: (panelContainerId: string) => void
  onPanelDestroy?: (panelContainerId: string) => void
}
