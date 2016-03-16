# Getting started

## Markup

```html

<body data-app="hello-world">
	<!-- ... -->
	<script type="text/javascript" src="node_modules/jails-js/source/jails.min.js"></script>
</body>
```

## App - hello-world.js

```js

jails.app('hello-world', function( body, data ){

    this.init = function(){
        console.log('Hello World!!! =)');
        console.log('My app is running on =>', html);
    };
});

jails.start();

```
