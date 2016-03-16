# Components
<!--{h1:.massive-header.-with-tagline}-->

> Atoms & Molecules

- All the components are initialized before any other Jails modules.
- Components **should know nothing** about any other organisms in the page.
- They **don't make** ajax calls
- Aim only **UI** issues
- They can only communicate with the world by using `.emit()` interface.
- Use **public methods** when you want to access that later.
- Configurations are welcome whenever is possible

Please, take a look at some official Jails Components at: [jails-org.github.io/Jails/modules](http://jails-org.github.io/Jails/)

## Markup

Just reference which markup should your mixin be applied. Leave the classes to `Css`.

```html
<section data-component="my-component" />
```

## Configurations

Configurations are a good way to give a little dynamic behavior without having to change your `js` code.
You can use the `data` attributes to achieve that.

```html
<section data-component="my-component" data-my-component-target=".some-element" />
```

## Annotations

`data-attribute` can be very verbose, you have to prefix your data attribute to do not collide with other components.
Annotations on html solve that problem, it looks more elegant. Use it if you don't minify your html.

```html
<!--@my-component({ target:'.some-element' })-->
<section data-component="my-component" />
```

```html
<!--
@my-component({ target:'.some-element' })
@other-component({ target:'.some-element' })
-->
<section data-component="my-component, other-component" />
```

## Mixin declaration

Easy to understand, automatic initialize, definitions always on top, gets

```js
jails.component('my-component', function(html, annotation){

    this.init = function(){
        console.log('hey!! I am here!!!');
    };
});
```

## Api

#### .on( Event, Function )
Bind DOM events on the component itself.

#### .on( Event, CssSelector, Function )
Bind DOM events on component child nodes.

#### .off( Event, [Function] )
Unbind events.

#### .trigger( element, event, [args] )
Trigger events on some element. Element is required...

#### .emit( action, [ data ] )
Emit an custom event to the ecosystem.
