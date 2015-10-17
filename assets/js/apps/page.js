define([

	'jails',
	'models/github',
	'mods/routr/routr',

	'comps/view/view',
	'comps/submitter/submitter',
	'comps/autopost/autopost',
	'comps/litemodal/litemodal'

], function( jails, github, routr ){

	//tree :"//api.github.com/repos/jails-org/Components/git/trees/master",
	//file :"//api.github.com/repos/jails-org/Components/contents/view/README.md"

	return jails.app('page', function( html, data ){

		var
			app		= this,
			type 	= html.getAttribute('data-type'),
			view 	= this.x('[data-component*=view]'),
			modal 	= this.x('[data-component*=modal]');

		this.init = function(){

			github.request( type ).done( render, complete );

			this.listen('submitter:search', search);
			this.on( 'click', '.readme', open_readme );
		};

		function open_readme(e){

			var url = ['readme.htm?branch='+github.branch+'#', type, this.title ].join('/');

			modal('open');
			modal('render', { url: url } );

			e.preventDefault();
		}

		function render(response){
			view('render', response);
		}

		function search( e, post ){
			render( github.find( post.params.q ) );
		}

		function complete(){
			html.className = html.className.replace('loading', '') + ' complete';
		}

	});
});
