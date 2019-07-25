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

    /**
     * **JMap.Application.getMode**
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
    function getMode(): API_MODE

    /**
     * **JMap.Application.getAllModes**
     * 
     * Returns all available application modes (see [[API_MODE]]).
     * 
     * @example ```ts
     * 
     * // returns all available API modes
     * JMap.Application.getAllModes()
     * ```
     */
    function getAllModes(): API_MODE[]
    
    /**
     * **JMap.Application.setMode**
     * 
     * Change the JMap application mode.
     * 
     * @param mode The new application mode to apply
     * @example ```ts
     * 
     * // set the JMAp application mode to "layer"
     * JMap.Application.setMode("layer")
     * ```
     */
    function setMode(mode: API_MODE): void

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
         * **JMap.Application.UI.SidePanel.isOpen**
         * 
         * Returns true if the JMAP application main panel on the left is opened.
         * 
         * @example ```ts
         * 
         * // returns true if side panel is opened
         * JMap.Application.UI.SidePanel.isOpen()
         * ```
         */
        function isOpen(): boolean
  
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
    }
  }
}
