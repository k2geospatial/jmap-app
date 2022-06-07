// ALL_APP_LAYER_DATE_FILTER_OPERATOR_TYPES in all-enum.ts
declare const enum JAPP_LAYER_DATE_FILTER_OPERATOR_TYPES {
  BEFORE = "before",
  AFTER = "after",
  BETWEEN = "between",
  LAST_PERIOD = "lastPeriod"
}

// ALL_APP_LAYER_TEXT_FILTER_OPERATOR_TYPES in all-enum.ts
declare const enum JAPP_LAYER_TEXT_FILTER_OPERATOR_TYPES {
  CONTAINS = "contains",
  DOES_NOT_CONTAIN = "doesNotContain",
  EQUALS = "equals",
  DOES_NOT_EQUALS = "doesNotEqual"
}

// ALL_APP_LAYER_NUMBER_FILTER_OPERATOR_TYPES in all-enum.ts
declare const enum JAPP_LAYER_NUMBER_FILTER_OPERATOR_TYPES {
  EQUALS = "equals",
  DOES_NOT_EQUALS = "doesNotEqual",
  SMALLER_THAN = "smallerThan",
  GREATER_THAN = "greaterThan"
}

// ALL_APP_LAYER_FILTER_DATE_PERIOD_TYPES in all-enum.ts
declare const enum JAPP_LAYER_FILTER_DATE_PERIOD_TYPES {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year"
}

// ALL_APP_LAYER_EDITION_TABS in all-enum.ts
declare const enum JAPP_LAYER_EDITION_TABS {
  THEMATICS = "thematics",
  DYNAMIC_FILTER = "dynamic-filter",
  GENERAL = "general"
}

declare type JAppLayerAnyFilterOperatorType =
  | JAPP_LAYER_DATE_FILTER_OPERATOR_TYPES
  | JAPP_LAYER_TEXT_FILTER_OPERATOR_TYPES
  | JAPP_LAYER_NUMBER_FILTER_OPERATOR_TYPES

declare interface JAppLayerTreeFilterState {
  active: boolean
  isAddingFilter: boolean
  nameFilter: string
  filters: JAppAnyLayerFilter[]
  exactlyMatchedTreeItemIds: JId[]
  expandedMatchedTreeItemIds: JId[]
  layerIdsByFilterId: JAppLayerIdByFilterId
}

declare interface JAppGetAllFiltersResult {
  nameFilter: string
  filters: JAppAnyLayerFilter[]
}

declare type JAppLayerIdByFilterId = { [filterId: number]: JId[] }

declare type JAppAnyLayerFilter = JAppNumberLayerFilter | JAppTextLayerFilter | JAppDateLayerFilter

declare interface JAppBaseLayerFilter {
  id: number
  metadataItemId: JId
  type: JLAYER_METADATA_TYPES
}

declare interface JAppNumberLayerFilter extends JAppBaseLayerFilter {
  operator: JAPP_LAYER_NUMBER_FILTER_OPERATOR_TYPES
  value: number
}

declare interface JAppTextLayerFilter extends JAppBaseLayerFilter {
  operator: JAPP_LAYER_TEXT_FILTER_OPERATOR_TYPES
  value: string
}

declare interface JAppDateLayerFilter extends JAppBaseLayerFilter {
  operator: JAPP_LAYER_DATE_FILTER_OPERATOR_TYPES
  datePeriod?: JAPP_LAYER_FILTER_DATE_PERIOD_TYPES
  value: number | Date | Date[]
}

declare interface JAppLayerEventParams {
  layer: JLayer
}
