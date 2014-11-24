// ajax object

core.packageReady();
// data
// type
// url
// async
// dataType
// charset

_http = function( object ) {

	// object default setting
	data  		= 	object.data || "undefined";
	url 		= 	object.url;
	type 		= 	object.type || "GET";
	async 		= 	object.async || false;
	dataType 	=	object.dataType || "text/html";
	charset		= 	object.charset || "UTF-8";

	callBackSuccess 	= 	object.success || this.success;
	callBackError		=	object.error   || this.error;


	if (window.XMLHttpRequest) { ajax = new XMLHttpRequest() }

	if (data == "undefined") {

		ajax.open(this.type, this.url, this.async);
		ajax.setRequestHeader("Content-Type", this.dataType + ";charset=" + this.charset);
		ajax.send(null);
		responseText = ajax.responseText;

	} else if(typeof data == "object") {

		p = JSON.stringify(this.data).replace(/[\"\}\{]/g, '');
		param = p.replace(/[\:]/g,"=").replace(/[\,]/g, "&");
		
		ajax.open(this.type, this.url + "?" + param, this.async);
		ajax.setRequestHeader("Content-Type", this.dataType + "; charset=" + this.charset);
		ajax.send(null);
		responseText = ajax.responseText;


	}
			

	try {
		if(ajax.status == 200) {
			callBackSuccess(responseText);
		} else if(ajax.status == 404) {
			callBackError(responseText);
		}
	}

	catch(err) {
		// 	throwing this error in cases that there is not need for creating http request 
		//	without callback method such is success()
		throw new SyntaxError("Calling HTTP request without callback method");
	}
	
}




