require.config({

	baseUrl :'assets/js/',
	deps    :['jquery', 'jails', global.page],

	paths   :{
		jails		:'//cdn.rawgit.com/jails-org/Jails/rebuild/jails/source/jails.min',
		mods		:'//cdn.rawgit.com/jails-org/Modules/jquery/zepto',
		comps		:'//cdn.rawgit.com/jails-org/Components/jquery/zepto',
		jquery 		:'//code.jquery.com/jquery-2.1.1.min',
		mustache  	:'//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.min',
		showdown	:'//cdnjs.cloudflare.com/ajax/libs/showdown/1.2.3/showdown.min',
		highlight	:'//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/highlight.min'
	},

	callback :function( jquery, jails ){
		jails.start();
	}
});
