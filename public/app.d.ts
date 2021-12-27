declare namespace JMap {

  /**
   * **JMap.Application**
   * 
   * This is the JMap NG App API documentation.
   * 
   * JMap NG App depends on the JMap NG Core library ([[JMap]]).
   * 
   * Examples are available <a href="https://doc.k2geospatial.com/jmap/doc/ng_dev/examples.html" target="_blank">here</a>.
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
     * // return the build version, for example "1.0.1"
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
     * // return the build version, for example "1.0.1"
     * JMap.Application.getApiVersion()
     * ```
     */
    function getApiVersion(): string

    /**
     * **JMap.Application.openDocumentation**
     * 
     * Opens JMap NG App online JS API documentation, in a new tab.
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
    * Opens the JMap NG App online user manual, in a new tab.
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
       * // return the current draw mode
       * JMap.Application.Annotation.getDrawMode()
       * ```
       */
      function getDrawMode(): JAppDrawMode

      /**
       * **JMap.Application.Annotation.setDrawMode**
       * 
       * Sets the annotation draw mode.
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
       * // return the current draw type
       * JMap.Application.Annotation.getDrawType()
       * ```
       */
      function getDrawType(): JAppDrawType

      /**
       * **JMap.Application.Annotation.setDrawMode**
       * 
       * Sets the annotation draw mode.
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
       * Returns true if annotation exists for the given id, else false
       * 
       * @throws if the annotationId param is not a valid string
       * @param annotationId the given annotation id 
       * @example ```ts
       * 
       * // return true if annotation exists, else false
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
       * // return the annotation for the given id
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
       * // return all annotations
       * JMap.Application.Annotation.getAll()
       * ```
       */
      function getAll(): JAppAnnotation[]

      /**
       * **JMap.Application.Annotation.getSelectedIds**
       * 
       * Returns the ids of the selected annotations.
       * 
       * Empty array if no annotation is selected
       * 
       * @example ```ts
       * 
       * // return ids of selected annotations
       * JMap.Application.Annotation.getSelectedIds()
       * ```
       */
      function getSelectedIds(): string[]

      /**
       * **JMap.Application.Annotation.deleteAll**
       * 
       * Deletes all annotations.
       * 
       * Does nothing if no annotation exists.
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
       * Deletes the annotations for the given type.
       * 
       * Does nothing if no annotation exist for the type.
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
       * Deletes the annotations for the given ids.
       * 
       * @param annotationIds an array of annotation id
       * @throws if an annotation array is empty or an annotation is not found for the given ids.
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
       * Deletes the selected annotations.
       * 
       * Does nothing if no selection.
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
       * // return the current style in use for annotation drawing
       * JMap.Application.Annotation.getStyle()
       * ```
       */
      function getStyle(): JAppDrawStyle

      /**
       * **JMap.Application.Annotation.updateStyle**
       * 
       * Updates annotation style, for the next annotations that will be drawn.
       * 
       * Merges the new options with current one.
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
       * For given ids, updates annotation style.
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

      /**
       * **JMap.Application.Annotation.setPresetColors**
       * 
       * Set the preset colors of color pickers using the given colors.
       * @param presetColors A array of preset hex colors
       * @throws if presetColors not an array, does not contain string or is too big
       * @example ```ts
       * 
       * // Set the preset colors with 2 color 
       * const presetColors = [
       *  "#29D1EA",
       *  "#D2FDDF"
       * ]
       * 
       * JMap.Application.Annotation.setPresetColors(presetColors)
       * ```
       */
      function setPresetColors(presetColors: string[]): void

      /**
       * **JMap.Application.Annotation.addPresetColor**
       * 
       * Add the given color to the preset colors of color pickers if not already present.
       * 
       * @param presetColor A hex color
       * @throws if presetColor not an string or is empty
       * @example ```ts
       * 
       * // Add the color #D2FDDF to the preset colors
       * const presetColor = "#D2FDDF"
       * 
       * JMap.Application.Annotation.addPresetColor(presetColor)
       * ```
       */
      function addPresetColor(presetColor: string): void

      /**
       * **JMap.Application.Annotation.deletePresetColor**
       * 
       * Delete the given color to the preset colors of color pickers if present.
       * 
       * @param presetColor A hex color
       * @throws if presetColor not an string or is empty
       * @example ```ts
       * 
       * // Delete the color #D2FDDF from the preset colors
       * const presetColor = "#D2FDDF"
       * 
       * JMap.Application.Annotation.deletePresetColor(presetColor)
       * ```
       */
      function deletePresetColor(presetColor: string): void

      /**
       * **JMap.Application.Annotation.getPresetColors**
       * 
       * Return the preset colors used by the application's color pickers.
       * 
       * @example ```ts
       * 
       * // Get the current preset colors
       * JMap.Application.Annotation.getPresetColors()
       * ```
       */
      function getPresetColors(): string[]
    }
    /**
     * **JMap.Application.Panel**
     * 
     * You can manage UI panels (on the left in the screen) here.
     * 
     * There is one diplayed and active panel at a time.
     */
    namespace Panel {

      /**
       * **JMap.Application.Panel.getActive**
       * 
       * Returns the active panel.
       * 
       * @example ```ts
       * 
       * // return the currently active panel
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
       * // return all available application panels
       * JMap.Application.Panel.getAll()
       * ```
       */
      function getAll(): JAppPanel[]

      /**
       * **JMap.Application.Panel.existById**
       * 
       * Returns true if the panel exists for a given panel id.
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
       * Changes the JMap NG App panel.
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
       * Deactivates the current panel, except if the current panel is the layer panel, or if there is only one panel available.
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
       * Adds a custom panel for a given panel definition to JMap NG App.
       * 
       * @throws if panel format is not correct
       * @param panel an object that is the definition of the new panel
       * @example ```ts
       * 
       * const customPanelId = "custom-panel"
       * // will add the new panel, here an empty panel just for the example
       * JMap.Application.Panel.add({
       *   id: customPanelId,
       *   icon: "http://url-to-my-image/custom-icon.png", // could be an image encoded as a base64 url
       *   tooltip: "My custom panel tooltip display when mouse is hover the icon",
       *   title: "Custon panel"
       * })
       * // The panel has been created but not displayed, if you want to display it:
       * JMap.Applcation.activate(customPanelId)
       * ```
       */
      function add(panel: JAppPanel): void
      
      /**
       * **JMap.Application.Panel.removeById**
       * 
       * Removes a panel for a given panel id from JMap NG App.
       * 
       * If the panel was active, will activate the first panel the application finds.
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
       * Opens the feature edit menu for a single feature.
       * 
       * @param layerId the JMap layer id
       * @param featureId the feature id
       * @example ```ts
       * 
       * // open edit menu (single feature) for layer id=5, and feature id=234
       * JMap.Application.Feature.openEditMenuById(5, 234)
       * ```
       */
      function openEditMenuById(layerId: JId, featureId: JId): Promise<GeoJSON.Feature>

      /**
       * **JMap.Application.Feature.openEditMenuByIds**
       * 
       * Opens the feature edit menu for multiple features.
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
       * Closes the feature edit menu if visible.
       * 
       * If not visible, does nothing.
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
       * Deletes features (on the server), refreshes the layer on the map and displays a success or error message when done.
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
       * Opens the geometry panel in order to create a new feature.
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
       * Opens the geometry panel in order to update a feature geometry.
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
       * Selects the layer that will be used to create the geometry and the feature.
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
       * Enables drawing of the geometry on the map.
       * 
       * @throws if no layer is selected
       * @example ```ts
       * 
       * // enable drawing of the geometry on the map
       * JMap.Application.Geometry.startCreationDrawing()
       * ```
       */
      function startCreationDrawing(): void

      /**
       * **JMap.Application.Geometry.stopCreationDrawing**
       * 
       * Stops the geometry creation, when drawing on the map, and displays the layer selection panel.
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
       * Finishes geometry creation.
       *  
       * @throws if panel is not in creation mode, or if geometry has not yet been created.
       * @example ```ts
       * 
       * // finishe creating or updating the geometry
       * JMap.Application.Geometry.finishCreate()
       * ```
       */
      function finishCreate(): void

      /**
       * **JMap.Application.Geometry.finishUpdate**
       * 
       * Finishes geometry update.
       * 
       * @throws if panel is not in update mode
       * @example ```ts
       * 
       * // finishe updating the geometry
       * JMap.Application.Geometry.finishUpdate()
       * ```
       */
      function finishUpdate(): Promise<void>

      /**
       * **JMap.Application.Geometry.closePanel**
       * 
       * Closes the geometry creation or update panel without confirmation message.
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
       * Returns true if a measure exists for the given id, else false.
       * 
       * @throws Error if measureId is not a string or an empty string
       * @example ```ts
       * 
       * // return true if the measure exists, else false
       * JMap.Application.Measure.existsById("ac57b1bd83ca6d8e0013e4cf9f06847e")
       * 
       * // throws an error
       * JMap.Application.Measure.existsById("")
       *
       * // throws an error
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
       * // return the measure for the given id
       * JMap.Application.Measure.getById("ac57b1bd83ca6d8e0013e4cf9f06847e")
       * 
       * // throws an error
       * JMap.Application.Measure.getById("")
       *
       * // throws an error
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
       * Resets measures with provided measures.
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
       * Activates a measure type for the drawing measurement tool.
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
       * Returns the current active measure type.
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
       * Returns the current measure selection.
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
       * Activates or deactivates the measurement selection mode.
       * 
       * If active, measures can be selected by clicking on the map (then changed or removed).
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
       * Deletes all measures.
       * 
       * Returns deleted measure count.
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
       * Deletes all selected measures.
       * 
       * Returns deleted measure count.
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
       * Deletes a measure for a given id.
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
       * Deletes all measures having type === "line_string".
       * 
       * Returns deleted measure count.
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
       * Deletes all measures having type === "polygon".
       * 
       * Returns deleted measure count.
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
       * Deletes all measures having type === "circle".
       * 
       * Returns deleted measure count.
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
       * The selection of only one layer can be diplayed at a time.
       * 
       * This function returns the id of the layer for which the selection is displayed.
       * 
       * @example ```ts
       * 
       * // return the layer id of the displayed selection
       * JMap.Application.Selection.getDisplayedLayerId()
       * ```
       */
      function getDisplayedLayerId(): JId

      /**
       * **JMap.Application.Selection.setDisplayedLayerId**
       * 
       * Displays the selection of the layer.
       * 
       * If layer selection has no selection, hides the layer selection list.
       * 
       * @throws if layer not found for the given layer id
       * @example ```ts
       * 
       * // display the layer id=2 selection
       * JMap.Application.Selection.setDisplayedLayerId(2)
       * ```
       */
      function setDisplayedLayerId(layerId: JId): void

      /**
       * **JMap.Application.Selection.activateSelectionType**
       * 
       * Changes the current type of selection
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
       * Returns the current active type of selection
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
       * Returns true if the selection data table is diaplayed.
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
       * Hides or shows the selection data table.
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
       * Unselects all features for a given layer id.
       * 
       * @param layerId the JMap layer id
       * @example ```ts
       * 
       * // clear the layer id=2 selection
       * JMap.Application.Selection.clearSelectionForLayer(2)
       * ```
       */
      function clearSelectionForLayer(layerId: JId): void

      /**
       * **JMap.Application.Selection.clearSelection**
       * 
       * Clears the current selection
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
       * Selects features on the map that intersect the given feature.
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
       * Exports the current selection as an excel file.
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
       * Pans and zooms the map to display the current selection.
       * 
       * @param options optional options
       * @example ```ts
       * // fit the map to display selected features
       * JMap.Application.Selection.fitMapToDisplayLayerSelection()
       * ```
       */
      function fitMapToDisplayLayerSelection(options?: JPanAndZoomOptions): void
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
       * If you use the JMap NG App, use this function instaed of JMap.Project.activateById.
       * 
       * This function does the same as JMap.Project.activateById but also manages things for the application UI.
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
      function activateById(projectId: JId): JProject

      /**
       * **JMap.Application.Project.setSelectionPanelVisibility**
       * 
       * Displays or hides the project list selection panel.
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
      * **JMap.Application.Layer.Tree**
      * 
      * You can manage the layer panel tree view here.
      */
      namespace Tree {
      
        /**
        * **JMap.Application.Layer.Tree.Filter**
        * 
        * You can manage the layer panel tree view filtering here.
        */
        namespace Filter {
        
          /**
           * **JMap.Application.Layer.Tree.Filter.setName**
           * 
           * Sets the name filter. Name filter needs to have at least 2 characters to be applied.
           * 
           * Panel layer will show only layers whose name matches the name filter. The name filter is case-insensitive and 
           * diacritical characters insensitive.
           * 
           * @param nameFilter the name filter to apply
           * @example ```ts
           * 
           * // In the layer panel will display only layers whose name matches "pro" (case-insensitive)
           * JMap.Application.Layer.setName("pro")
           * ```
           */
          function setName( nameFilter: string): void

          /**
           * **JMap.Application.Layer.Tree.Filter.isApplied**
           * 
           * Tests if the layer tree filters are applied.
           * 
           * Layer tree filters are applied (in action) only if the filtering is active ([[JMap.Application.Layer.Tree.Filter.isActive]] returns true)
           * and either one of those two conditions are met:
           * 
           * a) the name filter contains at least 2 characters
           * b) one of the layer filters has been added to the filtering configuration
           * 
           * @example ```ts
           * 
           * // filter configuration is initially empty
           * 
           * // activate the filters
           * JMap.Application.Layer.Tree.Filter.setActive(true)
           * 
           * // set the name filter to "a"
           * JMap.Application.Layer.Tree.Filter.setName("a")
           * 
           * // will return false
           * const isFilterApplied = JMap.Application.Layer.Tree.Filter.isApplied()
           * ```
           */
          function isApplied(): boolean
        
          /**
           * **JMap.Application.Layer.Tree.Filter.isActive**
           * 
           * Tests if the layer tree filters are active.
           * 
           * Layer tree filters are active, but initially not applied, when the user activates the Filter user interface either by clicking on a button
           * or by calling a JMap NG API method to activate it.
           * See [[JMap.Application.Layer.Tree.Filter.isApplied]] for more details.
           * 
           * @example ```ts
           * 
           * // activate the filters
           * JMap.Application.Layer.Tree.Filter.setActive(false)
           * 
           * // will return false
           * JMap.Application.Layer.Tree.Filter.isActive()
           * ```
           */        
          function isActive(): boolean
        
          /**
           * **JMap.Application.Layer.Tree.Filter.setActive**
           * 
           * Tests if the layer tree filters are active.
           * 
           * Layer tree filters are active, but initially not applied, when the user activates the Filter user interface either by clicking on a button
           * or by calling a JMap NG API method to activate it.
           * See [[JMap.Application.Layer.Tree.Filter.isApplied]] for more details 
           * 
           * @param active a boolean
           * @example ```ts
           * 
           * // activate the filters
           * JMap.Application.Layer.Tree.Filter.setActive(false)
           * 
           * // will return false
           * JMap.Application.Layer.Tree.Filter.isActive()
           * ```
           */        
          function setActive(active: boolean): void

          /**
           * **JMap.Application.Layer.Tree.Filter.applyToMap**
           * 
           * Applies the current filter configuration on the map. All layers not matching the filter will be hidden, and only those
           * that match the filter will stay visible on the map. If no filter is defined (or appliable), no change is applied on the map.
           * 
           * @example ```ts
           * 
           * // Apply the current filter
           * JMap.Application.Layer.Tree.Filter.applyToMap()
           * ```
           */        
          function applyToMap(): void

          /**
           * **JMap.Application.Layer.Tree.Filter.existById**
           * 
           * Tests if the specified filter exists.
           * 
           * @param filterId the filter id
           * @example ```ts
           * 
           * // create a filter
           * JMap.Application.Layer.Tree.Filter.add({
           *  1,
           *  metadataItemId: 0,
           *  type: "date",
           *  operator: "between",
           *  value: [new Date("2021-06-02T00:00:00"),new Date("2021-06-22:T00:00:00")]
           * })
           * 
           * // will return true
           * JMap.Application.Layer.Tree.Filter.existById(1)
           * ```
           */      
          function existById(filterId: number): boolean

          /**
           * **JMap.Application.Layer.Tree.Filter.oneFilterExistForMetadataId**
           * 
           * Tests if at least one filter associated with the specified metadata id exists.
           * 
           * @param metadataId the metadata id
           * @example ```ts
           * 
           * // filter collection is initially empty
           * 
           * // create a filter
           * JMap.Application.Layer.Tree.Filter.add({
           *  1,
           *  metadataItemId: 0,
           *  type: "date",
           *  operator: "between",
           *  value: [new Date("2021-06-02T00:00:00"),new Date("2021-06-22:T00:00:00")]
           * })
           * 
           * // will return false
           * JMap.Application.Layer.Tree.Filter.oneFilterExistForMetadataId(6)
           * ```
           */        
          function oneFilterExistForMetadataId(metadataId: JId): boolean

          /**
           * **JMap.Application.Layer.Tree.Filter.getAll**
           * 
           * Returns an object containing the current name filter and an array of all current filters.
           * 
           * @example ```ts
           * 
           * // get filters configuration
           * console.log(JMap.Application.Layer.Tree.Filter.getAll())
           * // {
           * //   "nameFilter":"Mont",
           * //   "filters":[
           * //     {"id":1,
           * //       "metadataItemId":0,
           * //       "operator":"between",
           * //       "type":"date",
           * //       "value":[
           * //       "2021-06-01T10:25:00.000Z",
           * //       "2021-06-22T10:25:00.000Z"
           * //       ]
           * //     }
           * //   ]
           * // }
           * ```
           */        
          function getAll(): JAppGetAllFiltersResult

          /**
           * **JMap.Application.Layer.Tree.Filter.getById**
           * 
           * Retrieves the specified filter by id.
           * 
           * @param filterId the filter id
           * @example ```ts
           * 
           * // get filter id=1
           * JMap.Application.Layer.Tree.Filter.getById(1)
           * // {"id":1,
           * //   "metadataItemId":0,
           * //   "operator":"between",
           * //   "type":"date",
           * //   "value":[
           * //     "2021-06-01T10:25:00.000Z",
           * //     "2021-06-22T10:25:00.000Z"
           * //   ]
           * // }
           * ```
           */        
          function getById(filterId: number): JAppAnyLayerFilter

          /**
           * **JMap.Application.Layer.Tree.Filter.add**
           * 
           * Adds a filter. The list of available metadata schema items can be retieved by calling [[JMap.Layer.getMetadataSchema]].
           * 
           * @param filter a JAppAnyLayerFilter object
           * @example ```ts
           * 
           * // add a filter to the config
           * JMap.Application.Layer.Tree.Filter.add({
           *  1,
           *  metadataItemId: 0,
           *  type: "date",
           *  operator: "between",
           *  value: [new Date("2021-06-02T00:00:00"),new Date("2021-06-22:T00:00:00")]
           * })
           * ```
           */        
          function add(filter: JAppAnyLayerFilter): JAppAnyLayerFilter

          /**
           * **JMap.Application.Layer.Tree.Filter.deleteById**
           * 
           * Removes the specified filter from the filter configuration.
           * 
           * @param filterId the id of the filter to delete
           * @example ```ts
           * 
           * // delete filter id=1
           * JMap.Application.Layer.Tree.Filter.deleteById(1)
           * ```
           */        
          function deleteById(filterId: number): JAppAnyLayerFilter

          /**
           * **JMap.Application.Layer.Tree.Filter.openAddFilterDialog**
           * 
           * Opens the Add Filter dialog box, and activates the Layer panel if it is not already active.
           * 
           * @example ```ts
           * 
           * // open Add Filter UI
           * JMap.Application.Layer.Tree.Filter.openAddFilterDialog()
           * ```
           */        
          function openAddFilterDialog(): void

          /**
           * **JMap.Application.Layer.Tree.Filter.closeAddFilterDialog**
           * 
           * Closes the Add Filter dialog box (without saving the filter).
           * 
           * @example ```ts
           * 
           * // close Add Filter UI
           * JMap.Application.Layer.Tree.Filter.closeAddFilterDialog()
           * ```
           */        
          function closeAddFilterDialog(): void
        }
      }

      /**
       * **JMap.Application.Layer.startEdition**
       * 
       * Open the edition panel, thematics and dynamic filter or just dynamic filter if the layer has no thematics
       * 
       * @throws If layer is not found or layerId is correspond to a layer group
       * @example ```ts
       * 
       * // Will edit the layer's id="3" thematics
       * JMap.Application.Layer.startThematicEdition(3)
       * ```
       */
      function startEdition(layerId: JId, activeTab: JLayerEditionActiveTab): void

      /**
       * **JMap.Application.Layer.stopThematicEdition**
       * 
       * If we are editing thematics or dynamic filters of a layer, will stop edition and show the layer tree panel, 
       * Else log a warning message to tell we are not editing.
       * 
       * @example ```ts
       * 
       * // will return to the layer tree panel
       * JMap.Application.Layer.stopThematicEdition()
       * ```
       */
      function stopEdition(): void
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
         * // return the dom container id, ex : "jmap-app"
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
         * // return the dom container width, ex : 1230
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
         * // return the dom container height, ex : 966
         * JMap.Application.UI.Container.getHeight()
         * ```
         */
        function getHeight(): number

        /**
         * **JMap.Application.UI.Container.getVisiblePolygonGeometry**
         * 
         * Returns a polygon geometry representing the visible coordinates on the map.
         * Works fine even if the map is pitched or rotated.
         * @throws if map is not loaded
         * @example ```ts
         * 
         * // returns the polygon geometry representing the visible coordinates on the map.
         * // ex :
         * // {
         * //  "type": "Polygon",
         * //  "coordinates": [
         * //     [ 
         * //       [ -57, 35],[-39, 23 ], [-36, 36 ], [-52, 45], [-57, 35 ]
         * //     ]
         * //   ]
         * // }
         * JMap.Application.UI.Container.getVisiblePolygonGeometry()
         * ```
         */
        function getVisiblePolygonGeometry(): GeoJSON.Polygon
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
         * Sets the application left side panel visibility.
         * 
         * @param isVisible if true, shows the panel, else hides it
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
         * Changes the JMap NG App main panel on the left visibility.
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
         * Returns the min height of the Panel header section (where the project name is displayed) in rem.
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
         * Returns the min height of the Panel header section (where the project name is displayed) in pixels.
         * 
         * @example ```ts
         * 
         * // returns 80
         * JMap.Application.UI.SidePanel.getHeaderMinHeightInPixel()
         * ```
         */
        function getHeaderMinHeightInPixel(): number

        /**
         * **JMap.Application.UI.SidePanel.getTitleMinHeightInRem**
         * 
         * Returns the min height of the Panel title section (where the panel name is displayed) in rem.
         * 
         * @example ```ts
         * 
         * // returns "4rem"
         * JMap.Application.UI.SidePanel.getTitleMinHeightInRem()
         * ```
         */
        function getTitleMinHeightInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getTitleMinHeightInPixel**
         * 
         * Returns the min height of the Panel title section (where the panel name is displayed) in pixels.
         * 
         * @example ```ts
         * 
         * // returns 64
         * JMap.Application.UI.SidePanel.getTitleMinHeightInPixel()
         * ```
         */
        function getTitleMinHeightInPixel(): number    
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
         * Changes the UI color theme in dark or light.
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
       * **JMap.Application.Print.setScaleControlVisibility**
       *
       * Displays or hides the scale control widget.
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
       * Returns true if the scale control widget is visible, else false.
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
       * Sets the title displayed in the bottom of the print layout.
       * 
       * If empty string, will display no title.
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
       * Sets the subtitle displayed in the bottom of the print layout.
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
       * Sets the date visible or hidden in the bottom of the print layout.
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
       * Sets the north arrow visible or hidden in the bottom of the print layout.
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
       * Returns all available paper formats.
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
       * Sets the paper format of the print layout.
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
       * Sets the print layout orientation as portrait or landscape.
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
       * Sets the type of file used when downloading the print.
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
       * **JMap.Application.Print.takeCapture**
       *
       * Builds print image and launches downwnload of the file
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
       * Activates a query by id and group id.
       * 
       * It displays the query form (replacing the list of queries) in the query panel.
       * 
       * @param groupId the query group id
       * @param queryId the query id
       * @example ```ts
       * 
       * // activate query id=43 on group id=23
       * JMap.Application.Print.activateQuery(23, 43)
       * ```
       */
      function activateQuery(groupId: JId, queryId: string): void
      
      /**
       * **JMap.Application.Query.deactivateQuery**
       *
       * Deactivatea the current query. If no query is active, does nothing.
       * 
       * If a query form is active (= its form is displayed), hidea it and returns to the query list.
       * 
       * @example ```ts
       * 
       * // if a query form is displayed, hide it and return to the query list.
       * JMap.Application.Print.deactivateQuery()
       * ```
       */
      function deactivateQuery(): void
      
      /**
       * **JMap.Application.Query.getDefaultData**
       *
       * Returns the current query form data.
       * 
       * If there is no active form, warns in the console and returns an empty object {}.
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
       * Sets active query form data. If there is no active form, this function throws.
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
       * Resets the current query form data.
       * 
       * If there is no active form, does nothing.
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
       * By default, the query form is displayed in the left panel with a simple layout, one field per line.
       * 
       * But it is possible to display it in a modal window, with the layout defined in the project.
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
       * Processes the active query form with the given values.  
       * 
       * Throws if no query is active.
       * 
       * Resolves only if some features are found.
       * 
       * If features are found, makes the layer selectable and visible if needed, then selects and zooms on found features.
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
     * For all your listeners, you need to provide a listener id. We introduced this notion of listener ids in order
     * to be able to know what's the problem if something goes wrong in a listener.
     * 
     * Like that we are able to identify more easily the problem in the javascript console.
     * 
     * Listener ids have to be unique for the namespace, regardless to the type of event you register your listener to.
     * 
     * For example, for all Map Context events, you can register only one listener named "***my-custom-listener***"".
     * 
     * A good practice could be prefixing all your listener ids. For example if you work for the city of Montreal
     * they could all start with "***montreal-city-***"".
     * 
     * Listeners can be deactivated and reactivated.
     * 
     * Deactivating a listener keeps it in the JMap NG App library, but ignores it when an event is triggered.
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
           * This event is triggered once when: 
           * * all of the application services are loaded, 
           * * the redux store and its reducers are also loaded,
           * * the initial session validation has been executed. At thas point, if the session has successfully been validated, the logged-in user will also be available.
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
         * Activates the listener.
         * 
         * If the listener is already active, does nothing.
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
         * Deactivates the listener.
         * 
         * If the listener id doesn't exist or if the listener is already inactive, does nothing.
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
         * Removes the listener.
         * 
         * If the listener doesn't exist, does nothing.
         * 
         * Removes the listener from JMap NG Core library. The listener is deleted and never called again after that.
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
           * This event is triggered when a user double clicks on a layer name in the hierarchical tree of the layers panel.
           * 
           * The layer is received as a param property of the event, you can then take any action that would be executed on double click for this layer.
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
         * Activates the listener.
         * 
         * If the listener is already active, does nothing.
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
         * Deactivates the listener.
         * 
         * If the listener id doesn't exist or if the listener is already inactive, does nothing.
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
         * Removes the listener.
         * 
         * If the listener doesn't exist, does nothing.
         * 
         * Removes the listener from JMap NG Core library. The listener is deleted and never called again after that.
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
       * Adds an action to the JMap User menu (visible in the project selection panel).
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
       * Removes an existing action menu
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
       * Registers your own JMap NG App extension.
       * 
       * @throws Error if a parameter is not correct
       * @param extensionModel The extension model
       * @example ```ts
       * 
       * JMap.Application.Extension.register({
       *  id: "MyExtension", // Unique id
       *  initFn: () => {
       *    // here you can start your UI component if needed
       *    console.log("JMap NG is started and my extension has been successfuly started")
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
       * Tells if an JMap NG App extension has been registered or not.
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
       * Desn't list JMap NG Core extensions, only JMap NG App extensions.
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
       * Adds an error message in the application message stack for the current session.
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
       * Adds an warning message in the application message stack for the current session.
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
       * Adds an info message in the application message stack for the current session.
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
       * Adds an success message in the application message stack for the current session.
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
       * Prompts a confirmation dialog message on the screen.
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
       * Adds an generic message in the application message stack for the current session.
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
