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

Jails only register `components` functions, it will never execute them automatically. This is important so you can have total control of your application workflow. After all components be loaded, you can start the application with `jails.start()` method.

```js
jails.start()
```
