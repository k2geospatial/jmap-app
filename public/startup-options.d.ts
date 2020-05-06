declare interface JCoreOptions {
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
   *      window.JMAP_OPTIONS = {
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
   *    <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-core-js@0.5.0/public/index.js"></script>
   *    <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-app-js@0.1.1/public/index.js"></script>
   *   </body>
   * </html>
   * 
   * ```
   */
  application?: JApplicationOptions
}

declare interface JApplicationOptions {
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
   *       window.JMAP_OPTIONS = {
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
   * If no container is found in the DOM with the specified id, JMap Application will create and append it automatically in the body element of the web page.
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
   *       window.JMAP_OPTIONS = {
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
   *       window.JMAP_OPTIONS = {
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
   *       window.JMAP_OPTIONS = {
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
   * But if ***panel*** is defined, it will display the corresponding panel on the screen.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         application: {
   *           panel: "project",
   *           ...
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  panel?: string

  /**
   * The application have multiple panels available by default : "project", "layer", "selection", "measure", "draw", "search", "add-feature", "print", "user"
   * 
   * But you can tell the JMap application to disabled some panels. If a panel is disabled it will disappear on the left menu.
   * 
   * The ***disabledPanels*** parameter is an array with the panel ids you want to be disabled.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         application: {
   *           disabledPanels: [ "measure", "print" ],
   *           ...
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  disabledPanels?: string[]

  /**
   * If provided this function will be processed each time the application is ready :
   *  - A valid user session is set
   *  - A project is selected
   *  - The main menu is rendered
   * 
   * It could be called multiple times, if the user change the project, or the user logout and login.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         application: {
   *           onAppLoad: () => console.log("App is ready !"),
   *           ...
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  onAppLoad?: () => void

  /**
   * If provided this function will be processed each time the application is not loaded anymore :
   *  - User session token become invalid
   *  - Project is changed and app is loading the new one
   * 
   * It could be called multiple times.
   * 
   * ```html
   * <html>
   *   ...
   *   <body>
   *     <script type="text/javascript">
   *       window.JMAP_OPTIONS = {
   *         ...
   *         application: {
   *           onAppUnload: () => console.log("App is not ready anymore !"),
   *           ...
   *         }
   *       }
   *     </script>
   *     ...
   *   </body>
   * </html>
   * ```
   */
  onAppUnload?: () => void

  /**
   * You can provide your own application extensions.
   * 
   * This mechanism offer a way to add your own panel, map interactor, redux store data, etc ...
   * 
   * You can fully customize the JMap application with your own code, written with your favourite dev tools.
   */
  extensions?: JAppExtension[]
}
