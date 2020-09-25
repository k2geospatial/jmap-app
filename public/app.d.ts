declare namespace JMap {

  /**
   * **JMap.Application**
   * 
   * This is the JMap Web App API documentation.
   * 
   * JMap Web App depends on the JMap Web Core library ([[JMap]]).
   * 
   * Examples are availables <a href="https://doc.k2geospatial.com/jmap/doc/ng_dev/examples/app_start.html" target="_blank">here</a>.
   * 
   * You can customize JMap Web App by providing startup options ([[JApplicationOptions]]).
   */
  namespace Application {

    /**
     * **JMap.Application.getVersion**
     * 
     * Returns the application interface version.
     * 
     * @example ```ts
     * 
     * // returns the interface version, for example "1.0.1"
     * JMap.Application.getVersion()
     * ```
     */
    function getVersion(): string

    /**
     * **JMap.Application.getImplVersion**
     * 
     * Returns the application build version.
     * 
     * For the same interface version we can have multiple implementation version.
     * 
     * @example ```ts
     * 
     * // returns the build version, for example "1.0.1"
     * JMap.Application.getImplVersion()
     * ```
     */
    function getImplVersion(): string

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
       * **JMap.Application.Measure.setDeletingMode**
       * 
       * Activate or deactivate the measurement deleting tool.
       * 
       * If active, measures are deleted when we click on it.
       * 
       * @param isDeleting true to activate deleting mode, else false
       * @example ```ts
       * 
       * // activate deleting measure
       * JMap.Application.Measure.setDeletingMode(true)
       * 
       * // deactivate deleting measure
       * JMap.Application.Measure.setDeletingMode(false)
       * ```
       */
      function setDeletingMode(isDeleting: boolean): void

      /**
       * **JMap.Application.Measure.deleteAllMeasures**
       * 
       * Delete all measures.
       * 
       * @param measureType if provided will delete only measures of the given type
       * @example ```ts
       * 
       * // Delete all measures (distance + circle area + polygon area)
       * JMap.Application.Measure.deleteAllMeasures()
       * 
       * // Delete all distance measures
       * JMap.Application.Measure.deleteAllMeasures("distance")
       * 
       * // Delete all circle measures
       * JMap.Application.Measure.deleteAllMeasures("circleArea")
       * 
       * // Delete all polygon measures
       * JMap.Application.Measure.deleteAllMeasures("polygonArea")
       * ```
       */
      function deleteAllMeasures(measureType?: JAppMeasureType): void
      
      /**
       * **JMap.Application.Measure.deleteMeasureAtLocation**
       * 
       * Delete measures at a specific location
       * @param location The mapbox location on the map in x, y
       * @example ```ts
       * 
       * // Delete measures at location x = 20, y = 30
       * JMap.Application.Measure.deleteMeasureAtLocation({x: 20, y: 30})
       * ```
       */
      function deleteMeasureAtLocation(location: JLocation): void
    
      /**
       * **JMap.Application.Measure.finalizeMeasure**
       * 
       * Finalize the measure that is currently drawn.
       * 
       * @example ```ts
       * 
       * // Finalize the measure curremtly drawn
       * JMap.Application.Measure.finalizeMeasure()
       * ```
       */
      function finalizeMeasure(): void
    
      /**
       * **JMap.Application.Measure.resetState**
       * 
       * Delete current drawing measure and reset all measurement data.
       * 
       * After calling this function, measure tool is initialized like it was at startup.
       * 
       * @example ```ts
       * 
       * // Reset the measure tool
       * JMap.Application.Measure.resetState()
       * ```
       */
      function resetState(): void
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
       * JMap.Application.Measure.getDisplayedLayerId()
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
       * JMap.Application.Measure.setDisplayedLayerId(2)
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
       * JMap.Application.Measure.activateSelectionType("rectangle")
       * ```
       */
      function activateSelectionType(selectionType: JAppSelectionType): void
      
      /**
       * **JMap.Application.Selection.getTableVisibility**
       * 
       * Return true if the selection data table is diaplayed.
       * 
       * @example ```ts
       * 
       * // return true if the selection data table is visible
       * JMap.Application.Measure.getTableVisibility()
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
       * JMap.Application.Measure.setTableVisibility(true)
       *
       * // make selection data table not visible
       * JMap.Application.Measure.setTableVisibility(false)
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
       * JMap.Application.Measure.clearSelectionForLayer(2)
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
       * JMap.Application.Measure.clearSelection()
       * ```
       */
      function clearSelection(): void

      /**
       * **JMap.Application.Selection.doubleClick**
       * 
       * Make selection tool react to a double-click action.
       * 
       * @example ```ts
       * // double click action
       * JMap.Application.Measure.doubleClick()
       * ```
       */
      function doubleClick(): void

      /**
       * **JMap.Application.Selection.onKeyDown**
       * 
       * Make selection tool react to a onKeyDown action.
       * 
       * @example ```ts
       * // on key down action
       * JMap.Application.Measure.onKeyDown(event.code)
       * ```
       */
      function onKeyDown(keyCode: string): void

      /**
       * **JMap.Application.Selection.onKeyUp**
       * 
       * Make selection tool react to a onKeyUp action.
       * 
       * @example ```ts
       * // on key up action
       * JMap.Application.Measure.onKeyUp(event.code)
       * ```
       */
      function onKeyUp(keyCode: string): void

      /**
       * **JMap.Application.Selection.onKeyUp**
       * 
       * Finish the current drawing selection and select features on the map.
       * 
       * @example ```ts
       * // on key up action
       * JMap.Application.Measure.onKeyUp(event.code)
       * ```
       */
      function applyDrawnSelection(): void

      /**
       * **JMap.Application.Selection.exportAsExcelFile**
       * 
       * Export the current selection as an excel file.
       * 
       * If no selection, export an empty file.
       * 
       * @example ```ts
       * // download the current selection as an excel file
       * JMap.Application.Measure.exportAsExcelFile()
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
       * JMap.Application.Measure.fitMapToDisplayLayerSelection()
       * ```
       */
      function fitMapToDisplayLayerSelection(): void
      
      /**
       * **JMap.Application.Selection.removeLastDrawnSelectionCoordinate**
       * 
       * Remove the last drawn point for the current selection
       * 
       * @example ```ts
       * // Remove the last drawn point for the current selection
       * JMap.Application.Measure.removeLastDrawnSelectionCoordinate()
       * ```
       */
      function removeLastDrawnSelectionCoordinate(): void
    }

    /**
     * **JMap.Application.Layer**
     * 
     * You can manage the layer panel here.
     */
    namespace Layer {

      /**
       * **JMap.Application.Layer.activateTab**
       * 
       * Activate the provided tab in the layer panel.
       * 
       * @param tab the tab id to activate
       * @example ```ts
       * 
       * // activate the "base-map" tab in the layer tab
       * JMap.Application.Layer.activateTab("base-map")
       * ```
       */
      function activateTab(tab: JAppLayerTab): void

      /**
       * **JMap.Application.Layer.getAllTabs**
       * 
       * Returns all layer tool tab ids.
       * 
       * Currently tabs are : "layers" or "basemap"
       * 
       * @example ```ts
       * 
       * // get all available layer tabs
       * JMap.Application.Layer.getAllTabs()
       * ```
       */
      function getAllTabs(): JAppLayerTab[]

      /**
       * **JMap.Application.Layer.getActiveTab**
       * 
       * Returns layer panel active tab id.
       * 
       * @example ```ts
       * 
       * // returns the active tab for the layer layout
       * JMap.Application.Layer.getActiveTab()
       * ```
       */
      function getActiveTab(): JAppLayerTab
    }

    /**
     * **JMap.Application.MapContext**
     * 
     * You can manage the map context panel here.
     */
    namespace MapContext {

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
      function activateQuery(groupId: number, queryId: number): void
      function deactivateQuery(): void
      function setDefaultData(values: any): void
      function getDefaultData(): { [ id: string ]: any }
      function clearDefaultData(): void
      function displayInDialog(isVisibleInDialog: boolean): void
      function processQuery(values: any): Promise<void>
    }

    namespace Event {
      namespace Main{
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
          * // log a message in the console once the application is loaded
          * JMap.Application.Event.Main.on.appReady(
          *    "custom-app-ready", 
          *     () => {
          *      if(JMap.User.getToken() !== "-1"){
          *        console.log(`Logged in username is: "${JMap.User.getUsername()}"`)
          *      }else{
          *        console.log(`No user logged in`)
          *      }
          * })
          * ```
           */
          function appReady(listenerId: string, fn: () => void): void
        }
      }
      namespace UI {
        namespace on {
          function sizeChanged(listenerId: string, fn: (params: JAppEventSizeParams) => void): void
        }
      }
    }

    namespace User {
      /**
       * **JMap.Application.User.addPopupMenuAction**
       * 
       * Add an action to the JMap User menu (visible in the project selection panel).
       * 
       * An action must set the "href" OR the "onCLick" methods, but not both.
       * 
       * @param action : the action to add
       * @param index : will insert at a specific index in the menu. Start at 0. If index is not correct insert at the end
       * @example ```ts
       * 
       * JMap.Application.User.addPopupMenuAction({
       *   icon: "fas fa-info-circle",
       *   label: "Custom documentation",
       *   isHelp: true, // if true will be displayed in the JMap help menu
       *   onClick: () => window.open("https://link-to-my-documentation", "_blanck")
       * }, 2)
       * ```
       */
      function addPopupMenuAction(action: JAppUserAction, index?: number): void
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
       * ***JMap.Message.error***
       * 
       * Adds an error message in the application's messages stack for the current session
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "This operation is not allowed"
       * JMap.Message.error(message, { duration: 5000 })
       * ```
       * 
       */
      function error(message: string, options?: JAppMessageOptions): void

      /**
       * ***JMap.Message.warning***
       * 
       * Adds an warning message in the application's messages stack for the current session
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "This operation has no effect"
       * JMap.Message.warning(message, { duration: 5000 })
       * ```
       * 
       */
      function warning(message: string, options?: JAppMessageOptions): void
      
      /**
       * ***JMap.Message.info***
       * 
       * Adds an info message in the application's messages stack for the current session
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "You are here"
       * JMap.Message.info(message, { duration: 5000 })
       * ```
       * 
       */
      function info(message: string, options?: JAppMessageOptions): void
      
      /**
       * ***JMap.Message.success***
       * 
       * Adds an success message in the application's messages stack for the current session
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "The operation was successful"
       * JMap.Message.success(message, { duration: 5000 })
       * ```
       * 
       */
      function success(message: string, options?: JAppMessageOptions): void
      
      /**
       * ***JMap.Message.display***
       * 
       * Adds an generic message in the application's messages stack for the current session
       * severity level should be passed (will default to "info")
       * 
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example ```ts
       * 
       * const message = "The operation has failed"
       * const level:JAppMessageSeverity = "error"
       * JMap.Message.display(message, { duration: 5000 , severity: level})
       * ```
       * 
       */
      function display(message: string, options?: JAppMessageOptions): void
    
    }
  }
}
