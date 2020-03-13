declare interface JAPIOptions {
  /**
   * This section is about the JMap application startup options.
   * 
   * An example of how to configure the application startup options :
   * @example ```html
   * <html>
   *   ...
   *   <body>
   *    <div id="custom-app"></div>
   *    <script>
   *      window.JMAP_API_OPTIONS = {
   *        projectId: 10,
   *        restBaseUrl: "http://my-jmap-server/services/rest/v2.0",
   *        session: {
   *          token: 2345677654
   *        },
   *        application: {
   *          // will create the application in the div id="custom-app"
   *          containerId: "custom-app"
   *        }
   *      }
   *    </script>
   *    ...
   *    <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-js-api@0.3.6/public/index.js"></script>
   *    <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-js-app@0.0.2/public/index.js"></script>
   *   </body>
   * </html>
   * 
   * ```
   */
  application?: JAPIApplicationOptions
}

declare interface JAPIApplicationOptions {
  /**
   * When the application start it will create or use an existing div container in which the app will be inserted into.
   * 
   * All application dom elements will be inserted inside this div.
   * 
   * By default the div container id is "***jmap-app***", but you can set the id of your choice like that :
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <div id="my-custom-container-id"></div>
   *     <script type="text/javascript">
   *       window.JMAP_API_OPTIONS = {
   *         ...
   *         application: {
   *           containerId: "my-custom-container-id"
   *         }
   *       }
   *     </script>
   *     ...
   *  </body>
   * </html>
   * ```
   *
   * In the above example the application will be inserted in the div having "my-custom-container-id" as id. You need to set the width and the height of this div by yourself.
   * 
   * If no container is found in the DOM with the specified id, JMap API will create and append it automatically in the body element of the web page.
   */
  containerId?: string

  /**
   * Set a custom application background image, by default the JMap background is displayed.
   * Background image is used for login screen, project selection, or when loading a project.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_API_OPTIONS = {
   *         ...
   *         application: {
   *           backgroundImageUrl: "https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
   *           ...
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  backgroundImageUrl?: string

  /**
   * Set a custom application logo, by default the JMap logo is displayed.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_API_OPTIONS = {
   *         ...
   *         application: {
   *           backgroundImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Atari_logo.svg/640px-Atari_logo.svg.png",
   *           ...
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  logoImageUrl?: string

  /**
   * Set the UI theme as dark or light.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_API_OPTIONS = {
   *         ...
   *         application: {
   *           theme: "dark",
   *           ...
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  theme?: "dark" | "light"

  /**
   * By default the active panel (the one displayed), is the "layer" panel.
   * 
   * Standard application panels ids are : "project", "layer", "selection", "measure", "mapcontext", "print", "user".
   * 
   * But if ***activePanelId*** is defined, it will display the corresponding panel on the screen.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_API_OPTIONS = {
   *         ...
   *         application: {
   *           activePanelId: "project",
   *           ...
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  activePanelId?: string

  /**
   * The application have multiple panels available by default : "project", "layer", "selection", "measure", "draw", "search", "add-feature", "print", "user"
   * 
   * But you can tell the JMap application to disabled some panels. If a panel is disabled it will disappear on the left menu.
   * 
   * The ***disabledPanelIds*** parameter is an array with the panel ids you want to be disabled.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_API_OPTIONS = {
   *         ...
   *         application: {
   *           disabledPanelIds: [ "measure", "print" ],
   *           ...
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  disabledPanelIds?: string[]
}
