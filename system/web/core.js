

select = function( element ) {


	// initialize ravel
	if(window.jsharp.isLoaded) {
		console.log("Processing..."); 

		return new init( element );

	} else {
		throw new Error("Ravel encountered some error!");
	}


};



var init = function( element ) {

	this.element = element;

	// selection
	if(typeof(this.element) == "object") {
		object_in_buffer = this.element;
		return this;


	} else if(typeof(this.element) == "string") {
 		object_to_check = document.querySelectorAll(this.element);


 		if(object_to_check.length > 1) {
 			object_in_buffer = document.querySelectorAll(this.element);
 		} else if (object_to_check.length == 1) {
 			object_in_buffer = document.querySelector(this.element);
 		} else {
 			throw new SyntaxError("Invalid selection!");
 		}


		return this;


	}
	
}; j# = init; window.jsharp = { isLoaded: true, version: 0.5 }; 



core = {

	using: function( name, foo ) {
	
		window.onload = function() {

			if(document.readyState != "complete") {
				document.title = "Loading...";
			} else {

				if(typeof name != "object") {
					include = document.createElement("script");
					include.type = "text/javascript";

					var find = ' ';
					var re = new RegExp(find, 'g');

					include.src = name.replace(re, "/") + ".js";

					include.async = false;

					document.getElementsByTagName("head")[0].appendChild(include);
						
					include.onload = function() {
						foo();
					}

				} else {

					for(var i = 0; i < name.length; i++) {
						include = document.createElement("script");
						include.type = "text/javascript";

						var find = ' ';
						var re = new RegExp(find, 'g');

						include.src = name[i].replace(re, "/") + ".js";

						include.async = false;

						document.getElementsByTagName("head")[0].appendChild(include)[0];
						
					}

					include.onload = function() {

						try {
							foo();
						}

						catch (err) {
							throw new SyntaxError("Ravel encountered some error!");
						}
		
					}

				}
					
			}

		};
	}

}


// variables
var document = window.document,


	// plugin call
	plug = ravel.prototype || init.prototype;

	// array of defined variables that are available in global scope
	window.Ravel.defined = [];



