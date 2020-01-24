declare interface JAPIOptions {
  /**
   * Contains all JMap application options.
   * 
   * @example ```ts
   * 
   * application: {
   *  // will create the application in the div id="custom-app"
   *  containerId: "custom-app"
   * }
   * ```
   */
  application?: JAPIApplicationOptions
}

declare interface JAPIApplicationOptions {
  /**
   * The JMap application DOM div container id.
   * 
   * Default is "jmap-app".
   */
  containerId?: string
  /**
   * Panel (on the left) id that will be activated.
   * 
   * Standard panels ids are : "project", "layer", "selection", "measure", 
   *                           "draw", "search", "add-feature", "print", "user"
   */
  activePanelId?: string
  /**
   * List of panels (on the left) ids that will be disabled.
   * 
   * Standard panels ids are : "project", "layer", "selection", "measure", 
   *                           "draw", "search", "add-feature", "print", "user"
   */
  disabledPanelIds?: string[]
}
