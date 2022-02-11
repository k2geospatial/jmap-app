
declare type JAppMessageSeverity = "success" | "info" | "warning" | "error"

declare interface JAppMessage {
  id: string
  text: string
  severity: JAppMessageSeverity
  expired: boolean
  duration: number | null
}

declare interface JAppOverlayMessage {
  id: string
  text: string
}

declare interface JAppConfirmMessage {
  message: string
  title: string
  isInputMessage?: boolean
  isInputOptional?: boolean
  inputPlaceholder?: string
  confirmButtonLabel?: string
  cancelButtonLabel?: string
  locale?: JLocale
  onSuccess: (input: string) => any
  onCancel?: () => any
}

declare interface JAppMessageOptions{
  severity?: JAppMessageSeverity
  duration?: number | null
}
