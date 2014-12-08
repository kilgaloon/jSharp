core.cssRequire("template ui forms");


	var Form = function() {


		this.alertBox = function( message ) { 
			box = new _template("template/ui/forms/alertBox.html").load();

			select("body").append(box);
			select(".box .text").content(message);
		}

		this.messageBox = function( message ) { 
			box = new _template("template/ui/forms/messageBox.html").load();

			select("body").append(box);
			select(".box").content(message);
		}

		this.questionBox = function( message ) {
			box = new _template("template/ui/forms/questionBox.html").load();

			select("body").append(box);
			select(".box .text").content(message);
		}
		
	}
