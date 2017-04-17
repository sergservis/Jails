# Getting Started
<!--{h1:.massive-header.-with-tagline}-->

> Components

## Installing

```
npm install jails-js
```

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
import jails from 'jails-js'

jails('form', ( {init, on} ) =>{

	init(()=>{
		on('change', {'input':onchange})
	})

	const onchange = e =>{
		console.log('Hey, some input has changed')
	}
})
```

## Starting Application

The code above shows only how to register `components` into `Jails`, it will not execute them automatically. This is important so you can have total control of your application workflow. After all components are loaded, you can start the application using `jails.start()` method.

```js
jails.start()
```
