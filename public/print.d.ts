declare type JAppPrintFileType = "png" | "jpeg" | "pdf"
declare type JAppPaperSize = "letter" | "legal" | "a3" | "a4"
declare type JAppPrintLegendPosition = "top-right" | "top-left"

declare interface JAppPaperFormat {
  paperSize: JAppPaperSize,
  width: number
  height: number
  ratio: number
}

declare interface JAppPageMarginsAndBorders {
  borderTop: number
  borderLeft: number
  borderBottom: number
  borderRight: number
  borderWidth: number
  borderHeight: number
  marginTop: number
  marginLeft: number
  marginBottom: number
  marginRight: number
  marginWidth: number
  marginHeight: number
  paddingTop: number
  paddingLeft: number
  paddingBottom: number
  paddingRight: number
  paddingWidth: number
  paddingHeight: number
}