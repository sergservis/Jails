define([

	'mods/model/model'

], function( Model ){

	return Model('github', function(){

		var data;

		this.schema = { items :Object };

		this.request = function( type ){
			return $.get('//rawgit.com/jails-org/'+type+'/jquery/zepto/'+type+'.json').done( save );
		};

		this.readme = function( type, name ){
			return $.get('//rawgit.com/jails-org/'+type+'/jquery/zepto/'+name+'/README.md')
		};

		function save( response ){
			data = response;
			data.count = response.items.length;
		}

		this.find = function( q ){

			var items = $.map( data.items, function( item ){
				var string = [ item.name, item.authors.toString(), item.description, item.section ].join('#');
				return string.match( new RegExp( q, 'i' ) )? item :null;
			});

			return { items :items, count :items.length };
		};
	});
});
