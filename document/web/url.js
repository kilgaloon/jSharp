	// url object

if(window.jsharp.isLoaded) {

	_url = {
		get: function( get_var ) {
			url = location.hash;
			vars = url.split("#");

			return vars[get_var];
		},

	}


}
