
var template = [];

// template object
if(window.jsharp.isLoaded) {


	var _TEMPLATE = function( url ) {

			this.url = url;

			this.load = function( params ) {

				if (window.XMLHttpRequest) { ajax = new XMLHttpRequest() }

				if(typeof(params) == "object" ) {

					p = JSON.stringify(params).replace(/[\"\}\{]/g, '');
					param = p.replace(/[\:]/g,"=").replace(/[\,]/g, "&");
					
					ajax.open("GET", "document/web/template/" + this.url + "?" + param, false);
					ajax.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
					ajax.send(null);
					ajax_response = ajax.responseText;

					return ajax_response;

			
				} else {

					ajax.open("GET", "document/web/template/" + this.url, false);
					ajax.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
					ajax.send();
					ajax_response = ajax.responseText;

					return ajax_response;

				}		

			}


			return this;

	}




}
