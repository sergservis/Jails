define([

	'mods/model/model'

], function( Model ){

	return Model('github', function(){

		var data, _self = this;

		this.schema = { items :Object };
		this.branch = querystring('branch') || 'jquery/zepto';

		this.request = function( type ){
			return $.get('//rawgit.com/jails-org/'+type+'/'+this.branch+'/'+type+'.json').done( save );
		};

		this.readme = function( type, name ){
			return $.get('//rawgit.com/jails-org/'+type+'/'+this.branch+'/'+name+'/README.md')
		};

		function save( response ){
			data = response;
			data.count = response.items.length;
			data.branch = _self.branch;
		}

		this.find = function( q ){

			var items = $.map( data.items, function( item ){
				var string = [ item.name, item.authors.toString(), item.description, item.section ].join('#');
				return string.match( new RegExp( q, 'i' ) )? item :null;
			});

			return { items :items, count :items.length };
		};

		function querystring(name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}
	});
});
