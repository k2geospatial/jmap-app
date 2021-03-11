declare namespace JMap {

  /**
   * **JMap.Application**
   * 
   * This is the JMap Web App API documentation.
   * 
   * JMap Web App depends on the JMap Web Core library ([[JMap]]).
   * 
   * Examples are availables <a href="https://doc.k2geospatial.com/jmap/doc/ng_dev/examples.html" target="_blank">here</a>.
   * 
   * You can customize JMap Web App by providing startup options ([[JApplicationOptions]]).
   */
  namespace Application {

    /**
     * **JMap.Application.getVersion**
     * 
     * Returns the application build version.
     * 
     * @example ```ts
     * 
     * // returns the build version, for example "1.0.1"
     * JMap.Application.getVersion()
     * ```
     */
    function getVersion(): string

    /**
     * **JMap.Application.getApiVersion**
     * 
     * Returns the application API (Typescript interfaces) version.
     * 
     * For the same API version, multiple implementation versions can exist.
     * 
     * @example ```ts
     * 
     * // returns the build version, for example "1.0.1"
     * JMap.Application.getApiVersion()
     * ```
     */
    function getApiVersion(): string

    /**
     * **JMap.Application.openDocumentation**
     * 
     * Open JMap Web App online JS API documentation, in a new tab.
     * 
     * @example ```ts
     * 
     * // open JMap Web App online documentation, in a new tab
     * JMap.Application.openDocumentation()
     * ```
     */
    function openDocumentation(): void
    
    /**
     * **JMap.Application.Annotation**
     * 
     * You can manage everything related to annotations here.
     */
    namespace Annotation {

      /**
       * **JMap.Application.Annotation.getDrawMode**
       * 
       * Returns the current draw mode.
       * 
       * @example ```ts
       * 
       * // returns the current draw mode
       * JMap.Application.Annotation.getDrawMode()
       * ```
       */
      function getDrawMode(): JAppDrawMode

      /**
       * **JMap.Application.Annotation.setDrawMode**
       * 
       * Set the annotation draw mode.
       * 
       * @param drawMode the new draw mode
       * @example ```ts
       * 
       * // Set the annotation draw mode to "draw"
       * JMap.Application.Annotation.setDrawMode("draw")
       * ```
       */
      function setDrawMode(drawMode: JAppDrawMode): void

      /**
       * **JMap.Application.Annotation.getDrawType**
       * 
       * Returns the current draw type.
       * 
       * @example ```ts
       * 
       * // returns the current draw type
       * JMap.Application.Annotation.getDrawType()
       * ```
       */
      function getDrawType(): JAppDrawType

      /**
       * **JMap.Application.Annotation.setDrawMode**
       * 
       * Set the annotation draw mode.
       * 
       * @param drawType the new draw type
       * @example ```ts
       * 
       * // Set the annotation draw mode to "draw"
       * JMap.Application.Annotation.setDrawMode("draw")
       * ```
       */
      function setDrawType(drawType: JAppDrawType): void

      /**
       * **JMap.Application.Annotation.existsById**
       * 
       * Returns true if annotation exist for the given id, else false
       * 
       * @throws if the annotationId param is not a valid string
       * @param annotationId the given annotation id 
       * @example ```ts
       * 
       * // returns true if annotation exist, else false
       * JMap.Application.Annotation.existsById("d68385b01be3c241c7b6298b2788839d")
       * ```
       */
      function existsById(annotationId: string): boolean

      /**
       * **JMap.Application.Annotation.getById**
       * 
       * Returns the annotation for the given id.
       * 
       * @throws if the annotationId param is not a valid string, or annotation is not found
       * @param annotationId the given annotation id 
       * @example ```ts
       * 
       * // returns the annotation for the given id
       * JMap.Application.Annotation.getById("d68385b01be3c241c7b6298b2788839d")
       * ```
       */
      function getById(annotationId: string): JAppAnnotation

      /**
       * **JMap.Application.Annotation.getAll**
       * 
       * Returns all annotations.
       * 
       * @example ```ts
       * 
       * // returns all annotations
       * JMap.Application.Annotation.getAll()
       * ```
       */
      function getAll(): JAppAnnotation[]

      /**
       * **JMap.Application.Annotation.getSelectedIds**
       * 
       * Returns the ids of the selected annotations.
       * 
       * Empty array if no annotation are selected
       * 
       * @example ```ts
       * 
       * // returns ids of selected annotations
       * JMap.Application.Annotation.getSelectedIds()
       * ```
       */
      function getSelectedIds(): string[]

      /**
       * **JMap.Application.Annotation.deleteAll**
       * 
       * Delete all annotations.
       * 
       * Do nothing if no annotation exist.
       * 
       * @example ```ts
       * 
       * // Delete all annotations
       * JMap.Application.Annotation.deleteAll()
       * ```
       */
      function deleteAll(): void

      /**
       * **JMap.Application.Annotation.deleteByType**
       * 
       * Delete the annotations for the given type.
       * 
       * Do nothing if no annotation exist for the type.
       * 
       * @param annotationType the annotation type : "point", "polygon", "line_string", "rectangle", "circle", or "text"
       * @throws if the annotation type is not correct
       * @example ```ts
       * 
       * // Delete all text annotations if exist
       * JMap.Application.Annotation.deleteByType("text")
       * ```
       */
      function deleteByType(annotationType: JAppDrawType): void

      /**
       * **JMap.Application.Annotation.deleteByIds**
       * 
       * Delete the annotations for the given ids.
       * 
       * @param annotationIds an array of annotation id
       * @throws if an annotations array is empty or an annotation is not found for the given ids.
       * @example ```ts
       * 
       * // Delete two annotations
       * JMap.Application.Annotation.deleteByIds([
       *  "d68385b01be3c241c7b6298b2788839d",
       *  "98ef8ad4476f0e6fa26be416d58d0734"
       * ])
       * ```
       */
      function deleteByIds(annotationIds: string[]): void

      /**
       * **JMap.Application.Annotation.deleteSelected**
       * 
       * Delete the selected annotations.
       * 
       * Do nothing if no selection.
       * 
       * @example ```ts
       * 
       * // Delete selected annotations
       * JMap.Application.Annotation.deleteSelected()
       * ```
       */
      function deleteSelected(): void

      /**
       * **JMap.Application.Annotation.getStyle**
       * 
       * Returns the current style in use for annotation drawing.
       * 
       * @example ```ts
       * 
       * // returns the current style in use for annotation drawing
       * JMap.Application.Annotation.getStyle()
       * ```
       */
      function getStyle(): JAppDrawStyle

      /**
       * **JMap.Application.Annotation.updateStyle**
       * 
       * Update annotation style, for the next annotations that will be drawn.
       * 
       * Merge the new options with current one.
       * 
       * @example ```ts
       * 
       * // Set the line width as 3px
       * JMap.Application.Annotation.updateStyle({
       *  lineWidth: 3
       * })
       * ```
       */
      function updateStyle(style: JAppDrawStyle): void

      /**
       * **JMap.Application.Annotation.setStyleByAnnotationIds**
       * 
       * For given ids, update annotation(s) style.
       * 
       * @example ```ts
       * 
       * const annotationIds = [
       *  "d68385b01be3c241c7b6298b2788839d",
       *  "98ef8ad4476f0e6fa26be416d58d0734"
       * ]
       * 
       * const customStyle = {
       *  lineWidth: 3
       * }
       * 
       * // Set custom style for 2 annotations
       * JMap.Application.Annotation.setStyleByAnnotationIds(annotationIds, customStyle)
       * ```
       */
      function setStyleByAnnotationIds(annotationIds: string[], style: JAppDrawStyle): void
    }

    /**
     * **JMap.Application.Panel**
     * 
     * You can manage UI panels (on the left in the screen) here.
     * 
     * A panel is always displayed, so a panel is always active and there is at least one panel.
     */
    namespace Panel {

      /**
       * **JMap.Application.Panel.getActive**
       * 
       * Returns the activated panel, displayed on the left.
       * 
       * @example ```ts
       * 
       * // returns the currently activated panel
       * JMap.Application.Panel.getActive()
       * ```
       */
      function getActive(): JAppPanel

      /**
       * **JMap.Application.Panel.getAll**
       * 
       * Returns all application panels available.
       * 
       * @example ```ts
       * 
       * // returns all available application panels
       * JMap.Application.Panel.getAll()
       * ```
       */
      function getAll(): JAppPanel[]

      /**
       * **JMap.Application.Panel.existById**
       * 
       * Return true if the panel exists for a given panel id.
       * 
       * @param panelId The panel id to test
       * @example ```ts
       * 
       * // return true if panel id="layer" exists
       * JMap.Application.Panel.existById("custom-panel")
       * ```
       */
      function existById(panelId: string): boolean

      /**
       * **JMap.Application.Panel.activateById**
       * 
       * Change the JMap Web App panel.
       * 
       * If no panelId is provided, will activate the "layer" panel by default, if the 
       * "layer" panel is disabled will activate the first available panel.
       * 
       * @throws if panel is not found
       * @param panelId The new application panel to activate
       * @example ```ts
       * 
       * // will activate and display the panel id="layer"
       * JMap.Application.Panel.activateById("layer")
       * ```
       */
      function activateById(panelId?: string): void
      
      /**
       * **JMap.Application.Panel.add**
       * 
       * Add a custom panel for a given panel definition to JMap Web App.
       * 
       * @throws if panel format is not correct
       * @param panel an object that is the definition of the new panel
       * @example ```ts
       * 
       * const customPanelId = "custom-panel"
       * // will add the new panel, here en empty panel just for the example
       * JMap.Application.Panel.add({
       *   id: customPanelId,
       *   icon: "http://url-to-my-image/custom-icon.png", // could be an image encoded as a base64 url
       *   tooltip: "My custom panel tooltip display when mouse is hover the icon",
       *   title: "Custon panel"
       * })
       * // The panel has been created but not displayed, if you want to display it :
       * JMap.Applcation.activate(customPanelId)
       * ```
       */
      function add(panel: JAppPanel): void
      
      /**
       * **JMap.Application.Panel.removeById**
       * 
       * Remove a panel for a given panel id from JMap Web App.
       * 
       * If the panel was active will activate the first panel the application found.
       * 
       * @throws if panel is not found or if this is the last panel
       * @param panelId The application panel id to remove
       * @example ```ts
       * 
       * // will remove the "custom-panel" panel
       * JMap.Application.Panel.removeById("custom-panel")
       * ```
       */
      function removeById(panelId: string): void
    }

    /**
     * **JMap.Application.Selection**
     * 
     * You can manage the application measure tools here.
     */
    namespace Measure {

      /**
       * **JMap.Application.Measure.getAll**
       * 
       * Returns all measures.
       * 
       * @example ```ts
       * 
       * // return currently drawn measures
       * JMap.Application.Measure.getAll()
       * ```
       */
      function getAll(): JAppMeasure[]

      /**
       * **JMap.Application.Measure.existsById**
       * 
       * Returns true if measure exists for the given id, else false.
       * 
       * @throws Error if measureId is not a string or an empty string
       * @example ```ts
       * 
       * // return true if measure exist, else false
       * JMap.Application.Measure.existsById("ac57b1bd83ca6d8e0013e4cf9f06847e")
       * 
       * // throw an error
       * JMap.Application.Measure.existsById("")
       *
       * // throw an error
       * JMap.Application.Measure.existsById()
       * ```
       */
      function existsById(measureId: string): boolean

      /**
       * **JMap.Application.Measure.getById**
       * 
       * Returns the measure for the given id.
       * 
       * @throws Error if measureId is not a string or an empty string, or if measure is not found
       * @example ```ts
       * 
       * // return the measure fr the given id
       * JMap.Application.Measure.getById("ac57b1bd83ca6d8e0013e4cf9f06847e")
       * 
       * // throw an error
       * JMap.Application.Measure.getById("")
       *
       * // throw an error
       * JMap.Application.Measure.getById()
       * ```
       */
      function getById(measureId: string): JAppMeasure

      /**
       * **JMap.Application.Measure.getAllLineMeasures**
       * 
       * Returns all "line" measures. Result contains no polygon or circle measures.
       * 
       * @example ```ts
       * 
       * // return all line measures
       * JMap.Application.Measure.getAllLineMeasures()
       * ```
       */
      function getAllLineMeasures(): JAppMeasure[]

      /**
       * **JMap.Application.Measure.getAllPolygonMeasures**
       * 
       * Returns all "polygon" measures. Result contains no line or circle measures.
       * 
       * @example ```ts
       * 
       * // return all polygon measures
       * JMap.Application.Measure.getAllPolygonMeasures()
       * ```
       */
      function getAllPolygonMeasures(): JAppMeasure[]

      /**
       * **JMap.Application.Measure.getAllCircleMeasures**
       * 
       * Returns all "circle" measures. Result contains no line or polygon measures.
       * 
       * @example ```ts
       * 
       * // return all circle measures
       * JMap.Application.Measure.getAllCircleMeasures()
       * ```
       */
      function getAllCircleMeasures(): JAppMeasure[]

      /**
       * **JMap.Application.Measure.setAllMeasures**
       * 
       * Reset measure with provided measures.
       * 
       * @example ```ts
       * 
       * // remove all measures
       * JMap.Application.Measure.setAllMeasures([])
       * ```
       */
      function setAllMeasures(measures: JAppMeasure[]): void

      /**
       * **JMap.Application.Measure.activateMeasureType**
       * 
       * Activate a measure type for the drawing measurement tool.
       * @param measureType The new measure type to apply
       * @example ```ts
       * 
       * // change the measure type to length
       * JMap.Application.Measure.activateMeasureType("length")
       * ```
       */
      function activateMeasureType(measureType: JAppMeasureType): void

      /**
       * **JMap.Application.Measure.getActiveMeasureType**
       * 
       * Return the current active measure type.
       * 
       * @example ```ts
       * 
       * // return active mesure type
       * JMap.Application.Measure.getActiveMeasureType([])
       * ```
       */
      function getActiveMeasureType(): JAppMeasureType

      /**
       * **JMap.Application.Measure.getSelectedIds**
       * 
       * Return the current measure selection.
       * 
       * @example ```ts
       * 
       * // return current measure selection
       * JMap.Application.Measure.getSelectedIds([])
       * ```
       */
      function getSelectedIds(): string[]

      /**
       * **JMap.Application.Measure.setSelectionActive**
       * 
       * Activate or deactivate the measurement seletion mode.
       * 
       * If active, measures can be selected by clicking on the map (then changed or removed)..
       * 
       * @param isSelectionActive true to activate selection mode, false to deactivate
       * @example ```ts
       * 
       * // activate selection of measures
       * JMap.Application.Measure.setSelectionActive(true)
       * 
       * // deactivate selection of measure
       * JMap.Application.Measure.setSelectionActive(false)
       * ```
       */
      function setSelectionActive(isSelectionActive: boolean): void

      /**
       * **JMap.Application.Measure.deleteAll**
       * 
       * Delete all measures.
       * 
       * Return deleted measure count.
       * 
       * @example ```ts
       * 
       * // delete all measures
       * const deletedMeasuresCount = JMap.Application.Measure.deleteAll()
       * ```
       */
      function deleteAll(): number

      /**
       * **JMap.Application.Measure.deleteSelected**
       * 
       * Delete all selected measures.
       * 
       * Return deleted measure count.
       * 
       * @example ```ts
       * 
       * // delete all selected measures
       * const deletedMeasuresCount = JMap.Application.Measure.deleteSelected()
       * ```
       */
      function deleteSelected(): number

      /**
       * **JMap.Application.Measure.deleteMeasuresById**
       * 
       * Delete a measure for a given id.
       * 
       * @throws if measure is not found
       * @param measureIds list of measure ids
       * @example ```ts
       * 
       * // delete measure having id="bc4fc07f2e84eb50f5962d3d41c836cb"
       * const deletedMeasuresCount = JMap.Application.Measure.deleteMeasuresById("bc4fc07f2e84eb50f5962d3d41c836cb")
       * ```
       */
      function deleteMeasuresById(measureIds: string[]): number

      /**
       * **JMap.Application.Measure.deleteAllLines**
       * 
       * Delete all measures having type === "line_string".
       * 
       * Return deleted measure count.
       * 
       * @example ```ts
       * 
       * // delete all line measures (if exist)
       * const deletedMeasuresCount = JMap.Application.Measure.deleteAllLines()
       * ```
       */
      function deleteAllLines(): number

      /**
       * **JMap.Application.Measure.deleteAllPolygons**
       * 
       * Delete all measures having type === "polygon".
       * 
       * Return deleted measure count.
       * 
       * @example ```ts
       * 
       * // delete all polygon measures (if exist)
       * const deletedMeasuresCount = JMap.Application.Measure.deleteAllPolygons()
       * ```
       */
      function deleteAllPolygons(): number

      /**
       * **JMap.Application.Measure.deleteAllCircles**
       * 
       * Delete all measures having type === "circle".
       * 
       * Return deleted measure count.
       * 
       * @example ```ts
       * 
       * // delete all circle measures (if exist)
       * const deletedMeasuresCount = JMap.Application.Measure.deleteAllCircles()
       * ```
       */
      function deleteAllCircles(): number
    }
    
    /**
     * **JMap.Application.Selection**
     * 
     * You can manage the application selection tools here.
     */
    namespace Selection {

      /**
       * **JMap.Application.Selection.getDisplayedLayerId**
       * 
       * The selection of only one layer is diplayed at the same time.
       * 
       * This function returns the id of the layer which selection is displayed.
       * 
       * @example ```ts
       * 
       * // return the layer id of the displayed selection
       * JMap.Application.Selection.getDisplayedLayerId()
       * ```
       */
      function getDisplayedLayerId(): number

      /**
       * **JMap.Application.Selection.setDisplayedLayerId**
       * 
       * Display the selection of the layer.
       * 
       * If layer selection has no selection unselect the layer selection list.
       * 
       * @throws if layer not found for the given layer id
       * @example ```ts
       * 
       * // display the layer id=2 selection
       * JMap.Application.Selection.setDisplayedLayerId(2)
       * ```
       */
      function setDisplayedLayerId(layerId: number): void

      /**
       * **JMap.Application.Selection.activateSelectionType**
       * 
       * Change the current type of selection
       * @param selectionType The new selection type to apply
       * @example ```ts
       * 
       * // change the selection type to rectangle
       * JMap.Application.Selection.activateSelectionType("rectangle")
       * ```
       */
      function activateSelectionType(selectionType: JAppSelectionType): void
      
      /**
       * **JMap.Application.Selection.getActiveSelectionType**
       * 
       * Return the current active type of selection
       * 
       * @example ```ts
       * 
       * // return the current active selection type
       * JMap.Application.Selection.getActiveSelectionType()
       * ```
       */
      function getActiveSelectionType(): JAppSelectionType

      /**
       * **JMap.Application.Selection.getTableVisibility**
       * 
       * Return true if the selection data table is diaplayed.
       * 
       * @example ```ts
       * 
       * // return true if the selection data table is visible
       * JMap.Application.Selection.getTableVisibility()
       * ```
       */
      function getTableVisibility(): boolean
      
      /**
       * **JMap.Application.Selection.getTableVisibility**
       * 
       * Hide or show the selection data table.
       * 
       * @example ```ts
       * 
       * // make selection data table visible
       * JMap.Application.Selection.setTableVisibility(true)
       *
       * // make selection data table not visible
       * JMap.Application.Selection.setTableVisibility(false)
       * ```
       */
      function setTableVisibility(tableVisibility: boolean): void
      
      /**
       * **JMap.Application.Selection.clearSelectionForLayer**
       * 
       * Unselect all features for a given layer id.
       * 
       * @param layerId the JMap layer id
       * @example ```ts
       * 
       * // clear the layer id=2 selection
       * JMap.Application.Selection.clearSelectionForLayer(2)
       * ```
       */
      function clearSelectionForLayer(layerId: number): void

      /**
       * **JMap.Application.Selection.clearSelection**
       * 
       * Clear the current selection
       * 
       * @example ```ts
       * // Clear the current selection
       * JMap.Application.Selection.clearSelection()
       * ```
       */
      function clearSelection(): void

      /**
       * **JMap.Application.Selection.selectFromFeature**
       * 
       * Select features on the map that intersect the given feature.
       * 
       * @param feature the given feature
       * @param selectionType if not provided the method use 
       * @example ```ts
       * // will select all features that intersect the provided line feature
       * JMap.Application.Selection.selectFromFeature(lineFeature)
       * ```
       */
      function selectFromFeature(feature: GeoJSON.Feature, selectionType: JAppSelectionType): void

      /**
       * **JMap.Application.Selection.exportAsExcelFile**
       * 
       * Export the current selection as an excel file.
       * 
       * If no selection, export an empty file.
       * 
       * @example ```ts
       * // download the current selection as an excel file
       * JMap.Application.Selection.exportAsExcelFile()
       * ```
       */
      function exportAsExcelFile(): void

      /**
       * **JMap.Application.Selection.fitMapToDisplayLayerSelection**
       * 
       * Pan and zoom the map to display the current selection.
       * 
       * @example ```ts
       * // fit the map to display selected features
       * JMap.Application.Selection.fitMapToDisplayLayerSelection()
       * ```
       */
      function fitMapToDisplayLayerSelection(): void
    }

    /**
     * **JMap.Application.Project**
     * 
     * You can manage all things related to JMap Core NG project and JMap App NG here.
     */
    namespace Project {

      /**
       * **JMap.Application.Project.activateById**
       * 
       * Activate the project for a given project id.
       * 
       * If you use the JMap App NG use this function over JMap.Project.activateById.
       * 
       * This function do the same as JMap.Project.activateById but also manage things for the application UI.
       * 
       * @throws if project id invalid or project not found
       * @param projectId the JMap project id
       * @returns the project
       * @example ```ts
       * 
       * // activate project id=33
       * JMap.Application.Project.activateById(33)
       * ```
       */
      function activateById(projectId: number): JProject

      /**
       * **JMap.Application.Project.setSelectionPanelVisibility**
       * 
       * Display or hide the project list selection panel.
       * 
       * @example ```ts
       * 
       * // display the project list selection panel
       * JMap.Application.Project.setSelectionPanelVisibility(true)
       * ```
       */
      function setSelectionPanelVisibility(isVisible: boolean): void
    }

    /**
     * **JMap.Application.Layer**
     * 
     * You can manage the layer panel here.
     */
    namespace Layer {

      /**
       * **JMap.Application.Layer.setFilter**
       * 
       * Filter on the name of the layer.
       * 
       * Panel layer will show only layers whose name matches the filter. The filter is case-insensitive
       * 
       * @param filter the filter to apply
       * @example ```ts
       * 
       * // In the layer panel will display only layers whose name matches "pro" (case-insensitive)
       * JMap.Application.Layer.setFilter("pro")
       * ```
       */
      function setFilter(filter: string): void

      /**
       * **JMap.Application.Layer.isFilterActive**
       * 
       * Tests if the layer filter is active.
       * 
       * Layer panel filter is active only if the filter contains a certain number of characters 
       * 
       * @example ```ts
       * 
       * // set the filter to "a"
       * JMap.Application.Layer.setFilter("a")
       * 
       * // will return false
       * const isFilterActive = JMap.Application.Layer.isFilterActive()
       * ```
       */
      function isFilterActive(): boolean

      /**
       * **JMap.Application.Layer.startThematicEdition**
       * 
       * If layer has no thematic, do nothing, just log a warning message in the console.
       * 
       * @throws If layer is not found or layerId is correspond to a layer group
       * @example ```ts
       * 
       * // Will edit the layer's id="3" thematics
       * JMap.Application.Layer.startThematicEdition(3)
       * ```
       */
      function startThematicEdition(layerId: number): void

      /**
       * **JMap.Application.Layer.stopThematicEdition**
       * 
       * If we are editing thematics of a layer, will stop edition and show the layer tree panel, 
       * Else log a warning message to tell we are not editing thematics.
       * 
       * @example ```ts
       * 
       * // will return to the layer tree panel
       * JMap.Application.Layer.stopThematicEdition()
       * ```
       */
      function stopThematicEdition(): void
    }

    /**
     * **JMap.Application.MapContext**
     * 
     * You can manage the map context panel here.
     */
    namespace MapContext {

      /**
       * **JMap.Application.MapContext.isAvailable**
       * 
       * Return false if the map context functionnality is not available for user.
       * 
       * Some users don't have access to map context, like the anonymous or system user.
       * 
       * If map context service is not avalable, user cannot access, create, update or delete context from the service.
       * 
       * @example ```ts
       * 
       * // true if user can use map contexts
       * JMap.Application.MapContext.isAvailable()
       * ```
       */
      function isAvailable(): boolean

      /**
       * **JMap.Application.MapContext.startCreation**
       * 
       * Display the new map-context tab on screen.
       * 
       * @example ```ts
       * 
       * // display the new map-context tab on screen
       * JMap.Application.MapContext.startCreation()
       * ```
       */
      function startCreation(): void

      /**
       * **JMap.Application.MapContext.cancelCreation**
       * 
       * Hide the creation tab, input are cleared, and list of map-context are displayed.
       * 
       * @example ```ts
       * 
       * // hide the new map-context tab
       * JMap.Application.MapContext.cancelCreation()
       * ```
       */
      function cancelCreation(): void

      /**
       * **JMap.Application.MapContext.getAll**
       * 
       * Returns all map contexts fetched from server, for the given project.
       * @example ```ts
       * 
       * // returns all map contexts for the current project
       * JMap.Application.MapContext.getAll()
       * ```
       */
      function getAll(): JMapContext[]

      /**
       * **JMap.Application.MapContext.getById**
       * 
       * Returns the map context for a given id.
       * 
       * @throws if map-context not found
       * @param contextId the JMap map context id
       * @example ```ts
       * 
       * // returns the map-context id=3
       * JMap.Application.MapContext.getById(3)
       * ```
       */
      function getById(contextId: number): JMapContext

      /**
       * **JMap.Application.MapContext.applyContextById**
       * 
       * Apply the map context for a given id.
       * 
       * @throws if map-context not found
       * @param contextId the JMap map context id
       * @example ```ts
       * 
       * // load the map-context id=3 on screen
       * JMap.Application.MapContext.applyContextById(3)
       * ```
       */
      function applyContextById(contextId: number): void

      /**
       * **JMap.Application.MapContext.applyContextById**
       * 
       * Delete the map context for a given id.
       * 
       * The map-context deletion is persisted server-side.
       * 
       * This is a full delete.
       * 
       * @throws if map-context not found, or server request error
       * @param contextId the JMap map context id or an array of map context ids
       * @example ```ts
       * 
       * // delete the map-context id=5
       * JMap.Application.MapContext
       *    .deleteContextById(5)
       *    .then(() => console.info("Context 5 deleted !"))
       *    .catch(error => console.error(error))
       * 
       * // delete map-contexts id in [ 3, 5, 12 ]
       * JMap.Application.MapContext
       *    .deleteContextById([ 3, 5, 12 ])
       *    .then(() => console.info("Three map contexts have been deleted !"))
       *    .catch(error => console.error(error))
       * ```
       */
      function deleteContextById(contextId: number | number[]): Promise<void>

      /**
       * **JMap.Application.MapContext.create**
       * 
       * Create a map context. The map-context creation is persisted server-side.
       * 
       * You just need to provide the context meta-data (= data that describe the context).
       * 
       * The current map context will be saved.
       * 
       * @throws if invalid map context data provided, or server request error
       * @param params the complete map context meta-data
       * @returns the created map context, with it's id
       * @example ```ts
       * 
       * // create a new map-context
       * JMap.Application.MapContext
       *    .create({
       *      title: "My city",
       *      description: "My city description",
       *      shareLink: false
       *    })
       *    .then(mapContext => console.info(`Map context id={mapContext.id} created !`))
       *    .catch(error => console.error(error))
       * ```
       */
      function create(params?: JMapContextMetaData): Promise<JMapContext>

      /**
       * **JMap.Application.MapContext.update**
       * 
       * Update a map context, save the current map context data.
       * 
       * The map-context update is persisted server-side.
       * 
       * You can provide partial meta-data (= data that describe the context),
       * if a meta-data is not provided it will not be changed.
       * 
       * @throws if context not found, or empty or invalid meta-data, or server request error
       * @param contextId the JMap map context id
       * @param params partial map context meta-data, only data provided will be updated
       * @returns the updated map context
       * @example ```ts
       * 
       * // update the map-context id=3
       * JMap.Application.MapContext
       *    .update(3, { title: "My new title" }) // only "title" meta-data will be changed, "description" and "shareLink" keep the same
       *    .then(mapContext => console.info(`Map context id=3 meta-data and map data updated.`, mapContext))
       *    .catch(error => console.error(error))
       * ```
       */
      function update(contextId: number, params?: Partial<JMapContextMetaData>): Promise<JMapContext>

      /**
       * **JMap.Application.MapContext.updateMetaData**
       * 
       * Update a map context meta-data (= data that describe the context), without changing the map data.
       * 
       * The map context map's data will not be changed, for that use [[JMap.Application.MapContext.update]] function.
       * 
       * The map-context meta-data are persisted server-side.
       * 
       * You can provide partial meta-data, if a meta-data is not provided it will not be changed.
       * 
       * @throws if context not found, or empty or invalid meta-data, or server request error
       * @param contextId the JMap map context id
       * @param params partial map context meta-data, only data provided will be updated
       * @returns the updated map context
       * @example ```ts
       * 
       * // update the map-context id=3 meta-data
       * JMap.Application.MapContext
       *    .updateMetaData(3, { // only "title" and "description" meta-data will be changed, "shareLink" keep the same
       *      title: "My new title",
       *      descritpion: "My new description"
       *    })
       *    .then(mapContext => console.info(`Map context id=3 "title" and "description" updated.`, mapContext))
       *    .catch(error => console.error(error))
       * ```
       */
      function updateMetaData(contextId: number, data: Partial<JMapContextMetaData>): Promise<void>

      /**
       * **JMap.Application.MapContext.getContextTitle**
       * 
       * Returns the map context title for a given map context id.
       * 
       * @throws if map-context not found
       * @param contextId the JMap map context id
       * @example ```ts
       * 
       * // returns the map-context id=3 title
       * JMap.Application.MapContext.getContextTitle(3)
       * ```
       */
      function getContextTitle(contextId: number): string

      /**
       * **JMap.Application.MapContext.setContextTitle**
       * 
       * Update a map context title, without changing the map data.
       * 
       * The map-context title is persisted server-side.
       * 
       * @throws if context not found, or empty title, or server request error
       * @param contextId the JMap map context id
       * @param title the new title
       * @example ```ts
       * 
       * // update the map-context id=3 title
       * JMap.Application.MapContext
       *    .setContextTitle(3, "My new title")
       *    .then(() => console.info(`Map context id=3 "title" updated`))
       *    .catch(error => console.error(error))
       * ```
       */
      function setContextTitle(contextId: number, title: string): Promise<void>

      /**
       * **JMap.Application.MapContext.getContextDescription**
       * 
       * Returns the map context description for a given map context id.
       * 
       * @throws if map-context not found
       * @param contextId the JMap map context id
       * @example ```ts
       * 
       * // returns the map-context id=3 description
       * JMap.Application.MapContext.getContextDescription(3)
       * ```
       */
      function getContextDescription(contextId: number): string

      /**
       * **JMap.Application.MapContext.setContextDescription**
       * 
       * Update a map context description, without changing the map data.
       * 
       * The map-context description is persisted server-side.
       * 
       * @throws if context not found, or empty title, or server request error
       * @param contextId the JMap map context id
       * @param description the new description
       * @example ```ts
       * 
       * // update the map-context id=3 description
       * JMap.Application.MapContext
       *    .setContextDescription(3, "My new description")
       *    .then(() => console.info(`Map context id=3 "description" updated`))
       *    .catch(error => console.error(error))
       * ```
       */
      function setContextDescription(contextId: number, description: string): Promise<void>

      /**
       * **JMap.Application.MapContext.isLinkShared**
       * 
       * Returns true if the map context is shared, for a given map context id.
       * 
       * @throws if map-context not found
       * @param contextId the JMap map context id
       * @example ```ts
       * 
       * // returns true if the map-context id=3 is shared
       * JMap.Application.MapContext.isLinkShared(3)
       * ```
       */
      function isLinkShared(contextId: number): boolean

      /**
       * **JMap.Application.MapContext.setLinkShare**
       * 
       * Update a map context link share state, without changing the map data.
       * 
       * The map-context link share state is persisted server-side.
       * 
       * @throws if context not found, or empty title, or server request error
       * @param contextId the JMap map context id
       * @param isShared true if the link is shared, else false
       * @example ```ts
       * 
       * // update the map-context id=3 link share state to true
       * JMap.Application.MapContext
       *    .setLinkShare(3, true)
       *    .then(() => console.info(`Map context id=3 is now shared`))
       *    .catch(error => console.error(error))
       * ```
       */
      function setLinkShare(contextId: number, isShared: boolean): Promise<void>

      /**
       * **JMap.Application.MapContext.getDefaultContext**
       * 
       * Returns the default map context if one has been set as default, else undefined.
       * 
       * The default map context is loaded automatically at startup.
       * 
       * @example ```ts
       * 
       * // returns the default map context if one has been set
       * JMap.Application.MapContext.getDefaultContext()
       * ```
       */
      function getDefaultContext(): JMapContext | undefined

      /**
       * **JMap.Application.MapContext.isDefaultContext**
       * 
       * Returns true if the map context is the default one, given the id.
       * 
       * The default map context is loaded automatically at startup.
       * 
       * @throws if map-context not found
       * @param contextId the JMap map context id
       * @example ```ts
       * 
       * // returns true if the map context id=3 is the default one.
       * JMap.Application.MapContext.isDefaultContext(3)
       * ```
       */
      function isDefaultContext(contextId: number): boolean

      /**
       * **JMap.Application.MapContext.setDefaultContext**
       * 
       * Set or unset default map context, the change is persited server side.
       * 
       * If a contextId is provided, set the map context as the default one.
       * 
       * If no context id is provided, unset the current default context.
       * 
       * @throws if context provided but not found, or server request error
       * @param contextId the JMap map context id
       * @example ```ts
       * 
       * // set the map-context id=3 as the default one
       * JMap.Application.MapContext
       *    .setDefaultContext(3)
       *    .then(() => console.info(`Map context id=3 is now the default one`))
       *    .catch(error => console.error(error))
       * ```
       * 
       * // make no map-context as default
       * JMap.Application.MapContext
       *    .setDefaultContext()
       *    .then(() => console.info(`No map context are default now`))
       *    .catch(error => console.error(error))
       * ```
       */
      function setDefaultContext(contextId?: number): Promise<void>

      /**
       * **JMap.Application.MapContext.sortListBy**
       * 
       * Change the map-context list sort. The change is persited in local storage.
       * 
       * "alphabetic" : list following map context title string
       * "lastUpdate" : list following map context last update
       * 
       * @throws if sortBy param is not correct
       * @param sortBy "alphabetic" or "lastUpdate"
       * @example ```ts
       * 
       * // sort the list alphabetically
       * JMap.Application.MapContext.sortListBy("alphabetic")
       * 
       * // sort the list with the last upadte date
       * JMap.Application.MapContext.sortListBy("lastUpdate")
       * ```
       */
      function sortListBy(sortBy: JMapContextSortByOption): void

      /**
       * **JMap.Application.MapContext.getListSortBy**
       * 
       * Returns the map-context list sort.
       * 
       * @example ```ts
       * 
       * // returns the list sort
       * JMap.Application.MapContext.getListSortBy()
       * ```
       */
      function getListSortBy(): JMapContextSortByOption

      /**
       * **JMap.Application.MapContext.getAllListSortBy**
       * 
       * Returns all available map context list sort : [ "alphabetic", "lastUpdate" ]
       * 
       * @example ```ts
       * 
       * // returns all available list sort
       * JMap.Application.MapContext.getAllListSortBy()
       * ```
       */
      function getAllListSortBy(): JMapContextSortByOption[]

      /**
       * **JMap.Application.MapContext.setListSortDirection**
       * 
       * Change the map-context list sort direction. The change is persited in local storage.
       * 
       * "asc" : ascendant sort
       * "desc" : descendant sort
       * 
       * @throws if sortByDirection param is not correct
       * @param sortByDirection "asc" or "desc"
       * @example ```ts
       * 
       * // make the sort ascendant
       * JMap.Application.MapContext.setListSortDirection("asc")
       * 
       * // make the sort descendant
       * JMap.Application.MapContext.setListSortDirection("desc")
       * ```
       */
      function setListSortDirection(sortByDirection: JMapContextSortByDirection): void

      /**
       * **JMap.Application.MapContext.getListSortDirection**
       * 
       * Returns the map-context list sort direction.
       * 
       * @example ```ts
       * 
       * // returns the list sort direction
       * JMap.Application.MapContext.getListSortDirection()
       * ```
       */
      function getListSortDirection(): JMapContextSortByDirection

      /**
       * **JMap.Application.MapContext.getAllListSortDirection**
       * 
       * Returns all available map context list sort directions : [ "asc", "desc" ]
       * 
       * @example ```ts
       * 
       * // returns all available list sort directions
       * JMap.Application.MapContext.getAllListSortDirection()
       * ```
       */
      function getAllListSortDirection(): JMapContextSortByDirection[]

      /**
       * **JMap.Application.MapContext.filterList**
       * 
       * Filter the map context list.
       * 
       * The filter is done on "title" and/or "description".
       * 
       * @param filter a string
       * @example ```ts
       * 
       * // only map context having "ab" in title and/or description will be displayed
       * JMap.Application.MapContext.filterList("ab")
       * ```
       */
      function filterList(filter: string): void

      /**
       * **JMap.Application.MapContext.getListFilter**
       * 
       * Returns the current applied filter on the map context list, or an empty string if no filter applied.
       * 
       * @example ```ts
       * 
       * // return the current filter
       * JMap.Application.MapContext.getListFilter()
       * ```
       */
      function getListFilter(): string

      /**
       * **JMap.Application.MapContext.getListFilter**
       * 
       * If a filter is applied on the map context list, this function clears it.
       * 
       * @example ```ts
       * 
       * // clear the current filter if exists
       * JMap.Application.MapContext.getListFilter()
       * ```
       */
      function clearListFilter(): void
    }

    /**
     * **JMap.Application.UI**
     * 
     * You can manage the application UI components here.
     */
    namespace UI {
      
      /**
       * **JMap.Application.UI.Container**
       * 
       * You can access the info of the application dom container div.
       */
      namespace Container {

        /**
         * **JMap.Application.UI.Container.getId**
         * 
         * Returns the DOM div element id where application UI has been inserted.
         * 
         * @example ```ts
         * 
         * // returns the dom container id, ex : "jmap-app"
         * JMap.Application.UI.Container.getId()
         * ```
         */
        function getId(): string

        /**
         * **JMap.Application.UI.Container.getWidth**
         * 
         * Returns the dom container width in pixel.
         * 
         * @example ```ts
         * 
         * // returns the dom container width, ex : 1230
         * JMap.Application.UI.Container.getWidth()
         * ```
         */
        function getWidth(): number

        /**
         * **JMap.Application.UI.Container.getHeight**
         * 
         * Returns the dom container height in pixel.
         * 
         * @example ```ts
         * 
         * // returns the dom container height, ex : 966
         * JMap.Application.UI.Container.getHeight()
         * ```
         */
        function getHeight(): number
      }

      /**
       * **JMap.Application.UI.SidePanel**
       * 
       * You can manage the application left side panel from here.
       */
      namespace SidePanel {
  
        /**
         * **JMap.Application.UI.Sidepanel.setVisible**
         * 
         * Set the application left side panel visibility.
         * 
         * @param isVisible if true show the panel, else hide it
         * @example ```ts
         * 
         * // Show the left side panel
         * JMap.Application.UI.Sidepanel.setVisible(true)
         * 
         * // Hide the left side panel
         * JMap.Application.UI.Sidepanel.setVisible(false)
         * ```
         */
        function setVisible(isVisible: boolean): void
  
        /**
         * **JMap.Application.UI.SidePanel.isVisible**
         * 
         * Returns true if the JMap Web App main panel on the left is opened.
         * 
         * @example ```ts
         * 
         * // returns true if side panel is opened
         * JMap.Application.UI.SidePanel.isVisible()
         * ```
         */
        function isVisible(): boolean
  
        /**
         * **JMap.Application.UI.SidePanel.toggleVisibility**
         * 
         * Change the JMap Web App main panel on the left visibility.
         * 
         * If the panel is open, it will close.
         * 
         * If the panel is closed, it will open.
         * 
         * @example ```ts
         * 
         * // change the side panel visibility
         * JMap.Application.UI.SidePanel.toggleVisibility()
         * ```
         */
        function toggleVisibility(): void

        /**
         * **JMap.Application.UI.SidePanel.getWidthOpenInRem**
         * 
         * Returns the width of the opened side panel in rem.
         * 
         * @example ```ts
         * 
         * // returns "28.125rem"
         * JMap.Application.UI.SidePanel.getWidthOpenInRem()
         * ```
         */
        function getWidthOpenInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getWidthOpenInPixel**
         * 
         * Returns the width of the opened side panel in pixel.
         * 
         * @example ```ts
         * 
         * // returns 450
         * JMap.Application.UI.SidePanel.getWidthOpenInPixel()
         * ```
         */
        function getWidthOpenInPixel(): number

        /**
         * **JMap.Application.UI.SidePanel.getWidthCloseInRem**
         * 
         * Returns the width of the closed side panel in rem.
         * 
         * @example ```ts
         * 
         * // returns "3.75rem"
         * JMap.Application.UI.SidePanel.getWidthCloseInRem()
         * ```
         */
        function getWidthCloseInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getWidthCloseInPixel**
         * 
         * Returns the width of the closed side panel in pixel.
         * 
         * @example ```ts
         * 
         * // returns 60
         * JMap.Application.UI.SidePanel.getWidthCloseInPixel()
         * ```
         */
        function getWidthCloseInPixel(): number

        /**
         * **JMap.Application.UI.SidePanel.getMainPanelWidthInRem**
         * 
         * Returns the width of the main panel (side panel width minus menu width) in rem.
         * 
         * @example ```ts
         * 
         * // returns "24.375rem"
         * JMap.Application.UI.SidePanel.getMainPanelWidthInRem()
         * ```
         */
        function getMainPanelWidthInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getMainPanelWidthInPixel**
         * 
         * Returns the width of the main panel (side panel width minus menu width) in pixel.
         * 
         * @example ```ts
         * 
         * // returns 390
         * JMap.Application.UI.SidePanel.getMainPanelWidthInPixel()
         * ```
         */
        function getMainPanelWidthInPixel(): number

        /**
         * **JMap.Application.UI.SidePanel.getHeaderMinHeightInRem**
         * 
         * Returns the min height of the header (where title is included) in rem.
         * 
         * @example ```ts
         * 
         * // returns "5rem"
         * JMap.Application.UI.SidePanel.getHeaderMinHeightInRem()
         * ```
         */
        function getHeaderMinHeightInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getHeaderMinHeightInPixel**
         * 
         * Returns the min height of the header (where title is included) in rem.
         * 
         * @example ```ts
         * 
         * // returns 80
         * JMap.Application.UI.SidePanel.getHeaderMinHeightInPixel()
         * ```
         */
        function getHeaderMinHeightInPixel(): number
      }

      /**
       * **JMap.Application.UI.Theme**
       * 
       * You can manage the UI theme here.
       */
      namespace Theme {
  
        /**
         * **JMap.Application.UI.Theme.isDark**
         * 
         * Returns true if the theme is currently dark.
         * 
         * @example ```ts
         * 
         * // true or false
         * JMap.Application.UI.Theme.isDark()
         * ```
         */
        function isDark(): boolean
  
        /**
         * **JMap.Application.UI.Theme.setDark**
         * 
         * Change the UI color theme in dark or light.
         * 
         * @param isDark if true make the theme dark, else light
         * @example ```ts
         * 
         * // make the theme dark
         * JMap.Application.UI.Theme.setDark()
         * 
         * // make the theme dark
         * JMap.Application.UI.Theme.setDark(true)
         * 
         * // make the theme light
         * JMap.Application.UI.Theme.setDark(false)
         * ```
         */
        function setDark(isDark: boolean): void
      }
    }

    namespace Print {
      function refreshScaleForCurrentZoom(): void
      function setScaleControlVisibility(isVisible: boolean): void
      function isScaleControlVisible(): boolean
      function setPageTitle(title: string): void
      function getPageTitle(type?: string): string
      function setPageSubTitle(subTitle: string): void
      function getPageSubTitle(): string
      function setDateVisibility(isVisible: boolean): void
      function isDateVisibile(): boolean
      function setNorthArrowVisibility(isVisible: boolean): void
      function isNorthArrowVisible(): boolean
      function getAllPaperFormats(): JAppPaperFormat[]
      function setPaperFormat(format: JAppPaperFormat | string): void
      function getPaperFormat(): JAppPaperFormat
      function setOrientation(isPortrait: boolean): void
      function isOrientationPortrait(): boolean
      function setFileType(fileType: JAppPrintFileType): void
      function getFileType(): JAppPrintFileType
      function getScale(): number
      function setZoomFromScale(scale: number): void
      function takeCapture(): void
    }

    namespace Query {
      function activateQuery(groupId: number, queryId: string): void
      function deactivateQuery(): void
      function setDefaultData(values: any): void
      function getDefaultData(): { [ id: string ]: any }
      function clearDefaultData(): void
      function displayInDialog(isVisibleInDialog: boolean): void
      function processQuery(values: any): Promise<void>
    }

    namespace Event {
      namespace Main {
        namespace on {
          /**
           * ***JMap.Application.Event.Main.on.appReady***
           * 
           * This event is triggered once: 
           * * all of the application services are loaded, 
           * * the redux store and its reducers are also loaded
           * * The initial session validation has been run. At thas point if the session has successfully been validated, the logged-in user will also be available
           * 
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example ```ts
           * 
           * // log a message in the console once the application is loaded
           * JMap.Application.Event.Main.on.appReady(
           *   "custom-app-ready", 
           *   () => {
           *     if (JMap.User.getToken() !== "-1") {
           *       console.log(`Logged in username is: "${JMap.User.getUsername()}"`)
           *     } else {
           *       console.log(`No user logged in`)
           *     }
           *   }
           * )
           * ```
           */
          function appReady(listenerId: string, fn: () => void): void
        }
      }
    }

    namespace User {

      /**
       * **JMap.Application.User.addPopupMenuAction**
       * 
       * Add an action to the JMap User menu (visible in the project selection panel).
       * 
       * An action must set the "href" OR the "onCLick" parameters, but not both.
       * 
       * **Displaying the action's label in the UI**
       * The action's label will be translated by JMap NG translation engine if a JTranslationItem is passed, 
       * otherwise the simple string will be used.
       * (see See [[JMap.Language.translate]] and [[JMap.Language.addBundle]] for more details on translations)
       * 
       * @param action : the action to add
       * @param index : will insert at a specific index in the menu. Start at 0. If index is not correct insert at the end
       * @example ```ts
       * 
       * JMap.Application.User.addPopupMenuAction({
       *   id: "my-unique-id",
       *   icon: "fas fa-info-circle",
       *   label: {  key: "my.custom.menu.item.translation.key", bundleId: "myTranslationBundleId"}, // label can also be a simple string
       *   isHelp: true, // if true will be displayed in the JMap help menu
       *   onClick: () => window.open("https://link-to-my-documentation", "_blanck")
       * }, 2)
       * ```
       */
      function addPopupMenuAction(action: JAppUserAction, index?: number): void

      /**
       * ***JMap.Application.User.existsPopupMenuActionById***
       * 
       * Returns true if an action menu exists for the given id, else false.
       * 
       * @param actionId the action menu id
       * @throws if actionId is not a string (non empty)
       * @example ```ts
       * 
       * // returns true if the action menu id="my-custom-action-menu" exists, else false
       * JMap.Application.User.existsPopupMenuActionById("my-custom-action-menu")
       * ```
       */
      function existsPopupMenuActionById(actionId: string): boolean

      /**
       * ***JMap.Application.User.removePopupMenuActionById***
       * 
       * Remove an existing action menu
       * 
       * @param actionId the action menu id
       * @throws if actionId is not valid, or not found
       * @example ```ts
       * 
       * // remove the action menu id="my-custom-action-menu"
       * JMap.Application.User.removePopupMenuActionById("my-custom-action-menu")
       * ```
       */
      function removePopupMenuActionById(actionId: string): void
    }

    namespace Extension {
      function register(extension: JAppExtension): void
      function isRegistered(extensionId: string): boolean
      function getAllRegisteredIds(): string[]
    }

    /**
     * **JMap.Application.Message**
     * 
     * You can manage the application Messages here.
     */
    namespace Message {

      /**
       * ***JMap.Application.Message.error***
       * 
       * Adds an error message in the application's messages stack for the current session
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "This operation is not allowed"
       * JMap.Application.Message.error(message, { duration: 5000 })
       * ```
       */
      function error(message: string, options?: JAppMessageOptions): void

      /**
       * ***JMap.Application.Message.warning***
       * 
       * Adds an warning message in the application's messages stack for the current session
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "This operation has no effect"
       * JMap.Application.Message.warning(message, { duration: 5000 })
       * ```
       */
      function warning(message: string, options?: JAppMessageOptions): void
      
      /**
       * ***JMap.Application.Message.info***
       * 
       * Adds an info message in the application's messages stack for the current session
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "You are here"
       * JMap.Application.Message.info(message, { duration: 5000 })
       * ```
       */
      function info(message: string, options?: JAppMessageOptions): void
      
      /**
       * ***JMap.Application.Message.success***
       * 
       * Adds an success message in the application's messages stack for the current session
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "The operation was successful"
       * JMap.Application.Message.success(message, { duration: 5000 })
       * ```
       */
      function success(message: string, options?: JAppMessageOptions): void
      
      /**
       * ***JMap.Application.Message.confirmMessage***
       * 
       * Prompt a dialog confirm message on the screen.
       * 
       * The onSuccess callback is called when the user clicked "confirm" button.
       *
       * If it's an input confirm message, the onSuccess will get the input, else an empty string.
       * 
       * The optional onCancel callback is called when the cancel button is clicked.
       * 
       * @param params message parameters
       * @example ```ts
       * 
       * JMap.Application.Message.confirmMessage({
       *   message: "Are you sure to do a given action ?",
       *   onSuccess: () => console.log(`The user is sure`),
       *   onCancel: () => console.info("The user is not sure")
       * })
       * 
       * JMap.Application.Message.confirmMessage({
       *   message: "City name :",
       *   isInputMessage: true,
       *   onSuccess: cityName => console.log(`City name input = ${cityName}`),
       *   onCancel: () => console.info("Input has been canceled")
       * })
       * ```
       */
      function confirmMessage(params: JAppConfirmMessage): void

      /**
       * ***JMap.Application.Message.display***
       * 
       * Adds an generic message in the application's messages stack for the current session
       * severity level should be passed (will default to "info")
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "The operation has failed"
       * const level = "error"
       * JMap.Application.Message.display(message, { duration: 5000 , severity: level})
       * ```
       */
      function display(message: string, options?: JAppMessageOptions): void
    }
  }
}
