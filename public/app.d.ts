declare namespace JMap {

  /**
   * **JMap.Application**
   * 
   * This is the JMap NG App API documentation.
   * 
   * JMap NG App depends on the JMap NG Core library ([[JMap]]).
   * 
   * Examples are availables <a href="https://doc.k2geospatial.com/jmap/doc/ng_dev/examples.html" target="_blank">here</a>.
   * 
   * You can customize JMap NG App by providing startup options ([[JApplicationOptions]]).
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
     * Open JMap NG App online JS API documentation, in a new tab.
     * 
     * @example ```ts
     * 
     * // open JMap NG App online documentation, in a new tab
     * JMap.Application.openDocumentation()
     * ```
     */
    function openDocumentation(): void

    /**
    * **JMap.Application.openUserManual**
    * 
    * Open the JMap NG App online user manual, in a new tab.
    * 
    * @example ```ts
    * 
    * // Open the JMap NG App online user manual, in a new tab
    * JMap.Application.openUserManual()
    * ```
    */
    function openUserManual(): void
    
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
       * Change the JMap NG App panel.
       * 
       * If no panelId is provided, will activate the "layer" panel by default, if the 
       * "layer" panel is disabled will activate the first available panel.
       * 
       * @throws if panel is not found
       * @param panelId The new application panel to activate
       * @param params optionnal parameters
       * @example ```ts
       * 
       * // will activate and display the panel id="layer"
       * JMap.Application.Panel.activateById("layer")
       * ```
       */
      function activateById(panelId?: string, params?: JAppPanelActivationParams): void
      
      /**
       * **JMap.Application.Panel.deactivateCurrent**
       * 
       * Deactivate the current panel panel, except if the current panel is the layer panel, or there is only one panel available.
       * 
       * @param params optionnal parameters
       * @example ```ts
       * 
       * // will activate the current panel
       * JMap.Application.Panel.deactivateCurrent()
       * ```
       */
      function deactivateCurrent(params?: JAppPanelDeactivationParams): void

      /**
       * **JMap.Application.Panel.add**
       * 
       * Add a custom panel for a given panel definition to JMap NG App.
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
       * Remove a panel for a given panel id from JMap NG App.
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
     * **JMap.Application.Feature**
     * 
     * You can manage everything related to app features here.
     */
    namespace Feature {

      /**
       * **JMap.Application.Feature.openEditMenuById**
       * 
       * Open the feature edit menu for single edition.
       * 
       * @param layerId the JMap layer id
       * @param featureId the feature id
       * @example ```ts
       * 
       * // open edit menu (single edition) for layer id=5, and feature id=234
       * JMap.Application.Feature.openEditMenuById(5, 234)
       * ```
       */
      function openEditMenuById(layerId: JId, featureId: JId): Promise<GeoJSON.Feature>

      /**
       * **JMap.Application.Feature.openEditMenuByIds**
       * 
       * Open the feature edit menu for multiple edition.
       * 
       * @param layerId the JMap layer id
       * @param featureIds an array of features ids
       * @example ```ts
       * 
       * // open edit menu (multiple edition) for layer id=5, and features id=234, 452 and 176
       * JMap.Application.Feature.openEditMenuByIds(5, [234, 452, 176])
       * ```
       */
      function openEditMenuByIds(layerId: JId, featureIds: JId[]): Promise<GeoJSON.Feature[]>

      /**
       * **JMap.Application.Feature.closeEditMenu**
       * 
       * Close the feature edit menu if visible.
       * 
       * If not visible do nothing.
       * 
       * @param layerId the JMap layer id
       * @param featureIds an array of features ids
       * @example ```ts
       * 
       * // close the edit menu if visible
       * JMap.Application.Feature.closeEditMenu()
       * ```
       */
      function closeEditMenu(): void

      /**
       * **JMap.Application.Feature.deleteByIds**
       * 
       * Delete features (on the server), refresh the layer on the map and display a success or error message when done.
       * 
       * @param layerId the JMap layer id
       * @param featureIds an array of features ids
       * @example ```ts
       * 
       * // delete 2 features on layer id=4
       * JMap.Application.Feature.deleteByIds(4, [23, 76]).then(result => console.log("Delete result", result))
       * ```
       */
      function deleteByIds(layerId: JId, featureIds: JId[]): Promise<JFeatureDeleteByIdsResult>
    }

    /**
     * **JMap.Application.Geometry**
     * 
     * You can manage everything related to app geometry creation or update here.
     */
    namespace Geometry {

      /**
       * **JMap.Application.Geometry.openPanelForCreation**
       * 
       * Open the geometry panel in order to create a new feature.
       * 
       * @throws if no layer is editable
       * @example ```ts
       * 
       * // will open the geometry panel
       * JMap.Application.Geometry.openPanelForCreation()
       * ```
       */
      function openPanelForCreation(): void

      /**
       * **JMap.Application.Geometry.openPanelForUpdate**
       * 
       * Open the geometry panel in order to update a feature geometry.
       * 
       * @throws if the given layer or feature are not editable
       * @param JAppGeometryUpdateParams function parameters
       * @example ```ts
       * 
       * // will open the geometry panel in order to update the feature geometry
       * JMap.Application.Geometry.openPanelForUpdate()
       * ```
       */
      function openPanelForUpdate(params: JAppGeometryUpdateParams): void

      /**
       * **JMap.Application.Geometry.selectLayer**
       * 
       * Select the layer that will be used to create the geometry then the feature.
       * 
       * @throws if layer not found
       * @param layerId The JMap layer id
       * @example ```ts
       * 
       * // will select the layer id=3
       * JMap.Application.Geometry.selectLayer(3)
       * ```
       */
      function selectLayer(layerId: JId): void

      /**
       * **JMap.Application.Geometry.startCreationDrawing**
       * 
       * Enable drawing the geometry on the map.
       * 
       * @throws if no layer is selected
       * @example ```ts
       * 
       * // enable drawing the geometry on the map
       * JMap.Application.Geometry.startCreationDrawing()
       * ```
       */
      function startCreationDrawing(): void

      /**
       * **JMap.Application.Geometry.stopCreationDrawing**
       * 
       * Stop the geometry creation, when drawing on the map, and display the layer selection panel.
       * 
       * @example ```ts
       * 
       * // stop drawing the geometry on the map
       * JMap.Application.Geometry.stopCreationDrawing()
       * ```
       */
      function stopCreationDrawing(): void

      /**
       * **JMap.Application.Geometry.finishCreate**
       * 
       * Finish geometry creation.
       *  
       * @throws if panel is not in creation mode, or if geometry has not yet been created.
       * @example ```ts
       * 
       * // finish creating or updating the geometry
       * JMap.Application.Geometry.finishCreate()
       * ```
       */
      function finishCreate(): void

      /**
       * **JMap.Application.Geometry.finishUpdate**
       * 
       * Finish geometry update.
       * 
       * @throws if panel is not in update mode
       * @example ```ts
       * 
       * // finish updating the geometry
       * JMap.Application.Geometry.finishUpdate()
       * ```
       */
      function finishUpdate(): Promise<void>

      /**
       * **JMap.Application.Geometry.closePanel**
       * 
       * Close the geometry creation or update panel without confirmation message.
       * 
       * @example ```ts
       * 
       * // close the geometry panel
       * JMap.Application.Geometry.closePanel()
       * ```
       */
      function closePanel(): void
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
     * You can manage all things related to JMap NG Core project and JMap NG App here.
     */
    namespace Project {

      /**
       * **JMap.Application.Project.activateById**
       * 
       * Activate the project for a given project id.
       * 
       * If you use the JMap NG App use this function over JMap.Project.activateById.
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
         * Returns true if the JMap NG App main panel on the left is opened.
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
         * Change the JMap NG App main panel on the left visibility.
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

    /**
     * **JMap.Application.Print**
     * 
     * You can manage everything related to print here.
     */
    namespace Print {

      /**
       * **JMap.Application.Print.refreshScaleForCurrentZoom**
       *
       * Refresh the scale depending on the current zoom.
       * 
       * This is a technical function, you shouldn't use it.
       * 
       * @deprecated 
       * @example ```ts
       * 
       * // refresh the scale
       * JMap.Application.Print.refreshScaleForCurrentZoom()
       * ```
       */
      function refreshScaleForCurrentZoom(): void

      /**
       * **JMap.Application.Print.setScaleControlVisibility**
       *
       * Display or hide the scale control widget.
       * 
       * @param isVisible true to display, false to hide
       * @example ```ts
       * 
       * // Display the scale
       * JMap.Application.Print.setScaleControlVisibility(true)
       * 
       * // Hide the scale
       * JMap.Application.Print.setScaleControlVisibility(false)
       * ```
       */
      function setScaleControlVisibility(isVisible: boolean): void
      
      /**
       * **JMap.Application.Print.isScaleControlVisible**
       *
       * Return true if the scale control widget is visible, else false.
       * 
       * @example ```ts
       * 
       * // true if the scale controle widget is displayed
       * JMap.Application.Print.isScaleControlVisible()
       * ```
       */
      function isScaleControlVisible(): boolean

      /**
       * **JMap.Application.Print.setPageTitle**
       *
       * Set the title displayed in the bottom of the print layout.
       * 
       * If empty string will display no title.
       * 
       * @throws if title is not a string
       * @param title The title displayed in the bottom of the print layout
       * @example ```ts
       * 
       * // set title
       * JMap.Application.Print.setPageTitle("My custom title")
       * ```
       */
      function setPageTitle(title: string): void
      
      /**
       * **JMap.Application.Print.getPageTitle**
       *
       * Returns the title displayed in the bottom of the print layout.
       * 
       * @example ```ts
       * 
       * // returns the displayed title
       * JMap.Application.Print.getPageTitle()
       * ```
       */
      function getPageTitle(): string

      /**
       * **JMap.Application.Print.setPageSubTitle**
       *
       * Set the subtitle displayed in the bottom of the print layout.
       * 
       * @throws if subTitle is not a string
       * @param subTitle The subtitle displayed in the bottom of the print layout
       * @example ```ts
       * 
       * // set subtitle
       * JMap.Application.Print.setPageSubTitle("My custom subtitle")
       * ```
       */
      function setPageSubTitle(subTitle: string): void
      
      /**
       * **JMap.Application.Print.getPageSubTitle**
       *
       * Returns the subtitle displayed in the bottom of the print layout.
       * 
       * @example ```ts
       * 
       * // returns the displayed subtitle
       * JMap.Application.Print.getPageSubTitle()
       * ```
       */
      function getPageSubTitle(): string

      /**
       * **JMap.Application.Print.isDateVisibile**
       *
       * Returns true if the date is displayed in the bottom of the print layout.
       * 
       * @example ```ts
       * 
       * // returns true if the date is visible
       * JMap.Application.Print.isDateVisibile()
       * ```
       */
      function isDateVisibile(): boolean

      /**
       * **JMap.Application.Print.setDateVisibility**
       *
       * Set the date visible or hidden in the bottom of the print layout.
       * 
       * @param isVisible true to display, false to hide
       * @example ```ts
       * 
       * // Hide the date
       * JMap.Application.Print.setDateVisibility(false)
       * 
       * // Show the date
       * JMap.Application.Print.setDateVisibility(true)
       * ```
       */
      function setDateVisibility(isVisible: boolean): void

      /**
       * **JMap.Application.Print.isNorthArrowVisible**
       *
       * Returns true if the north arrow is displayed in the bottom of the print layout.
       * 
       * @example ```ts
       * 
       * // returns true if the north arrow is visible
       * JMap.Application.Print.isNorthArrowVisible()
       * ```
       */
      function isNorthArrowVisible(): boolean

      /**
       * **JMap.Application.Print.setNorthArrowVisibility**
       *
       * Set the north arrow visible or hidden in the bottom of the print layout.
       * 
       * @param isVisible true to display, false to hide
       * @example ```ts
       * 
       * // Hide the north arrow
       * JMap.Application.Print.setNorthArrowVisibility(false)
       * 
       * // Show the north arrow
       * JMap.Application.Print.setNorthArrowVisibility(true)
       * ```
       */
      function setNorthArrowVisibility(isVisible: boolean): void

      /**
       * **JMap.Application.Print.getAllPaperFormats**
       *
       * Returns all available paper format.
       * 
       * Different sizes are available: "letter" | "legal" | "a3" | "a4".
       * 
       * @deprecated will be removed in the futur
       * @example ```ts
       * 
       * // returns all available paper formats
       * JMap.Application.Print.getAllPaperFormats()
       * ```
       */
      function getAllPaperFormats(): JAppPaperFormat[]

      /**
       * **JMap.Application.Print.setPaperFormat**
       *
       * Set the paper format of the print layout.
       * 
       * Technical method, you should not use it.
       * 
       * @deprecated will be removed in the futur
       * @throws if format is incorrect
       * @param the paper format object or a [[JAppPaperSize]]
       * @example ```ts
       * 
       * // set the letter paper format
       * JMap.Application.Print.setPaperFormat("letter")
       * ```
       */
      function setPaperFormat(format: JAppPaperFormat | string): void

      /**
       * **JMap.Application.Print.getPaperFormat**
       *
       * Returns the active paper format.
       * 
       * @deprecated will be removed in the futur
       * @example ```ts
       * 
       * // returns active paper format
       * JMap.Application.Print.getPaperFormat()
       * ```
       */
      function getPaperFormat(): JAppPaperFormat

      /**
       * **JMap.Application.Print.isOrientationPortrait**
       *
       * Returns true if the print layout is portrait, else false (landscape).
       * 
       * @example ```ts
       * 
       * // returns true if the print layout is portrait, else false (landscape)
       * JMap.Application.Print.isOrientationPortrait()
       * ```
       */
      function isOrientationPortrait(): boolean

      /**
       * **JMap.Application.Print.setOrientation**
       *
       * Set the print layout orientation as portrait or landscape.
       * 
       * @throws if isPortrait is not a boolean
       * @param isPortrait true to display as portrait, false as landscape
       * @example ```ts
       * 
       * // set the layout as portrait
       * JMap.Application.Print.setOrientation(true)
       *
       * // set the layout as landscape
       * JMap.Application.Print.setOrientation(false)
       * ```
       */
      function setOrientation(isPortrait: boolean): void

      /**
       * **JMap.Application.Print.getFileType**
       *
       * Returns the current type of the file, that is used when downloading the print.
       * 
       * One of the following: "png" | "jpeg" | "pdf"
       * 
       * @example ```ts
       * 
       * // returns "png", "jpeg", or "pdf"
       * JMap.Application.Print.getFileType()
       * ```
       */
      function getFileType(): JAppPrintFileType

      /**
       * **JMap.Application.Print.setFileType**
       *
       * Set the type of file used when downloading the print.
       * 
       * @throws if fileType is not correct
       * @param fileType "png", "jpeg", or "pdf" 
       * @example ```ts
       * 
       * // set the layout as portrait
       * JMap.Application.Print.setFileType("pdf")
       * ```
       */
      function setFileType(fileType: JAppPrintFileType): void

      /**
       * **JMap.Application.Print.getScale**
       *
       * Returns the current scale on the map.
       * 
       * @example ```ts
       * 
       * // returns the current scale on the map
       * JMap.Application.Print.getScale()
       * ```
       */
      function getScale(): number

      /**
       * **JMap.Application.Print.setZoomFromScale**
       *
       * Set the zoom from a given map scale.
       * 
       * @param scale the map scale
       * @example ```ts
       * 
       * // set the zoom from a given scale
       * JMap.Application.Print.setZoomFromScale(1255)
       * ```
       */
      function setZoomFromScale(scale: number): void

      /**
       * **JMap.Application.Print.takeCapture**
       *
       * Build print image and launch downwnload of the file
       * 
       * @example ```ts
       * 
       * // build print image and launch downwnload of the file
       * JMap.Application.Print.takeCapture()
       * ```
       */
      function takeCapture(): void
    }

    /**
     * **JMap.Application.Query**
     * 
     * You can manage everything related to query here.
     */
    namespace Query {

      /**
       * **JMap.Application.Query.activateQuery**
       *
       * Activate a query by id and group id.
       * 
       * It display the query form instead of the list of query in the query panel.
       * 
       * @param groupId the query group id
       * @param queryId the query id
       * @example ```ts
       * 
       * // activate query id=43 on group id=23
       * JMap.Application.Print.activateQuery(23, 43)
       * ```
       */
      function activateQuery(groupId: number, queryId: string): void
      
      /**
       * **JMap.Application.Query.deactivateQuery**
       *
       * Deactivate the current query. If no query active do nothing.
       * 
       * If a query form is active (= its form is displayed), hide it and returns to the query list.
       * 
       * @example ```ts
       * 
       * // if a query form is displayed, hide it and returns to the query list.
       * JMap.Application.Print.deactivateQuery()
       * ```
       */
      function deactivateQuery(): void
      
      /**
       * **JMap.Application.Query.getDefaultData**
       *
       * Returns the current query form data.
       * 
       * If there is no active form, warn in the console and return an empty object {}.
       * 
       * @example ```ts
       * 
       * // returns the current query form data
       * JMap.Application.Print.getDefaultData()
       * ```
       */
      function getDefaultData(): { [ id: string ]: any }

      /**
       * **JMap.Application.Query.setDefaultData**
       *
       * Set active query form data. If there is no active form, this function throws.
       * 
       * @throws if no query is active
       * @param values the form data, depends on the form
       * @example ```ts
       * 
       * // set the current query form data
       * JMap.Application.Print.setDefaultData({
       *  $param1: "black",
       *  $param2: "white"
       * })
       * ```
       */
      function setDefaultData(values: any): void

      /**
       * **JMap.Application.Query.clearDefaultData**
       *
       * Reset the current query form data.
       * 
       * If there is no active form, do nothing.
       * 
       * @example ```ts
       * 
       * // clear the current query form data
       * JMap.Application.Print.clearDefaultData()
       * ```
       */
      function clearDefaultData(): void

      /**
       * **JMap.Application.Query.displayInDialog**
       *
       * By default the query form is displayed in the left panel with a simple layout, one field per line.
       * 
       * But it is possible to display it in a modal window, with the layout defined in the administration.
       * 
       * @throws if isVisibleInDialog is not a boolean
       * @param isVisibleInDialog true in modal window, false in left panel
       * @example ```ts
       * 
       * // display the current form in a modal window
       * JMap.Application.Print.displayInDialog(true)
       * 
       * // display the current form in the left panel
       * JMap.Application.Print.displayInDialog(false)
       * ```
       */
      function displayInDialog(isVisibleInDialog: boolean): void

      /**
       * **JMap.Application.Query.processQuery**
       *
       * Process active query form with the given values.  
       * 
       * Throws if no query is active.
       * 
       * Resolve only if some features are found.
       * 
       * If features are found, we make the layer selectable and visible if needed, then select and zoom on found features.
       * 
       * If no feature is found, the Promise rejects with a human readable error in the current user's locale.
       * 
       * @throws if no query is active
       * @param value the form data, depends on the form
       * @example ```ts
       * 
       * // display the current form in a modal window
       * JMap.Application.Print
       *   .processQuery({
       *    $param1: "black",
       *    $param2: "white"
       *   })
       *   .then(features => console.info(`Found ${features.length} feature(s)`, features))
       *   .catch(error => {
       *     // pass here if no features are found, or other error
       *     // thrown error is a readable error using the user locale
       *     console.error(error)
       *   })
       * ```
       */
      function processQuery(values: any): Promise<GeoJSON.Feature[]>
    }

    /**
     * **JMap.Application.Event**
     * 
     * From this section you can manage your own event listeners reacting to JMap NG App library events.
     * 
     * For all your listener you need provide a listener id. We introduced this notion of listener ids in order
     * to be able to know what's the problem if something goes wrong in a listener.
     * 
     * Like that we are able to identify more easily the problem in the javascript console.
     * 
     * Listener ids have to be unique for the namespace, regardless to the type of event you register your listener to.
     * 
     * By example, for all Map COntext events, you can register only one listener named "***my-custom-listener***"".
     * 
     * A good practice could be prefixing all your listener ids. For example if you work for the city of Montreal
     * they could all start with "***montreal-city-***"".
     * 
     * Listeners can be deactivated and reactivated.
     * 
     * Deactivating a listener keep it in the JMap NG App library, but ignore it when an event is emitted.
     */
    namespace Event {

      /**
       * ***JMap.Application.Event.Main***
       * 
       * Here you can manage all JMap NG App high level event listeners.
       * 
       * Click to see all events available: ***[[JMap.Application.Event.Main.on]]***. 
       */
      namespace Main {

        /**
         * ***JMap.Application.Event.Main.on***
         * 
         * Here you have all JMap NG App high level available events on which you can attach a listener.
         */
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

        /**
         * ***JMap.Application.Event.Main.activate***
         * 
         * Activate the listener.
         * 
         * If the listener is already active, do nothing.
         * 
         * If the listener is inactive, it will be reactivated and will be called again ...
         * 
         * @param listenerId The listener id
         * @example ```ts
         * 
         * // activate the listener "my-main-listener"
         * JMap.Application.Event.Main.activate("my-main-listener")
         * ```
         */
        function activate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Main.deactivate***
         * 
         * Deactivate the listener.
         * 
         * If the listener id doesn't exists or if the listener is already inactive, do nothing.
         * 
         * If the listener is active, it will be deactivated and will be ignored ...
         * 
         * @param listenerId The listener id
         * @example ```ts
         * 
         * // deactivate the listener "my-main-listener"
         * JMap.Application.Event.Main.deactivate("my-main-listener")
         * ```
         */
        function deactivate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Main.remove***
         * 
         * Remove the listener.
         * 
         * If the listener doesn't exist, do nothing.
         * 
         * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
         * 
         * @param listenerId The listener id
         * @example ```ts
         * 
         * // remove the listener "my-main-listener"
         * JMap.Application.Event.Main.remove("my-main-listener")
         * ```
         */
        function remove(listenerId: string): void
      }

      /**
       * ***JMap.Application.Event.Layer***
       * 
       * Here you can manage all JMap NG App layer event listeners.
       * 
       * Click to see all events available: ***[[JMap.Application.Event.Layer.on]]***. 
       */
      namespace Layer {

        /**
         * ***JMap.Application.Event.Layer.on***
         * 
         * Here you have all JMap NG App available layer events on which you can attach a listener.
         */
        namespace on {

          /**
           * ***JMap.Application.Event.Layer.on.doubleClick***
           * 
           * This event is triggered when a user double clicks on a layer name in the hierarchical tree of the layers panel
           * 
           * The layer is received as a param property of the event, you can then take any action that would be executed on double click for this layer
           * 
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example ```ts
           * 
           * // Triggered when a user double clicks on a layer name 
           * JMap.Application.Event.Layer.on.doubleClick("my-layer-double-click-listener", params => {
           *   const layer = params.layer
           *   console.info(`The following layer has been double clicked by the current user: "${layer.name}". Its visibility will be toggled`)
           *   if (!JMap.Layer.isVisible(layer.id)) {
           *     JMap.Layer.ensureLayerIsVisible(layer.id)
           *   } else {
           *     JMap.Layer.setVisible(layer.id, false)
           *   }
           * })
           * ```
           */
          function doubleClick(listenerId: string, fn: (params: JAppLayerEventParams) => void): void
        }

        /**
         * ***JMap.Application.Event.Layer.activate***
         * 
         * Activate the listener.
         * 
         * If the listener is already active, do nothing.
         * 
         * If the listener is inactive, it will be reactivated and will be called again ...
         * 
         * @param listenerId The listener id
         * @example ```ts
         * 
         * // activate the listener "my-layer-listener"
         * JMap.Application.Event.Layer.activate("my-layer-listener")
         * ```
         */
        function activate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Layer.deactivate***
         * 
         * Deactivate the listener.
         * 
         * If the listener id doesn't exists or if the listener is already inactive, do nothing.
         * 
         * If the listener is active, it will be deactivated and will be ignored ...
         * 
         * @param listenerId The listener id
         * @example ```ts
         * 
         * // deactivate the listener "my-layer-listener"
         * JMap.Application.Event.Layer.deactivate("my-layer-listener")
         * ```
         */
        function deactivate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Layer.remove***
         * 
         * Remove the listener.
         * 
         * If the listener doesn't exist, do nothing.
         * 
         * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
         * 
         * @param listenerId The listener id
         * @example ```ts
         * 
         * // remove the listener "my-layer-listener"
         * JMap.Application.Event.Layer.remove("my-layer-listener")
         * ```
         */
        function remove(listenerId: string): void
      }

      /**
       * ***JMap.Application.Event.MapContext***
       * 
       * Here you can manage all JMap NG App map context event listeners.
       * 
       * Click to see all events available: ***[[JMap.Application.Event.MapContext.on]]***. 
       */
      namespace MapContext {

        /**
         * ***JMap.Application.Event.MapContext.on***
         * 
         * Here you have all JMap NG App available map context events on which you can attach a listener.
         */
        namespace on {

          /**
           * ***JMap.Application.Event.MapContext.on.beforeMapDataChange***
           * 
           * This event is triggered before a context's map data is created or updated.
           * 
           * This event is not triggered when a context metadata is changed: title, description, default context, etc...
           * 
           * You can access and manage extension's data from this event, see example below.
           * 
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example ```ts
           * 
           * // Triggered before a map-context is created or updated
           * JMap.Application.Event.MapContext.on.beforeMapDataChange("my-before-map-data-changed-listener", params => {
           *   console.info(`Before map data changed for context id="${params.context.title}"`, params.context)
           *   console.info(`Is creation ="${params.isCreation}"`) // creation or update
           *   // you can check if some extension data has been set for this map-context
           *   const isExtensionDataSet = params.isExtensionDataSetById("my-extension")
           *   if (isExtensionDataSet) {
           *     // and you can delete this data if you want
           *     params.removeExtensionDataById("my-extension")
           *   }
           *   // it's not necessary to delete before setting the data, update will overwrite the existing data
           *   params.setExtensionDataById("my-extension", { count: 0, description: "your own extension data" })
           *   console.info("Extension data has been set and will be saved", params.getExtensionDataById("my-extension"))
           * })
           * ```
           */
          function beforeMapDataChange(listenerId: string, fn: (params: JAppMapContextBeforeMapDataChangeEventParams) => void): void

          /**
           * ***JMap.Application.Event.MapContext.on.afterMapDataChange***
           * 
           * This event is triggered after a context's map data is created or updated.
           * 
           * This event is not triggered when a context metadata is changed: title, description, default context, etc...
           * 
           * You can access extension's data from this event, see example below.
           * 
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example ```ts
           * 
           * // Triggered after a map-context is created or updated
           * JMap.Application.Event.MapContext.on.afterMapDataChange("my-after-map-data-change-listener", params => {
           *   console.info(`After map data change for context id="${params.context.title}"`, params.context)
           *   console.info(`Is creation ="${params.isCreation}"`) // creation or update
           *   const isExtensionDataSet = params.isExtensionDataSetById("my-extension")
           *   if (isExtensionDataSet) {
           *     console.info("Saved extension data", params.getExtensionDataById("my-extension")) 
           *   } else {
           *     console.info("No extension data")
           *   }
           * })
           * ```
           */
          function afterMapDataChange(listenerId: string, fn: (params: JAppMapContextAfterMapDataChangeEventParams) => void): void

          /**
           * ***JMap.Application.Event.MapContext.on.beforeApply***
           * 
           * This event is triggered before the map context is applied.
           * 
           * You can access extension's data from this event, see example below.
           * 
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example ```ts
           * 
           * // Triggered before a map-context is applied
           * JMap.Application.Event.MapContext.on.beforeApply("my-before-apply-listener", params => {
           *   console.info(`Before apply map context id="${params.context.title}"`, params.context)
           *   const isExtensionDataSet = params.isExtensionDataSetById("my-extension")
           *   if (!isExtensionDataSet) {
           *     console.info("No extension data in map-context")
           *   } else {
           *     console.info("Extension map context data = ", params.getExtensionDataById("my-extension"))
           *   }
           * })
           * ```
           */
          function beforeApply(listenerId: string, fn: (params: JAppMapContextBeforeApplyEventParams) => void): void
          
          /**
           * ***JMap.Application.Event.MapContext.on.afterApply***
           * 
           * This event is triggered after the map context is applied.
           * 
           * You can access extension's data from this event, see example below.
           * 
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example ```ts
           * 
           * // Triggered after a map-context is applied
           * JMap.Application.Event.MapContext.on.afterApply("my-after-apply-listener", params => {
           *   console.info(`After apply map context id="${params.context.title}"`, params.context)
           *   const isExtensionDataSet = params.isExtensionDataSetById("my-extension")
           *   if (!isExtensionDataSet) {
           *     console.info("No extension data in map-context")
           *   } else {
           *     console.info("Extension map context data = ", params.getExtensionDataById("my-extension"))
           *   }
           * })
           * ```
           */
          function afterApply(listenerId: string, fn: (params: JAppMapContextAfterApplyEventParams) => void): void
        }

        /**
         * ***JMap.Application.Event.MapContext.activate***
         * 
         * Activate the listener.
         * 
         * If the listener is already active, do nothing.
         * 
         * If the listener is inactive, it will be reactivated and will be called again ...
         * 
         * @param listenerId The listener id
         * @example ```ts
         * 
         * // activate the listener "my-mapcontext-listener"
         * JMap.Application.Event.MapContext.activate("my-mapcontext-listener")
         * ```
         */
        function activate(listenerId: string): void

        /**
         * ***JMap.Application.Event.MapContext.deactivate***
         * 
         * Deactivate the listener.
         * 
         * If the listener id doesn't exists or if the listener is already inactive, do nothing.
         * 
         * If the listener is active, it will be deactivated and will be ignored ...
         * 
         * @param listenerId The listener id
         * @example ```ts
         * 
         * // deactivate the listener "my-mapcontext-listener"
         * JMap.Application.Event.MapContext.deactivate("my-mapcontext-listener")
         * ```
         */
        function deactivate(listenerId: string): void

        /**
         * ***JMap.Application.Event.MapContext.remove***
         * 
         * Remove the listener.
         * 
         * If the listener doesn't exist, do nothing.
         * 
         * Remove the listener from JMap NG Core library. The listener is deleted and never called again after that.
         * 
         * @param listenerId The listener id
         * @example ```ts
         * 
         * // remove the listener "my-mapcontext-listener"
         * JMap.Application.Event.MapContext.remove("my-mapcontext-listener")
         * ```
         */
        function remove(listenerId: string): void
      }
    }

    /**
     * **JMap.Application.User**
     * 
     * You can manage everything related to user in JMap NG App here.
     */
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

    /**
     * **JMap.Application.Extension**
     * 
     * You can manage everything related to JMap NG App extensions here.
     */
    namespace Extension {
      
      /**
       * ***JMap.Application.Extension.register***
       * 
       * Register your own JMap NG App extension.
       * 
       * @throws Error if a parameter is not correct
       * @param extensionModel The extension model
       * @example ```ts
       * 
       * JMap.Application.Extension.register({
       *  id: "MyExtension", // Unique id
       *  initFn: () => {
       *    // here you can start your UI component if needed
       *    console.log("JMap is started and my extension has been successfuly started")
       *  },
       *  onPanelCreation: panelContainerId => {
       *    console.info("Create your component here")
       *  },
       *  onPanelDestroy: panelContainerId => {
       *    console.info("Destroy your component here")
       *  }
       * })
       * ```
       */
      function register(extension: JAppExtension): void

      /**
       * ***JMap.Application.Extension.isRegistered***
       * 
       * Tell if an JMap NG App extension has been registered or not.
       * 
       * It can be usefull to know if a JMap NG App extension is in use or not.
       * 
       * @throws Error if extensionId format is not correct
       * @param extensionId The extension id
       * @example ```ts
       * 
       * // returns true if extension id="my-extension" is in use or not
       * JMap.Extension.isRegistered("my-extension")
       * ```
       */
      function isRegistered(extensionId: string): boolean

      /**
       * ***JMap.Application.Extension.getAllRegisteredIds***
       * 
       * Returns all JMap NG App registered extension ids.
       * 
       * Don't list JMap NG Core extensions, only JMap NG App extensions.
       * 
       * @example ```ts
       * 
       * // Could returns [ "my-first-extension", "my-second-extension" ]
       * JMap.Extension.getAllRegisteredIds()
       * ```
       */
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

    /**
     * **JMap.Application.Favorite**
     * 
     * You can manage everything related to your favorites from here.
     */
    namespace Favorite {
      /**
       * **JMap.Application.Favorite.addFavorite**
       * 
       *  Add a favorite to your map and to the JMap Favorite User menu.
       * 
       * @param newLocation the location of the new favorite
       * @example ```ts
       * 
       * const newLocation: JLocation = {
       *  x: 50,
       *  y: 50
       * }
       * JMap.Application.Favorite.add(newLocation)
       * ```
       */
      function add(newLocation: JLocation): Promise<JAppFavorite>

      /**
       * **JMap.Application.Favorite.deleteById**
       * 
       * Delete the favorite of the given id from map and the JMap Favorite User menu.
       *       
       * @param favoriteId the favorite id
       * @example ```ts
       * 
       * JMap.Application.Favorite.deleteById(3)
       * ```
       */
       function deleteById(favoriteId: number): Promise<void>

       /**
        * **JMap.Application.Favorite.getAll**
        * 
        * Return all favorites.
        * 
        * @example ```ts
        * 
        * JMap.Application.Favorite.getAll()
        * ```
        */
        function getAll(): JAppFavorite[] 

        /**
         * **JMap.Application.Favorite.getById**
         * 
         * Return the favorite for the given id if it exist.
         * @param favoriteId the favorite id
         * @example ```ts
         * 
         * JMap.Application.Favorite.getById(3)
         * ```
         */
         function getById(favoriteId: number): JAppFavorite

        /**
         * **JMap.Application.Favorite.existById**
         * 
         * Return true if the favorite exists for a given id.
         * @param favoriteId the favorite id
         * @example ```ts
         * 
         * JMap.Application.Favorite.existById(3)
         * ```
         */
        function existById(favoriteId: number): boolean
     }
  }
}
