declare interface JAppMeasure {
  point: any // Feature
  line: any // Feature
  fill?: any //Feature
  popups: Array<{ coordinates: [number, number], html: string }>
  id: number
  type: JAppMeasureType
}
