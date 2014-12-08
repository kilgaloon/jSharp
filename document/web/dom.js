
	// content()
	// Description:
	// Collecting all inside html content from given object
	plug.content = function( content ) {
		 // checks to see is object undefinded
		if(typeof(content) === "undefined") {
			// if there is array of objects it loops and set their values
			if(object_in_buffer.length > 1) { 
				// loops through objects and returns their values
				// **** it will return content just of first element that is encountered
				for(var i = 0; i < object_in_buffer.length; i++) {
					return object_in_buffer[i].innerHTML;
				}

			} else {

				return object_in_buffer.innerHTML;	

			}

		} else { // if there is some content in argument that means we want to set some content to given object
				// checks to see if array of object exists and how much elements is in array
			if(object_in_buffer.length > 1) { 
				// loops through all objects and sets their contents equal to given argument
				for(var i = 0; i < object_in_buffer.length; i++) {
					object_in_buffer[i].innerHTML = content;
				}
			// if there is just 1 object then set it's content to given argument
			} else {
				object_in_buffer.innerHTML = content;	
			}

		}
		// end of function
	}



	/*	

	<!-- preappend -->
	<div>
	<!-- prepend -->
	foo
	<!-- append -->
	</div>
	<!-- apprend -->

	*/

	plug.preappend = function( html ) {
		object_in_buffer.insertAdjacentHTML("beforebegin", html);
	}

	plug.prepend = function( html ) {
		object_in_buffer.insertAdjacentHTML("afterbegin", html);
	}

	plug.append = function( html ) {
		object_in_buffer.insertAdjacentHTML("beforeend", html);
	}

	plug.apprend = function( html ) {
		object_in_buffer.insertAdjacentHTML("afterend", html);
	}


	// attr();
	// Description:
	// Collecting choosen attributes
	plug.attr = function( attr, value  ) { 
		// checking for argument value, if is undefined then users checking initial 
		// value of some object attribute
		if(typeof value == "undefined") {
			if(object_in_buffer.length > 1) {
				for(i = 0; i < object_in_buffer.length; i++) {
					return object_in_buffer[i].getAttribute(attr);
				}
		
			} else {
				return object_in_buffer.getAttribute(attr);

			}
		// if value argument has some value in it then we want to 
		// set some attribute to optional value
		} else {
			if(object_in_buffer.length > 1) {
				for(i = 0; i < object_in_buffer.length; i++) {
					object_in_buffer[i].setAttribute(attr, value);
				}
		
			} else {
				object_in_buffer.setAttribute(attr, value);

			}
		}

	}

	// returns value of element
	plug.value = function() {
		return object_in_buffer.value;
	}

	// 
	plug.data = function( attr, value ) {
		if(typeof value == "undefined") {
			if(object_in_buffer.length > 1) {
				for(i = 0; i < object_in_buffer.length; i++) {
					return object_in_buffer[i].getAttribute("data-" + attr);
				}
		
			} else {
				return object_in_buffer.getAttribute("data-" + attr);

			}
		// if value argument has some value in it then we want to 
		// set some attribute to optional value
		} else {
			if(object_in_buffer.length > 1) {
				for(i = 0; i < object_in_buffer.length; i++) {
					object_in_buffer[i].setAttribute("data-" + attr, value);
				}
		
			} else {
				object_in_buffer.setAttribute("data-" + attr, value);

			}
		}
	}


	// removes attribute from object
	plug.removeAttr = function( attr ) {
		if(object_in_buffer.length > 1) {
			for(i = 0; i < object_in_buffer.length; i++) {
				object_in_buffer[i].removeAttribute(attr);
			}
		
		} else {
			object_in_buffer.removeAttribute(attr);

		}
	}

/* 
	
	CLASS METHODS

*/
	// adding class to existing element
	plug.addClass = function( value ) {
		classAttr = this.attr("class"); // store current class
					
		if(classAttr == null) { // checks is there allready some class if not, then add new
			this.attr("class", value);
		} else { // if some classes allready exists, collects them adds new and store them all
			this.attr("class", classAttr + " " + value);
		}
	}

	// remove all classes on given object
	plug.rmClasses = function() {
		this.attr("class", "");
	}

	// removes class of element
	plug.removeClass = function( name ) {
		classesAttr = this.attr("class").split(" "); // store all classes in array
		classToRmv = classesAttr.indexOf(name); // search array for class that needs to be deleted

		classesAttr.splice(classToRmv); // removes class from array

		joinClasses = classesAttr.join(" "); // convert array to string
		this.rmClasses(); // remove all classes on given object

		this.addClass(joinClasses); // store all classes to given object

	}


/* 
	
	CLASS METHODS

*/

	// has();
	// Description:
	// Search if element has attribute set = value
	plug.has = function( attr, checkFor ) {
		this_attr = object_in_buffer.getAttribute(attr);

		if(this_attr.indexOf(checkFor) >= 0) {
			return true;
		} else {
			return false;
		}
		
	}


	// disable element
	plug.disable = function( value ) {
		this.attr("disabled", value);

		return true;	

	}

	// related to disable function
	plug.enable = function() {
		this.removeAttr("disabled");

		return true;
	}

// }

	
	// WIDTH AND HEIGHT METHODS	
	plug.width = function() {
	
		if(object_in_buffer.length > 0) {
			throw new SyntaxError();
		} else {
	
			if(typeof object_in_buffer.clientWidth == "undefined") {
				return object_in_buffer.outerWidth;
			} else {
				return object_in_buffer.offsetWidth;
			}
	
		}
	
	
		
	}
	
	
	plug.height = function() {
	
		if(object_in_buffer.length > 0) {
			throw new SyntaxError();
		} else {
	
			if(typeof object_in_buffer.clientWidth == "undefined") {
				return object_in_buffer.outerHeight;
			} else {
				return object_in_buffer.offsetHeight;
			}
	
		}
	
	
		
	}
	
	
	// changing css of selected object
	plug.css = function( object ) {
		style = JSON.stringify(object).replace(/[\"\}\{]/g, '');
		styles = style.replace(/[,]/g,';');
		object_in_buffer.setAttribute("style", styles);
    }
    	
    	
    	
    	
//  build in functions for easier work, made up from original functions
//========================================================================

    plug.linkLocation = function() {
    	link_location = this.attr("href");
    	link = link_location.replace("#", "");
    	
    	return link;
    }

    // sets template on selected object
	plug.setTemplate = function( page ) {
		this.content( template[page] );
	}
