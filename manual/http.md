AJAX FUNCTION EXAMPLE AND EXAMPLANATION


data - can be undefined as set to default value or can be object as in example under
	`data: {id: 15, name: "John"}`

type - can be either POST or GET, default is GET
	   type: "GET"

url - url must be set to target your file where you sending request
	  url: "test.php"

async - can be either TRUE or FALSE, default is false


dataType - defines type of request or to be precise Content-Type, default is text/html

charset - defined charset of request, default is UTF-8


Example:

	_http({
		url: "test.php",
		data: {id: 15, name: "John"},
		success: function(data) {
			console.log(data);
		}
	});
