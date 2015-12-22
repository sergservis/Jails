define([

	'jails',
	'models/github',
	'showdown',
	'mods/routr/routr',
	'highlight'

], function( jails, github, showdown, routr ){

	return jails.app('iframe', function( body, data ){

		var app  = this;

		this.init = function(){

			routr()
				.get('/:type/:name', load)
			.run();
		};

		function load( type, name ){
			var readme =  github.readme( type, name );
				readme.then( filter ).then( highlight ).done( render );
		}

		function render( html ){
			body.innerHTML = html;
			body.className = body.className.replace('loading', '');
		}

		function filter( text ){
			return new showdown.Converter({ tables :true }).makeHtml( text );
		}

		function highlight( code ){

			var aux = document.createElement('div');
				aux.innerHTML = code;

			var c = aux.querySelectorAll('pre code');

			for(var i = 0, l = c.length; i< l; i++){
				hljs.highlightBlock( c[i] );
			}

			return aux.innerHTML;
		}

	});
});
