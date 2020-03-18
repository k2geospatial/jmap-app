This example below will show you how to start a JMap application in a custom div in your website :

![Embedded application](./images/embedded.png "Embedded application")

For a live demo, click on this [link](http://jsfiddle.net/K2Geospatial/uaksoLm9/48/).

This example will use one of our demo server, but you need to adapt the restBaseUrl parameter to reach your JMap server.

This example is simple and the user is authenticated as an anonymous user.

Notice :

  - CSS : The div that will contain the JMap application must have a "relative" or "absolute" position. You also need to make the overflow hidden.
  - The HTML page that contains this code has to be served by a server, it will not works if you copy/paste it in a browser and open the html file locally due to browser security check. 

Bellow the example :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta charset="UTF-8">
    <style>
      #my-custom-app {
        position: relative;
        overflow: hidden;
        margin-left: 50px;
        margin-top: 50px;
        width: 700px;
        height: 600px;
        border: 1px solid grey;
      }
    </style>
  </head>
  <body>
  	<div id="my-custom-app"></div>
    <script type="text/javascript">
      window.JMAP_OPTIONS = {
        projectId: 35,
        restBaseUrl: "https://jmap7dev.jmaponline.net/services/rest/v2.0",
        noSessionExpiration: true,
        anonymous: true,
        map: {
          zoom: 9.757829447748511,
          center: {
            x: -73.75415865898597,
            y: 45.53583011032552
          }
        },
        application: {
          containerId: "my-custom-app"
        }
      }
    </script>
    <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-core-js@0.5.0/public/index.js"></script>
    <script defer type="text/javascript" src="https://cdn.jsdelivr.net/npm/jmap-app-js@0.1.1/public/index.js"></script>
  </body>
</html>
```
