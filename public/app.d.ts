import { JMapContext } from "../index"
/**
 * JMap API application.
 * 
 * All references to JMAP API application will start by ***JMap,Application***.
 * 
 * For example :
 * ```ts
 * // returns the API build version.
 * JMap.Application
 * ```
 */
declare namespace JMap {

  /**
   * **JMap.Application**
   * 
   * Here are JMap application related method.
   * 
   * JMap API can be started with only the map in the div of your choice, and you can start some JMap component too.
   * 
   * But from this section you will be able to manage the full JMap Web Application.
   */
  namespace Application {
    namespace Mode {

      /**
       * **JMap.Application.Mode.getMode**
       * 
       * Returns the current application mode state.
       * 
       * This mode is mainly used for the JMap application.
       * 
       * @example ```ts
       * 
       * // returns the currently activated API mode
       * JMap.Application.getMode()
       * ```
       */
      function getMode(): JAppMode

      /**
       * **JMap.Application.Mode.getAllModes**
       * 
       * Returns all available application modes (see [[API_MODE]]).
       * 
       * @example ```ts
       * 
       * // returns all available API modes
       * JMap.Application.getAllModes()
       * ```
       */
      function getAllModes(): JAppMode[]
      
      /**
       * **JMap.Application.Mode.setMode**
       * 
       * Change the JMap application mode.
       * 
       * @param modeId The new application mode to apply
       * @example ```ts
       * 
       * // set the JMAp application mode to "layer"
       * JMap.Application.setMode("layer")
       * ```
       */
      function setMode(modeId: string): void
    }

    namespace Measure {
        /**
       * **JMap.Application.Measure.changeCurrentMeasureType**
       * 
       * Change the current type of measure for the drawing measurement tool.
       * @param newMeasureType The new measure type to apply
       * @example ```ts
       * 
       * // change the measure type to length
       * JMap.Application.Measure.changeCurrentMeasureType("length")
       * ```
       */
      function changeCurrentMeasureType(newMeasureType: JAppMeasureType): void

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
      function deleteMeasureAtLocation(location: {x: number, y: number}): void
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
    namespace Selection {
        /**
       * **JMap.Application.Selection.changeCurrentSelectionType**
       * 
       * Change the current type of selection
       * @param newSelectionType The new selection type to apply
       * @example ```ts
       * 
       * // change the selection type to rectangle
       * JMap.Application.Measure.changeCurrentSelectionType("rectangle")
       * ```
       */
      function changeCurrentSelectionType(newSelectionType: JAppSelectionType): void
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
     * **JMap.Application.MapContext.getCurrentSection**
     * 
     * returns the current context side panel section name
     * @example ```ts
     * 
     * // returns the current context side panel section name
     * JMap.Application.MapContext.getCurrentSection()
     * ```
     */
    function getCurrentSection(): JMapContextSectionName
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
     * **JMap.Application.MapContext.setCurrentSection**
     * 
     * Go to a map context side panel section
     * @param mapContextSection The ui section to go to
     * @example ```ts
     * // Go to the map context side panel section "draft"
     * JMap.Application.MapContext.setCurrentSection("draft")
     * ```
     */
    function setCurrentSection(mapContextSection: JMapContextSectionName): void
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
     * **JMap.Application.getDomContainerId**
     * 
     * Returns the DOM div element id where application UI has been inserted.
     * 
     * @example ```ts
     * 
     * // returns the application DOM container id
     * JMap.Application.getDomContainerId()
     * ```
     */
    function getDomContainerId(): string

    /**
     * **JMap.Application.UI**
     * 
     * You can manage the application UI components here.
     */
    namespace UI {

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
        

        /**
         * **JMap.Application.UI.Sidepanel.open**
         * 
         * Display the left application panel if not visible.
         * 
         * Do nothing if it's already visible.
         * 
         * @example ```ts
         * 
         * // Open the application left side panel
         * JMap.Application.UI.Sidepanel.open()
         * ```
         */
        function open(): void
  
        /**
         * **JMap.Application.UI.Sidepanel.open**
         * 
         * Hide the left application panel if visible.
         * 
         * Do nothing if it's already not visible.
         * 
         * @example ```ts
         * 
         * // Close the application left side panel
         * JMap.Application.UI.Sidepanel.close()
         * ```
         */
        function close(): void
      }

      /**
       * **JMap.Application.UI.UserPanel**
       * 
       * You can manage the user panel from here.
       * 
       * This panel is hidden by default.
       * 
       * It appears after clicking the user icon
       * in the bottom of the left side panel.
       * 
       * User login/logout is done from this panel.
       */
      namespace UserPanel {
  
        /**
         * **JMap.Application.UI.UserPanel.setVisible**
         * 
         * Set the user panel visibility.
         * 
         * @param open if true show the panel, else hide it
         * @example ```ts
         * 
         * // Show the user panel
         * JMap.Application.UI.UserPanel.setVisible(true)
         * 
         * // Hide the left side panel
         * JMap.Application.UI.UserPanel.setVisible(false)
         * ```
         */
        function setVisible(open: boolean): void
  
        /**
         * **JMap.Application.UI.UserPanel.isVisible**
         * 
         * Returns true if the user panel is opened.
         * 
         * @example ```ts
         * 
         * // returns true if user panel is opened
         * JMap.Application.UI.UserPanel.isVisible()
         * ```
         */
        function isVisible(): boolean
  
        /**
         * **JMap.Application.UI.UserPanel.toggleVisibility**
         * 
         * Change the user panel visibility.
         * 
         * If the panel is open, it will close.
         * 
         * If the panel is closed, it will open.
         * 
         * @example ```ts
         * 
         * // change the user panel visibility
         * JMap.Application.UI.UserPanel.toggleVisibility()
         * ```
         */
        function toggleVisibility(): void
        

        /**
         * **JMap.Application.UI.UserPanel.open**
         * 
         * Display the user panel, if not visible.
         * 
         * Do nothing if it's already visible.
         * 
         * @example ```ts
         * 
         * // Open the user panel
         * JMap.Application.UI.UserPanel.open()
         * ```
         */
        function open(): void
  
        /**
         * **JMap.Application.UI.UserPanel.open**
         * 
         * Hide the user panel if visible.
         * 
         * Do nothing if it's already not visible.
         * 
         * @example ```ts
         * 
         * // Close the user panel
         * JMap.Application.UI.UserPanel.close()
         * ```
         */
        function close(): void
      }
    }
  }
}
