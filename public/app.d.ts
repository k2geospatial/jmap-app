declare namespace JMap {

  /**
   * **JMap.Application**
   * 
   * In this section you will find everything related to the **JMap Application**.
   * 
   * To configure the **JMap library** in your web page, you can consult the [[JMap]] namespace page.
   * 
   * To configure the **JMap application** in your web page, you can consult the demo pages :
   * 
   *   - [An application embedded in a div in a page of your website](https://github.com/k2geospatial/jmap-app/blob/master/example/v0.1.29/example-embedded.md)
   *   - [An application displayed full screen](https://github.com/k2geospatial/jmap-app/blob/master/example/v0.1.29/example-full-page.md)
   * 
   * You can also consult the application startup options [[JAPIApplicationOptions]], in order to customize it for you needs.
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
     * **JMap.Application.openDocumentation**
     * 
     * Open JMap Application online documentation, in a new tab.
     * 
     * @example ```ts
     * 
     * // open JMap Application online documentation, in a new tab
     * JMap.Application.openDocumentation()
     * ```
     */
    function openDocumentation(): void
    
    /**
     * **JMap.Application.Panel**
     * 
     * You can manage the application panels here.
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
       * // returns all available API panels
       * JMap.Application.Panel.getAll()
       * ```
       */
      function getAll(): JAppPanel[]
      
      /**
       * **JMap.Application.Panel.activate**
       * 
       * Change the JMap application mode.
       * 
       * @param panelId The new application panel to activate
       * @example ```ts
       * 
       * // will activate and display the "layer" panel
       * JMap.Application.Panel.activate("layer")
       * ```
       */
      function activate(panelId: string): void
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
       * **JMap.Application.Measure.activateDeleting**
       * 
       * Activate the measurement deleting tool to delete a measure when we click on it.
       * 
       * @example ```ts
       * 
       * // activate deleting measure mode
       * JMap.Application.Measure.activateDeleting()
       * ```
       */
      function activateDeleting(): void

      /**
       * **JMap.Application.Measure.deleteAllMeasures**
       * 
       * Delete all measures on the map.
       * 
       * @example ```ts
       * 
       * // Delete all measures on the map
       * JMap.Application.Measure.deleteAllMeasures()
       * ```
       */
      function deleteAllMeasures(): void
      
      /**
       * **JMap.Application.Measure.cancelCurrentMeasure**
       * 
       * Cancel the current drawn measure
       * 
       * @example ```ts
       * 
       * // Remove current measure from the map
       * JMap.Application.Measure.cancelCurrentMeasure()
       * ```
       */
      function cancelCurrentMeasure(): void
      
      /**
       * **JMap.Application.Measure.deleteMeasureAtLocation**
       * 
       * Delete a measure at a specific location
       * @param location The mapbox location on the map in x, y
       * @example ```ts
       * 
       * // Delete measure at location x = 20, y = 30
       * JMap.Application.Measure.deleteMeasureAtLocation({x: 20, y: 30})
       * ```
       */
      function deleteMeasureAtLocation(location: JLocation): void
      
      /**
       * **JMap.Application.Measure.finalizeMeasure**
       * 
       * Finalize drawing the current measure
       * 
       * @example ```ts
       * 
       * // Finalize drawing the current measure
       * JMap.Application.Measure.finalizeMeasure()
       * ```
       */
      function finalizeMeasure(): void
    }
    
    /**
     * **JMap.Application.Selection**
     * 
     * You can manage the application selection tools here.
     */
    namespace Selection {

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
       * **JMap.Application.Selection.cancelSelection**
       * 
       * Cancel the current drawn selection
       * @example ```ts
       * // Cancel the current drawn selection
       * JMap.Application.Measure.cancelSelection()
       * ```
       */
      function cancelSelection(): void
      
      /**
       * **JMap.Application.Selection.getCurrentDrawnSelectionContent**
       * 
       * Returns the current selection data for the drawn selection and add it to the store
       * @example ```ts
       * // Get the selection data for the drawn selection
       * JMap.Application.Measure.getCurrentDrawnSelectionContent()
       * ```
       */
      function getCurrentDrawnSelectionContent(): {[ layerId: number ]: any[]}
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
       * **JMap.Application.Layer.getActiveTab**
       * 
       * Returns layer panel active tab id.
       * @example ```ts
       * 
       * // returns the active tab for the layer layout
       * JMap.Application.Layer.getActiveTab()
       * ```
       */
      function getActiveTab(): JAppLayerTab

      /**
       * **JMap.Application.Layer.activateTab**
       * 
       * Activate the provided tab in the layer panel.
       * @param tab the tab id to activate
       * @example ```ts
       * 
       * // activate the "base-map" tab in the layer tab
       * JMap.Application.Layer.activateTab("base-map")
       * ```
       */
      function activateTab(tab: JAppLayerTab): void
    }

    /**
     * **JMap.Application.MapContext**
     * 
     * You can manage the map context panel here.
     */
    namespace MapContext {

      /**
       * **JMap.Application.MapContext.toggleMapContextSharing**
       * 
       * returns the current draft context id
       * @example ```ts
       * 
       * // returns the current draft context id
       * JMap.Application.MapContext.getDraftContextId()
       * ```
       */
      function getDraftContextId(): number | undefined

      /**
       * **JMap.Application.MapContext.getDraftContextTitle**
       * 
       * returns the current draft context title
       * @example ```ts
       * 
       * // returns the current draft context title
       * JMap.Application.MapContext.getDraftContextTitle()
       * ```
       */
      function getDraftContextTitle(): string

      /**
       * **JMap.Application.MapContext.getDraftContextDescription**
       * 
       * returns the current draft context description
       * @example ```ts
       * 
       * // returns the current draft context description
       * JMap.Application.MapContext.getDraftContextDescription()
       * ```
       */
      function getDraftContextDescription(): string

      /**
       * **JMap.Application.MapContext.getAllContexts**
       * 
       * returns all loaded map contexts for the current project
       * @example ```ts
       * 
       * // returns all loaded map contexts for the current project
       * JMap.Application.MapContext.getAllContexts()
       * ```
       */

      function getAllContexts(): JMapContext[]

      /**
       * **JMap.Application.MapContext.getDefaultContextId**
       * 
       * returns the default map context id for the current project
       * @example ```ts
       * 
       * // returns the default map context id for the current project
       * JMap.Application.MapContext.getDefaultContextId()
       * ```
       */
      function getDefaultContextId(): number | undefined

      /**
       * **JMap.Application.MapContext.getSelectedContextId**
       * 
       * returns the selected map context id for the current project
       * @example ```ts
       * 
       * // returns the selected map context id for the current project
       * JMap.Application.MapContext.getSelectedContextId()
       * ```
       */
      function getSelectedContextId(): number | undefined

      /**
       * **JMap.Application.MapContext.setDefaultMapContext**
       * 
       * Set a map context to be default
       * @param mapContextId The map context id to apply
       * @example ```ts
       * 
       * // change the default map context for the id 1304358411192
       * JMap.Application.MapContext.setDefaultMapContext(1304358411192)
       * ```
       */
      function setDefaultMapContext(contextId?: number): void

      /**
       * **JMap.Application.MapContext.setDraftContextId**
       * 
       * Set a map context to be in draft mode
       * @param mapContextId The map context id to apply
       * @example ```ts
       * 
       * // Set the map context to be in draft mode for the id 1304358411192
       * JMap.Application.MapContext.setDraftContextId(1304358411192)
       * ```
       */
      function setDraftContextId(mapContextId?: number): void

      /**
       * **JMap.Application.MapContext.setDraftContextTitle**
       * 
       * Set a title to the map context currently in draft
       * @param title The title to apply
       * @example ```ts
       * 
       * // Set the title "Montreal" to the map context currently in draft
       * JMap.Application.MapContext.setDraftContextTitle("Montreal")
       * ```
       */
      function setDraftContextTitle(title: string): void

      /**
       * **JMap.Application.MapContext.setDraftContextDescription**
       * 
       * Set a description to the map context currently in draft
       * @param title The description to apply
       * @example ```ts
       * 
       * // Set the description "Measures on new buildings" to the map context currently in draft
       * JMap.Application.MapContext.setDraftContextDescription("Measures on new buildings")
       * ```
       */
      function setDraftContextDescription(description: string): void

      /**
       * **JMap.Application.MapContext.selectMapContext**
       * 
       * Select a mapContext
       * @param mapContextId The context id to select
       * @example ```ts
       * 
       * // select the context for the id 1304358411192
       * JMap.Application.MapContext.selectMapContext(1304358411192)
       * ```
       */
      function selectMapContext(mapContextId: number): void

      /**
       * **JMap.Application.MapContext.saveDraftContext**
       * 
       * Save the current draft map context
       * @example ```ts
       * 
       * // Save the current draft context
       * JMap.Application.MapContext.saveDraftContext()
       * ```
       */
      function saveDraftContext(): void
      
      /**
       * **JMap.Application.MapContext.requestMapContexts**
       * 
       * Get all map contexts for the current projectId
       * @example ```ts
       * 
       * // Get all mapContexts for the current projectId
       * JMap.Application.MapContext.requestMapContexts()
       * ```
       */
      function requestMapContexts(): void
      
      /**
       * **JMap.Application.MapContext.deleteMapContext**
       * 
       * Delete a map context
       * @param mapContextId The context id to delete
       * @example ```ts
       * 
       * // Delete the context for the id 1304358411192
       * JMap.Application.MapContext.deleteMapContext(1304358411192)
       * ```
       */
      function deleteMapContext(mapContextId: number | number[]): void

      /**
       * **JMap.Application.MapContext.toggleMapContextSharing**
       * 
       * Toggle sharing for a map context
       * @param mapContextId The context id to toggle sharing
       * @example ```ts
       * 
       * // toggle sharing for the map context id 1304358411192
       * JMap.Application.MapContext.toggleMapContextSharing(1304358411192)
       * ```
       */
      function toggleMapContextSharing(mapContextId: number): void
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
         * @param open if true show the panel, else hide it
         * @example ```ts
         * 
         * // Show the left side panel
         * JMap.Application.UI.Sidepanel.setVisible(true)
         * 
         * // Hide the left side panel
         * JMap.Application.UI.Sidepanel.setVisible(false)
         * ```
         */
        function setVisible(open: boolean): void
  
        /**
         * **JMap.Application.UI.SidePanel.isVisible**
         * 
         * Returns true if the JMAP application main panel on the left is opened.
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
         * Change the JMAP application main panel on the left visibility.
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
  }
}
