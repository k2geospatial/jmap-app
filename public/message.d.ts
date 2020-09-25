
declare type JAppMessageSeverity = "success" | "info" | "warning" | "error"
declare interface JAppMessage {
    id?: number
    text: string
    severity: JAppMessageSeverity
    expired: boolean
    duration: number
}

declare interface JAppMessageOptions{
    severity?: JAppMessageSeverity
    duration?: number
}