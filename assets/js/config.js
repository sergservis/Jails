require.config({

	baseUrl :'assets/js/',
	deps    :['jquery', 'jails', 'mods/jquery.adapter/jquery.adapter', global.page],

	paths   :{
		// jails		:'//cdn.rawgit.com/jails-org/Jails/master/source/jails.min',
		mods		:'//cdn.rawgit.com/jails-org/Modules/master',
		comps		:'//cdn.rawgit.com/jails-org/Components/master',
		jquery 		:'//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min',
		mustache  	:'//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.min',
		showdown	:'//cdnjs.cloudflare.com/ajax/libs/showdown/1.2.3/showdown.min',
		highlight	:'//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/highlight.min'
	},

	callback :function( jquery, jails, adapter ){
		jails.events = adapter;
		jails.start();
	}
});
