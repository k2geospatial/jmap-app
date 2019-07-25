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
 *   </head>
 *   <body>
 *     <script type="text/javascript">
 *     const url = new URL(window.location.href)
 *     const token = url.searchParams.get("token")
 *     let projectId = Number(url.searchParams.get("projectId"))
 *    if (isNaN(projectId)) {
 *       projectId = 0
 *     }
 *     window.JMAP_API_OPTIONS = {
 *       projectId: projectId,
 *       restBaseUrl: "http://jmapserver/services/rest/v2.0",
 *       noSessionExpiration: true,
 *       map: {
 *         mapboxToken: "xx.xx.xx",
 *       }
 *     }
 *     if (token !== null && token !== undefined && !isNaN(token)) {
 *       window.JMAP_API_OPTIONS.session = {
 *         token: token,
 *         user: {
 *           username: "jdo@mycompany.com",
 *           fullName: "John do",
 *           admin: false
 *         }
 *       }
 *     }
 *     </script>
 *     <script defer type="text/javascript"
 *             src="https://cdn.jsdelivr.net/npm/jmap-api-ng@x.x.x/public/index.js"></script>
 *     <script defer type="text/javascript"
 *             src="https://cdn.jsdelivr.net/npm/jmap-app@x.x.x/public/index.js"></script>
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
   * }
   * ```
   */
  application?: JAPIApplicationOptions
}

declare interface JAPIApplicationOptions {
  /**
   * The JMap application DOM div container id.
   * 
   * Default is "jmap-app"
   */
  containerId: string
}
