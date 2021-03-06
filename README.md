<p align="center"><img src="http://jails-org.github.io/Jails/assets/jails.svg" width="140" /></p>
<br />
<br />

> Jails is a javascript micro-library for building simple and large scale applications without a huge stack dependencies. It follows the old-school phylosophy regarding separation of concerns, non-obstructive, and reactive.

<br />

[![npm version](https://badge.fury.io/js/jails-js.svg)](https://badge.fury.io/js/jails-js)

<br />

## Creating a Component

### Markup

```html
<form class="form" data-component="form">
    <input type="text" name="message" />
    <button>Send</button>
</form>

```

### Javascript
```js
jails('form', ( {init, on} ) =>{

    init(()=>{
        on('change', {'input':onChange })
    })

    const onChange = (e)=>{
        console.log('Hey, some input has changed')
    }
})
```
---

## Init using a set of functions
```js
    jails('form', ({init}) =>{
        
        init(()=>[
            register,
            log
        ])
        
        const register = ({on})=> // It get all component interfaces
            on('change', {'input':onChange})
            
        const log = ()=>
            console.log('Component is ready')
            
        const onChange = e =>
            console.log('Hey, now I am using another way to init =)')

    })
```

## Component relashionships

### Passive way

Components can relate to each other using `events`:

- `.on()` : The same interface of jQuery to bind dom events.
- `.emit()` : Fires the custom *DOM* event.
- `.publish()` : Publish globally to every component in the page.
- `.subscribe()` : Subscribe to any global events.
- `.get()` : Get a function reference to a component.

#### Examples

Component A listen to Component B

```html
<div data-component="A">
    <div data-component="B">
        <button>Ok</button>
    </div>
</div>
```

*Component A*
```js
jails('A', ({init, on})=>{

    init(()=>{
        on('mycustomclick', {'[data-component*=B]':e => console.log(e) })
    })
})
```

*Component B*
```js
jails('B', ({init, on, emit}) =>{

    init(()=>{
        on('click', {'.button' :emitClick})
    })

    let emitClick = (e)=>{
        emit('mycustomclick', e)
    }
})
```

### Active way

You can execute a public component method through other component.


#### Examples

Component A executes Component B public method.

```html
<div data-component="A">
    <div data-component="B">
        <button>Ok</button>
    </div>
</div>
```

*Component A*
```js
jails('A', ({init, get})=>{

    //Getting B reference
    let B = get('B')

    init(()=>{
        B('update', { someOption:'bla bla bla' })
    })
})
```

*Component B*

```js
jails('B', ( {init, expose, publish} )=>{

    init(()=>{
        expose({ update })
    })

    const update = ( option )=>{
        console.log( option ) // { someOption:'bla bla bla' }
        publish('messageToALL', someOption) // Sends data to any component subscribed to 'messageToALL'.
    }

})
```

The `.get()` functions do not returns an instance, but a reference instead which is a `Function`. That's because you can have several components in the markup, all of them should execute the public method without the looping concerns:


```html
<div data-component="A">
    <p data-component="B"></p>
    <p data-component="B"></p>
    <p data-component="B"></p>
    <button>Ok</button>
</div>
```

`.get( String name, [CssSelector] )` method expects a `CssSelector` in last parameter, so that way you can grab the exactly component you want:

```html
<div data-component="A">
    <p data-component="B"></p>
    <p class="only-this-one" data-component="B"></p>
    <p data-component="B"></p>
    <button>Ok</button>
</div>
```

*Component A*
```js
jails('A', ({init, get})=>{

    //Getting B reference
    let B = get('B', '.only-this-one')

    init(()=>{
        B('update', { someOption:'bla bla bla' }) // Only the second component will call .update() method.
    })
})
```
---

## Good to know

Components can live in the same markup:

```html
<div data-component="Z">
    <div class="dialog" data-component="modal view">
        <p>Hello {username}</p>
    </div>
</div>
```

```js
jails('Z', ( {init, get} )=>{

    let dialog = get('modal')

    init(()=>{
        dialog('update', { username:'Clark Kent' })
    })
})
```

---

## Annotations & Properties

You can get all html `attributes`, `data-attributes` calling `props()`, and also the unique jails @annotations, by
using the `annotations()` function helper.

```html
    <!--@my-component({ target:'.other-element' })-->
    <a href="#" id="my-link" data-component="my-component">
        My Link component
    </a>
```

```js
    jails('my-component', ({init, annotations, props})=>{

        init(()=>{
            console.log( annotations('target') ) // '.other-element'
            console.log( props('id') ) // "my-link"
            console.log( props('data').component ) // "my-component"
        })
    })
```

Annotations is just a special comment, the name of component should be referenced in the comment using `@` prefix.
In the case with 2 or more components in the same markup:

```html
    <!--
        @A({  })
        @B({  })
        @C({  })
    -->
    <a href="#" data-component="A B C">
        My Link component
    </a>
```

**Annotations are optional, if you don't like to mix html comments with your js code, simply don't use it. =)**


---

## Api - Components

#### .elm
> The `htmlElement` node.

#### .on( Event, Function )
> Bind DOM events on the component itself.

#### .on( Event, Object )
> Event delegation, bind DOM events on component child nodes.
E.g `.on('submit', {'form':callback }) `

#### .off( Event, Function )
> Removes an event handler, just like `jQuery` api.

#### .trigger( event, [String target, Object args] )
> Trigger dom events on component element or a component child.

Example:

`.trigger('click', 'button', {ischildnode:true})`

`.trigger('click', {isparent:true})`


#### .props( [String key] )
> Get a single property or a set of `htmlElement` properties.

#### .annotations( [String key] )
> Get a single property or a set of `@annotations` properties.

#### .emit( action, [ data ] )
> Emit a custom event to be bubbled in the DOM tree.

#### .expose( Object )
> Set a map of functions to be public.

#### .get( String, [ CssSelector ] )
> Creates a reference to components, and returns a function, it accepts the name of public method and arguments to be sent as event. The previous example code illustrates that.

#### .publish( Event, [args] )
> Fires a global event to the ecosystem, very recommended to communicate Controllers and Apps with each other.

#### .subscribe( Event, Function ) : Function unsubscribe
> Subscribes the Controller/App to a global event. Returns a function to unsubscribe if necessary.


## Api - Jails

#### Jails.start( [container] )
> Starts jails scanner in the container or in `document.documentElement` if no container is passed.
It will find all `data-component` elements and start them calling `.init()` function. `jails` knows if an element is already started, so it won't create a new instance if the element is already started.

#### Jails.destroy( Node )
> Destroy all the events attached to that Node, and fires the `:destroy` custom event.

#### Jails.events
> Jails events object has `.on()`, `.off()`, `.trigger()` methods for events, also used on Components interface.
You can bypass these events making an *adapter*, using jQuery if you will.

#### Jails.publish( string, :any) &
#### Jails.subscribe( string, Function )
> The same `.publish()` and `.subscribe()` events used on components interface, you can use it on third-party modules using the pub/sub pattern.

#### Jails.component( String name, HTMLElement node, Function fn )
> Function used internally to create the `component` interface passing the name and the node element along.
It's not usefull at development, it's intended to be used as a hoc interface to third-party libraries/modules, like a `logger` for instance.

---

## Browser support
- IE10 + and Modern Browsers
- IE8+ and Legacy Browsers using `jails.legacy.js`.
