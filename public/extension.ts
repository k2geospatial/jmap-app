/**
 * You can create a custom application panel throught the app extension mecanism.
 * 
 * It offers a way to add your own panel, map interactor, redux store data, etc ...
 * 
 * This way you can fully customize your JMap application with your own code, written with your favourite dev tools.
 */
declare interface JAppExtension {
  /**
   * The extension id.
   * This id must be unique.
   * An error is thrown if a core extension have the same id.
   */
  id: string
  /**
   * The panel icon.
   * An url (png, jpeg, svg, etc ...) or a base 64 string, as you like.
   */
  panelIcon: string
  /**
   * The panel icon tooltip.
   */
  panelTooltip: string | JTranslationItem
  /**
   * The panel creation method.
   * 
   * This is where you have to :
   *  - Create your panel UI
   *  - Add your listeners (like Redux subscribe)
   *  - ect ...
   * 
   * This method is called each time the panel is :
   *  - Created : after a panel change
   *  - Displayed : after the panel is displayed after been hidden
   * 
   * @param panelContainerId The html container id where you can insert your application.
   */
  onPanelCreation: (panelContainerId: string) => void
  /**
   * The panel destroy method.
   * 
   * This is where you have to :
   *  - Destroy the panel UI (if not yet done).
   *  - Remove your listeners (like Redux unsubscribe)
   *  - etc ...
   * 
   * This method is called each time the panel is :
   *  - Destroyed : after a panel change (panelContainerId div doesn't exist when called)
   *  - Hidden : when the panel is hidden (panelContainerId div still exist when called)
   * 
   * @param panelContainerId The html container id where you can insert your application.
   */
  onPanelDestroy?: (panelContainerId: string) => void
  /**
   * The panel title.
   * 
   * If provided, will create a header on top of the panel having
   * the same style of the others panels headers.
   */
  panelTitle?: string | JTranslationItem
  /**
   * An optional map interactor.
   * 
   * See [[JMap.Service.Map.Interaction]] for more details.
   */
  interactor?: JMapInteractor
  /**
   * If you want you can expose a public service.
   * 
   * If your extension id is "MyExtension", your service will be accessible like that :
   * ```ts
   * JMap.Extension.MyExtension.doSomething()
   * ```
   */
  serviceToExpose?: any
  /**
   * An optional init function, called when the core library is ready.
   * 
   * Do not use this function to create the UI because this function is called before
   * app UI is ready.
   * 
   * Here you can initialize your data.
   */
  initFn?: (options?: any) => void
  /**
   * You can provide your own Redux store reducer : https://redux.js.org/basics/reducers.
   * 
   * See [[JCoreExtension.storeReducer]] for more details.
   */
  storeReducer?: (reducerState: any, action: any) => any
  /**
   * You can provide a renderMouseOver function.
   * 
   * See [[JCoreExtension.renderMouseOver]] for more details.
   */
  renderMouseOver?(layer: JLayer, feature: any): JExtensionMouseOver
  
  /**
   * You can provide a translation bundle for your extesion. All translations will be handled by the JMap NG
   * translation engine. See [[JMap.Language.addBundle]] for more details on bundles
   */
  translationBundle?: JTranslationBundle
}
