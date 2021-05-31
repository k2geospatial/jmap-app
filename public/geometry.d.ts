declare type JAppGeometryWizardStep = "select-layer" | "draw"

declare interface JAppGeometryUpdateParams {
  layerId: JId,
  feature: GeoJSON.Feature
}
