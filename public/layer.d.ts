declare type JAppLayerDateFilterOperatorType =
  | "before"
  | "after"
  | "between"
  | "lastPeriod"

declare type JAppLayerTextFilterOperatorType =
  | "contains"
  | "doesNotContain"
  | "equals"
  | "doesNotEqual"

declare type JAppLayerNumberFilterOperatorType =
  | "equals"
  | "doesNotEqual"
  | "smallerThan"
  | "greaterThan"

declare type JAppLayerFilterCombinationOperator = "allOf" | "any"

declare type JAppLayerAnyFilterOperatorType = JAppLayerDateFilterOperatorType | JAppLayerTextFilterOperatorType | JAppLayerNumberFilterOperatorType

declare type JAppLayerFilterDatePeriodType = "day" | "week" | "month" | "year"

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

declare type JAppLayerIdByFilterId = {[filterId: number]: JId[]}

declare type JAppAnyLayerFilter = JAppNumberLayerFilter | JAppTextLayerFilter | JAppDateLayerFilter

declare interface JAppBaseLayerFilter {
  id: number
  metadataItemId: JId
  type: JLayerMetadataType
}

declare interface JAppNumberLayerFilter extends JAppBaseLayerFilter{
  operator: JAppLayerNumberFilterOperatorType
  value: number
}

declare interface JAppTextLayerFilter extends JAppBaseLayerFilter{
  operator: JAppLayerTextFilterOperatorType
  value: string
}

declare interface JAppDateLayerFilter extends JAppBaseLayerFilter{
  operator: JAppLayerDateFilterOperatorType
  datePeriod?: JAppLayerFilterDatePeriodType
  value: number | Date | Date[]
}

declare interface JAppLayerEventParams {
  layer: JLayer
}
