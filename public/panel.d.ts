declare interface JAppPanelActivationParams {
  ignoreConfirmationMessage?: boolean
}

declare interface JAppPanelDeactivationParams extends JAppPanelActivationParams {
  activatePrevious?: boolean
}

declare interface JAppPanel {
  id: string
  icon: string // url or base64 or app name
  iconTooltip: string | JTranslationItem | (() => string)
  interactorId?: string | (() => string | undefined)
  title?: string | JTranslationItem | (() => string)
  isPopup?: boolean
  onPanelCreation?: (panelContainerId: string) => void
  onPanelDestroy?: (panelContainerId: string) => void
  leaveConfirmationMessageFn?: () => string | undefined // returning a message will display popup
}
