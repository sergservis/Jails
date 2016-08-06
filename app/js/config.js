require.config({

	baseUrl :'app/js/',
	deps    :['jails', global.page],

	paths   :{
		jails		:'//rawgit.com/jails-org/Jails/master/source/jails.min',
		mods		:'//rawgit.com/jails-org/Modules/v2',
		comps		:'//rawgit.com/jails-org/Components/v2',
		jquery 		:'//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min',
		riot	  	:'//cdnjs.cloudflare.com/ajax/libs/riot/2.5.0/riot.min',
		showdown	:'//cdnjs.cloudflare.com/ajax/libs/showdown/1.2.3/showdown.min',
		highlight	:'//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/highlight.min'
	},

	callback :function( jails ){
		jails.start();
	}
});
