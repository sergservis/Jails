# Getting started

## Markup

Set a global variable pointing to your `app`, and create a `config.js` file to your entry point.

```html
<script type="text/javascript">
    var global = { page : 'apps/hello-world' };
</script>
<script type="text/javascript" data-main="js/config.js" src="path/to/requirejs"></script>

<body data-app="hello-world" />
```

## App - hello-world.js

```js
define(['jails'], function( jails ){

    jails.app('hello-world', function(){

        this.init = function(){
            console.log('Hello World!!! =)');
            console.log('My app is running on =>', html);
        };
    });
});
```

## Setup your config file

Config file sets the paths, dependencies and it loads and executes jails.
It's the entry point to the RequireJS library, so `config.js` should explicit say, which app should be executed along jails.

```js
require.config({
	baseUrl :'js/',
	deps    :['jails', global.page],
	paths   :{
		jails		:'//rawgit.com/jails-org/Jails/master/source/jails.min',
		mods		:'//rawgit.com/jails-org/Modules/master',
		comps		:'//rawgit.com/jails-org/Components/master'
	},
	callback :function( jails ){
		jails.start();
	}
});

```
