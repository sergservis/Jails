# Jails API
<!--{h1:.massive-header.-with-tagline}-->

> Static Methods

# Api

#### .start( [`HtmlElement`] )
> Start jails internal Scanner, which will scan entire html and instantiate the components.
It accepts an `HTMLElement` holder to specify which part of document it should look for components and instantiate.

#### .destroy( `HTMLElement`, [CssSelector] )
> Destroy all the events attached to that Node, and fires the `.destroy()` component method.

#### .events - `.on()`, `.off()`, `.trigger()`
> Jails events object has `.on()`, `.off()`, `.trigger()` methods for events, also used on Components interface.
You can bypass these events making an *adapter*, using jQuery if you will.

*Arguments* : **(HTMLElement, String Event, Function callback)**

#### .publish( `String`, [`Any`]) / .subscribe( `String`, `Function`)
> The same `.publish()` and `.subscribe()` events used on components interface, you can use it on third-party modules using the pub/sub pattern.

#### .use( `Function` )
> Some middlewares must use `jails` to decorate it with new methods/properties to push new functionalities, `.use` is the interface to plug-in those modules, like `Loggers`, `Adapters`. Example:

```js
jails.use( logger() )
jails.use( adapter(jQuery) )
```
