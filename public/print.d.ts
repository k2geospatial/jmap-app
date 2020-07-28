declare type JAppPrintFileType = "png" | "jpeg" | "pdf"
declare type JAppPaperSize = "letter" | "legal" | "a3" | "a4"
declare type JAppPrintLegendPosition = "top-right" | "top-left"

declare interface JAppPaperFormat {
  paperSize: JAppPaperSize,
  width: number
  height: number
  ratio: number
}
