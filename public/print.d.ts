declare type JAppPrintFileType = "png" | "jpeg" | "pdf"
declare type JAppPrintLegendPosition = "top-right" | "top-left"

declare interface JAppPaperFormat {
  type: string,
  width: number
  height: number
  ratio: number
}
