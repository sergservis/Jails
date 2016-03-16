# Apps & Controllers
<!--{h1:.massive-header.-with-tagline}-->

> Pages & Organisms

- **Controllers & Apps** are the same thing.
- They inherit all **Components** behavior.
- You should have only 1 App to deal with your page.
- You can have several controllers on a page.
- They **listen**, **execute** and relate the components with each other.
- Can make ajax calls or request data by consuming any **AMD modules** like **Models** and **Stores**.


## Markup

```html
<body data-app="my-app" />
<section data-controller="my-controller" />
```

## Shared Data

Controllers and Apps do not have the `@annotations` like components does, they share an global object, it can be used to share some data, some information, states etc. It's the simplest way to share data through controllers and your application.

## Mixin declaration

Pretty much the same thing as components, some names changes, and the **data** shared object instead of `@annotation`.

### App declaration

```js
jails.app('my-app', function(html, data){

    this.init = function(){
        console.log('hey!! I am an app!!!', data);
    };
});
```

### Controller declaration

```js
jails.controller('my-controller', function(html, data){

    this.init = function(){
        console.log('hey!! I am an app!!!', data);
    };
});
```

## Controlling Components

You can use either the **passive** way to interact by using the **listen** method, and the **active** way by executing a **public** method of a component. You can always execute a **public** method of a component from a controller, because all the components are initialized before any controllers and apps.

```js
jails.controller('my-controller', function(html, data){

    //Gets the reference of a component
    var my_component = this.x('[data-component*=my-component]');

    this.init = function(){

        //Passive way
        this.listen('my-component:action', doSomething);
        //Active way
        my_component('publicMethod', { someArgs:[] });
    };

    function doSomething(e, args){
        console.log('component emits action', args);
    }
});

```

## Api

All methods of the components are present in **Controllers** & **Apps**, plus the following methods :

#### .listen( Event, Function )
Listen to custom events fired by **Components** or **Controllers** within the controller/app scope.

#### .x( CssSelector )
Creates an reference to components, and returns a function, it accepts the name of public method and arguments to be sent as event. The previous example code illustrates that.

#### .publish( Event, [args] )
Fires a global event to the ecosystem, very recommended to communicate **Controllers** and **Apps** with each other.

#### .subscribe( Event, Function )
Subscribes the Controller/App to a global event.
