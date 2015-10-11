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
			html	= $(html),
			type 	= html.data('type'),
			view 	= this.x('[data-component*=view]'),
			modal 	= this.x('[data-component*=modal]');

		this.init = function(){

			github.request( type ).done( render, complete, page_load );

			this.listen('submitter:search', search);
			this.watch( '.readme', 'click', open_readme );
		};

		function page_load(q){
			routr().get('/:name', page_load_search).run();
		}

		function open_readme(e){

			var url = ['readme#', type, this.title ].join('/');

			modal('open');
			modal('render', $('<iframe />').attr({ src :url }) );

			e.preventDefault();
		}

		function render(response){
			view('render', response);
		}

		function search( e, post ){
			render( github.find( post.params.q ) );
		}

		function page_load_search(q){
			 render( github.find( q ) );
		}

		function complete(){
			html.addClass('complete').removeClass('loading');
		}
	});
});
