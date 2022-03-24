// ALL_APP_MESSAGE_SEVERITIES in all-enum.ts
declare const enum JAPP_MESSAGE_SEVERITIES {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error"
}

declare interface JAppMessage {
  id: string
  text: string
  severity: JAPP_MESSAGE_SEVERITIES
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
  locale?: JLOCALES
  onSuccess: (input: string) => any
  onCancel?: () => any
}

declare interface JAppMessageOptions {
  severity?: JAPP_MESSAGE_SEVERITIES
  duration?: number | null
}
