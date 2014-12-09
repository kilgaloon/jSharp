core.cssRequire("template ui forms");


	var Form = function() {


		this.alertBox = function( message ) { 
			box = new _template("template/ui/forms/alertBox.html");
			content = 	box.puts({
							message: message,
							button: "Ok",
						});

			select("body").append(content);

		}
		
		
	}
