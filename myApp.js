core.using([

	"document web dom",
	"document web events",
	"document web template",

	"system web sys",
	"system web forms"

], function() {


	 form = new Form();

	 select("header").onclick(function() {
	 	form.alertBox("I am alert box, made by jSharp templating system");
	 });
	
});


