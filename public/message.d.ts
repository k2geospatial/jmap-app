
declare type JAppMessageSeverity = "success" | "info" | "warning" | "error"

declare interface JAppMessage {
  id: string
  text: string
  severity: JAppMessageSeverity
  expired: boolean
  duration: number | null
}

declare interface JAppConfirmMessage {
  message: string
  title: string
  isInputMessage?: boolean
  inputPlaceholder?: string
  confirmButtonLabel?: string
  cancelButtonLabel?: string
  locale?: string
  onSuccess: (input: string) => void
  onCancel?: () => void
}

declare interface JAppMessageOptions{
  severity?: JAppMessageSeverity
  duration?: number | null
}
