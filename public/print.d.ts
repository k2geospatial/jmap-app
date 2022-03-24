// ALL_APP_PRINT_FILE_TYPES in all-enum.ts
declare const enum JAPP_PRINT_FILE_TYPES {
  PNG = "png",
  JPEG = "jpeg",
  PDF = "pdf"
}

// ALL_APP_PRINT_PAPER_SIZES in all-enum.ts
declare const enum JAPP_PRINT_PAPER_SIZES {
  LETTER = "letter",
  LEGAL = "legal",
  A3 = "a3",
  A4 = "a4"
}

// ALL_APP_PRINT_LEGEND_POSITION in all-enum.ts
declare const enum JAPP_PRINT_LEGEND_POSITION {
  TOP_RIGHT = "top-right",
  TOP_LEFT = "top-left"
}

declare interface JAppPaperFormat {
  paperSize: JAPP_PRINT_PAPER_SIZES
  width: number
  height: number
  ratio: number
}
