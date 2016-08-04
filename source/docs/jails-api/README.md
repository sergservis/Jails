# Jails API
<!--{h1:.massive-header.-with-tagline}-->

> Static Methods

# Api

#### .start()
Start jails internal Scanner, which will scan entire html and instantiate the components.

#### .scanner
Scanner object, scans the html DOM tree and start components.

#### .render( DOMElement container, String html)
Replace html content of a container DOMElement, and destroy all components instances.

#### .refresh( [DOMElement container] )
Executes scanning again, if no option is passed, Jails will scan the entire DOM again.
It will bypass components already started, it will initialize only new dom elements created.

#### .events
Jails events object has `.on()`, `.off()`, `.trigger()` methods for events, also used on Components interface.
You can bypass these events making an *adapter*, using jQuery if you will.

#### .publish( `string`, `:any`) / Jails.subscribe( `string`, `:any`)
The same `.publish()` and `.subscribe()` events used on components interface, you can use it on third-party modules using the pub/sub pattern.
