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
  containerId: string
}
