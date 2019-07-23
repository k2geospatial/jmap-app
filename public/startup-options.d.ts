declare interface Window {
  JMAP_API_OPTIONS?: JAppOptions
}

/**
 * The JMAP API startup options.
 * 
 * You can customize the JMap Web API by setting startup options.
 * 
 * This options has to be defined before evaluating the JMAP Web API js file :
 * ```html
 * <!DOCTYPE html>
 * <html class="jmap_wrapper">
 *   <head>
 *     <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
 *     <meta charset="UTF-8">
 *     <style>
 *       html {
 *         min-width: 100%;
 *         max-width: 100%;
 *         min-height: 100%;
 *         max-height: 100%;
 *       }
 *     </style>
 *   </head>
 *   <body>
 *     <div id="jmap-map"></div>
 *     <div id="app"></div>
 *    <script type="text/javascript">
 *       const url = new URL(window.location.href)
 *       const token = url.searchParams.get("token")
 *       let projectId = Number(url.searchParams.get("projectId"))
 *       if (isNaN(projectId)) {
 *         projectId = 0
 *       }
 *       window.JMAP_API_OPTIONS = {
 *        // all api options before
 *        application: {
 *          
 *        }
 *       }
 *     </script>
 *     <script defer
 *        type="text/javascript"
 *        src="http://localhost:8080/services/jmap-api/resources/index.js">
 *     </script>
 *     <script defer
 *        type="text/javascript"
 *        src="http://localhost:8080/services/jmap-app/resources/index.js">
 *     </script>
 *   </body>
 * </html>
 * ```
 */

declare interface JAppOptions extends JAPIOptions {
  /**
   * The JMap application options
   * 
   * @example ```ts
   * 
   * application: {
   *  containerId: "jmap-app", // will create the application in the div id="jmap-app"
   *  start: true // will start the application on startup
   * }
   * ```
   */
  application?: JAPIApplicationOptions
}

declare interface JAPIApplicationOptions {
  /**
   * If true the application will start automatically at startup.
   * 
   * Else you'll have to start it from the API ([[JMap.Service.Application.start]])
   * after JMAp has been started.
   */
  start: boolean
  /**
   * The JMap application DOM div container id.
   * 
   * Default is "jmap-app"
   */
  containerId: string
}
