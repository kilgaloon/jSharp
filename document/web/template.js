// predefined template array
var template = [];

// template object
core.packageReady();


	var _template = function( url ) {

			this.url = url;

			this.load = function( params ) {

				if (window.XMLHttpRequest) { ajax = new XMLHttpRequest() }

				if(typeof(params) == "object" ) {

					p = JSON.stringify(params).replace(/[\"\}\{]/g, '');
					param = p.replace(/[\:]/g,"=").replace(/[\,]/g, "&");
					
					ajax.open("GET", this.url + "?" + param, false);
					ajax.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
					ajax.send(null);
			
				} else {

					ajax.open("GET", this.url, false);
					ajax.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
					ajax.send();

				}	


				return ajax.responseText;


			},

			this.puts = function( object ) {

				if (window.XMLHttpRequest) { ajax = new XMLHttpRequest() }

				ajax.open("GET", this.url, false);
				ajax.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
				ajax.send();

				var content = ajax.responseText;

				for (var key in object) {
					if (object.hasOwnProperty(key)) {  	

						var find = '{{' + key + '}}';
						var re = new RegExp(find, 'g');
						

						content = content.replace(re, object[key]);
					}

				}

				return content;
				
			}

			

	}



