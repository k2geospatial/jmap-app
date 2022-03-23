// ALL_APP_GEOMETRY_WIZARD_STEPS in all-enum.ts
declare const enum JAPP_GEOMETRY_WIZARD_STEPS {
  SELECT_LAYER = "select-layer",
  DRAW = "draw"
}

declare interface JAppGeometryUpdateParams {
  layerId: JId
  feature: GeoJSON.Feature
}
