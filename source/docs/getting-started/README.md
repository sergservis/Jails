# Getting Started
<!--{h1:.massive-header.-with-tagline}-->

> Components

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
import jails from 'jails'

jails('form', ( component, form, annotation ) =>{

    component.init = ()=>{
        component.on('change', 'input' onChange)
    }

    let onChange = (e)=>{
        console.log('Hey, some input has changed')
    }
})
```

## Starting Application

Jails only register `components` functions, it will never execute them automatically. This is important so you can have total control of your application workflow. After all components be loaded, you can start the application with `jails.start()` method.

```js
jails.start()
```
