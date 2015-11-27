# Jails CLI
<!--{h1:.massive-header.-with-tagline}-->

> Command-line

- Scaffold Jails modules easily
- Build your apps
- Watch files

## Installing

```
sudo npm i jails-cli -g
```

That's it... Now you're able to run `jails` command. To uninstall just use the same command above but using uninstall npm command.

## Scaffolding

- Apps
- Components
- Controllers
- Config file

```
jails new app my-app
```

That command above will create an app on your `apps` folder named **my-app**. It will generate the following snippet:

```js
define(['jails'], function( jails ){

    jails.app('my-app', function(html, data){

        this.init = function(){

        };
    })
});
```

You can save that module in a specific folder:

    jails new controller product/box

*Saving at: ** assets/js/controllers/product/box.js** *

The options available are : `app`, `component`, `controller`, `config`.


## Building your Project

Jails uses RequireJs in order to make all AMD modules working.
You can choose to build an app page and generate a single js minified file with all the modules within.

- You need to change your config file and **include** `config` to the compilation step.
- Let requirejs to be loaded asynchronously on your script tag on a cdn for caching.

```js
require.config({

	baseUrl :'assets/js/',
	deps    :['jquery', 'jails', global.page],
	include :['config'],
    (...)
```

- Then, point your script file to your min js file:

```html

<script type="text/javascript">
    var global = {
        page :'apps/home'
    };
</script>

<script type="text/javascript" data-main="assets/js/min/home" src="//cdn.requirejs.etc"></script>


```

## Building Commands

Jails Cli will create a **min** folder containing all minified/uglified files.

#### Building an specific App
```
jails build home
```

#### Building all apps

```
jails build
```

#### Bypass uglify ( for debugs )

```
jails build -d
```

```
jails build home -d
```

## Watching

The watching task is still on developing yet and doesn't let you to use many options for now, but it's quite usefull when you just need to build the application after changing some file.

```
jails watch <app>
```
App should be the application you're working, for now, the watching task will look for any changes on assets/js and descendents and build project. `<app>` parameter is required, in the future it will have more options.

For instance, to build the app called `home` when anything changes:
```
jails watch home
```

To quit watching on terminal just hit **`ctrl+c`**.


## Help

For more information and detailed options:

```
jails
```

```
jails -h
```
