# Components
<!--{h1:.massive-header.-with-tagline}-->

> HTML & Javascript

- Components can live in the same markup
- Uses ***Event delegation***
- Uses ***Custom events***
- Uses ***Publish & Subscribe*** patterns
- Can execute ***public methods*** of other Components
- ***@Annotations***


## Relashionship

Components can relate to each other using `events`:

- **`on()`** : Listening to DOM events. The same interface of jQuery to bind dom events.
- **`emit()`** : Fires a custom *DOM* event.
- **`publish()`** : Publish a global event to every component in the page.
- **`subscribe()`** : Subscribe to any global events.
- **`get()`** : Get a function reference to a component.


### Listening to events

#### Example

*Component A listen to Component B*

```html
<div data-component="A">
    <div data-component="B">
        <button>Ok</button>
    </div>
</div>
```

Custom events are events using `:` symbol at the beginning.

***Component A*** :
```js
import jails from 'jails-js'

jails('A', ({init, on}) =>{

    init(()=>{
        on(':customclick', e => console.log(e))
    })
})
```

***Component B*** :
```js
import jails from 'jails'

jails('B', ({init, on, emit}) =>{

    init(()=>{
        on('click', {'.button':send})
    })

    const send = e =>{
        emit(':customclick', e)
    }
})
```

Event delegation can be used to specify dispatching element:

```js
import jails from 'jails-js'

jails('A', ({init, on}) =>{

    init(()=>{
        on(':customclick', {'.the-element': (e)=> console.log(e) })
    })
})

```

### Executing another component's method

You can execute a public method through other component getting component with **.get()** function.

#### Example

Component **A** executes Component **B's** public method.

```html
<div data-component="A">
    <div data-component="B">
        <button>Ok</button>
    </div>
</div>
```

***Component A*** :
```js
import jails from 'jails-js'

jails('A', ({init, get}) =>{

    //Getting B reference
    let B = get('B')

    init = ()=>{
        B('update', { someOption:'bla bla bla' })
    }
})
```

***Component B***:

```js
import jails from 'jails'

jails('B', ( {init, expose, publish} ) =>{

    init(()=>{
        //update is private, so you need to expose it, to be visible to other components.
        expose( {update} )
    })

    const update = (option)=>{
        console.log( option ) // { someOption:'bla bla bla' }
        publish('messageToALL', { mydata:'somedata' }) // Sends data to any component subscribed to 'messageToALL'.
    }
})
```

The `.get()` function does not returns an instance, but a reference instead which is a `Function`. That's because you can have several components in the markup, all of them should execute the public method without the looping concerns:


```html
<div data-component="A">
    <p data-component="B"></p>
    <p data-component="B"></p>
    <p data-component="B"></p>
    <button>Ok</button>
</div>
```

`.get( String name [, String CSSSelector] )` method also expects a `CSSSelector` as a second parameter to specify html element:

```html
<div data-component="A">
    <p data-component="B"></p>
    <p class="only-this-one" data-component="B"></p>
    <p data-component="B"></p>
    <button>Ok</button>
</div>
```

```js
import jails from 'jails'

jails('A', ({init, get}) =>{

    //Getting B reference
    let B = get('B', '.only-this-one')

    init(()=>{
        B('update', { someOption:'bla bla bla' }) // Only the second component will call .update() method.
    })
})
```

# Annotations

In order to build a generic component in some cases you need to let it configurable, without changing the source code.
You can use the html data attributes to accomplish that, or you can use Jails `@annotations`.

```html
    <!--@my-component({ target:'.other-element' })-->
    <a href="#" data-component="my-component">
        My Link component
    </a>
```

```js
    jails('my-component', ({init, annotation}) =>{

        init(()=>{
            console.log( annotation.target ) // 'other-element'   
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

## Components - API

#### .init( Function )
> Init is a lazy function that will be called once component is ready. If the callback returns an Array, Jails will execute them in the array order sending all component interface.
```js
//...
init(()=>[
    firstCallback,
    secondCallback,
    //...so on
])

const firstCallback = ({on})=>{
    on('click', ...)
}

const secondCallback = ({subscribe})=>{
    subscribe('something', ()=>{ console.log('something') })
}

// Etc, etc


```

#### .elm
> The `htmlElement` node.

#### .on( Event, Function )
> Bind DOM events on the component itself.

#### .on( Event, Object )
> Event delegation, bind DOM events on component child nodes.
E.g `.on('submit', {'form':callback }) `

#### .off( Event, Function )
> Removes an event handler, just like `jQuery` api.

#### .trigger( element, event, [args] )
> Trigger events on some element. Element is required…

#### .props( [String key] )
> Get a single property or a set of `htmlElement` properties.

#### .annotations( [String key] )
> Get a single property or a set of `@annotations` properties.

#### .emit( action, [ data ] )
> Emit a custom event to be bubbled in the DOM tree.

#### .expose( Object )
> Exposes a set of functions to be public.

#### .get( String, [ CssSelector ] )
> Creates an reference to a component and returns a function, that accepts as first argument a string with the public method and the rest arguments can be used for passing values.

#### .publish( Event, [args] )
> Fires a global event to the ecosystem, very recommended to communicate Controllers and Apps with each other.

#### .subscribe( Event, Function ) : Function unsubscribe
> Subscribes the Controller/App to a global event. Returns a function to unsubscribe if necessary.

#### .injection
> Jails supports **`Dependency Injection`** by sending an object with all dependencies to a component. The component function gets the `.injection` property interface with all dependencies references. Example:

```js
import router from 'jails.packages/router'
import mycomponent from 'components/my-component'

const dependencies = {
    injection :{ router }
}

jails('my-component', mycomponent, dependencies )

```

Getting dependencies in component function :

```js
export default ( {init, injection} )=>{

    const {router} = injection

    init(()=>{
        router('/:page', page => console.log('hello at /', page))
    })
}
```
