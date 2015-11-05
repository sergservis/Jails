# Jails API
<!--{h1:.massive-header.-with-tagline}-->

> Public Attributes & Methods

You will eventually need to access some of the **Jails Public Attributes & Methods** in order to build some kind of Component, or a Generic Module which needs to be integrated to the ecosystem somehow.

These are the public methods/attributes you can use:

## .apps, .controllers, .components

This properties contains all the mixins loaded via `RequireJs`.

## .app(), .controller(), .component()

Creates and saves your **app**, **controller** or **component** mixin in the Jails ecosystem.

## .start()

Start Jails ecosystem.

## .refresh( NodeElement )
Jails will scan again looking for `Components`, `Applications`, `Controllers` inside some `NodeElement` target.
Very useful when you create dynamically an ecosystem jails module.

## .data()
Gets the **Shared Object** of the `Controllers` & `Apps`.

## .publish(), .subscribe()
The internal Jails Pub/Sub, the same used in `Controllers` & `Apps`.
