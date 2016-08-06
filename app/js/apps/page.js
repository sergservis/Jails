define([

	'jails',
	'models/github',
	'mods/routr/routr',

	'comps/view/view',
	'comps/submitter/submitter',
	'comps/modal/modal'

], function( jails, github, routr ){

	return jails('page', function( component, html, data ){

		var	type 	= html.getAttribute('data-type'),
			view 	= component.get('[data-component*=view]'),
			modal 	= component.get('[data-component*=modal]');

		component.init = function(){

			github.request( type ).done( render, complete );

			component.listen('submitter:search', search);
			component.on( 'click', '.readme', open_readme );
		};

		function open_readme(e){

			var url = ['readme.htm?branch='+github.branch+'#', type, this.title ].join('/');

			modal('open');
			modal('update', { url: url } );

			e.preventDefault();
		}

		function render(response){
			view('update', response);
		}

		function search( e, post ){
			render( github.find( post.params.q ) );
		}

		function complete(){
			html.className = html.className.replace('loading', '') + ' complete';
		}

	});
});
