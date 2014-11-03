	// url object
core.packageReady();

	_url = {
		get: function( get_var ) {
			url = location.hash;
			vars = url.split("#");

			return vars[get_var];
		},

		go: function( url ) {
			window.location.href = url;
		}

	}



