jSharp
======

jSharp is sword for javascript ninjas.
What is even better, it works with frameworks you allready know.

Be real ninja.

-------------------------------------------------------------------------
HTML
-------------------------------------------------------------------------

Everything you need to do is to find core.js
situable for you, in this case its web/core.js

````
<script type="text/javascript" src="system/web/core.js"></script>
<script type="text/javascript" src="custom/myApp.js"></script>

````

-------------------------------------------------------------------------
Example 
-------------------------------------------------------------------------
custom/myApp.js

Source:
````
core.using([
	
	// files i need for my aplication, whitespaces
	// simulate " / ", so document web dom is equal to
	// document/web/dom.js
	
	"document web dom",
	"document web events",
	"system web sys",



	], function() {

		// methods from all files you are using
		
});

````

-------------------------------------------------------------------------
