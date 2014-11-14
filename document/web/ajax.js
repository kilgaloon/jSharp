// ajax object

core.packageReady();
// data
// type
// url
// async
// dataType
// charset

_ajax = function( object ) {

	if (window.XMLHttpRequest) { ajax = new XMLHttpRequest() }

	if(typeof object.data != "undefined") {

		p = JSON.stringify(object.data).replace(/[\"\}\{]/g, '');
		param = p.replace(/[\:]/g,"=").replace(/[\,]/g, "&");

		ajax.open(object.type, object.url + "" + param, object.async);
		ajax.setRequestHeader("Content-Type", object.dataType + ";charset=" + object.charset);
		ajax.send(null);
		ajax_response = ajax.responseText;

		return ajax_response;
		
	} else {

	

	}


	

	
	
}