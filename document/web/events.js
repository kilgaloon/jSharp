

plug.onabort = function( foo ) {
	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onabort = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onabort = foo;
		}

	}
}

plug.onbeforeupload = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onbeforeupload = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onbeforeupload = foo;
		}

	}

}

plug.onblur = function() {}

plug.oncancel = function() {}

plug.oncanplay = function() {}

plug.oncanplaythrough = function() {}

plug.onchange = function() {}

plug.onclick = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onclick = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onclick = foo;
		}

	}
}

plug.onclose = function() {}

plug.oncontextmenu = function() {}

plug.oncuechange = function() {}

plug.ondblclick = function() {}

plug.ondevicemotion = function() {}

plug.ondeviceoriantation = function() {}

plug.ondrag = function() {}

plug.ondragend = function() {}

plug.ondragenter = function() {}

plug.ondragleave = function() {}

plug.ondragover = function() {}

plug.ondragstart = function() {}

plug.ondrop = function() {}

plug.ondurationchange = function() {}

plug.onemptied = function() {}

plug.onended = function() {}

plug.onerror = function() {}

plug.onfocus = function() {}

plug.onhashchange = function() {}

plug.oninput = function() {}

plug.oninvalid = function() {}

plug.onkeydown = function() {}

plug.onkeypress = function() {}

plug.onkeyup = function() {}

plug.onload = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onload = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onload = foo;
		}

	}

}

plug.onloadeddata = function() {}

plug.onloadedmetadata = function() {}

plug.onloadstart = function() {}

plug.onmessage = function() {}

plug.onmousedown = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onmousedown = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmousedown = foo;
		}

	}

}

plug.onmouseenter = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onmouseenter = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmouseenter = foo;
		}

	}

}

plug.onmouseleave = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onmouseleave = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmouseleave = foo;
		}

	}

}

plug.onmousemove = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onmousemove = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmousemove = foo;
		}

	}

}

plug.onmouseout = function() {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onmouseout = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmouseout = foo;
		}

	}

}

plug.onhover = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onmouseover = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmouseover = foo;
		}

	}

}

plug.onmouseup = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onmouseup = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmouseup = foo;
		}

	}

}

plug.onmousewheel = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onmousewheel = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmousewheel = foo;
		}

	}

}

plug.onwheelup = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {

		object_in_buffer.onmousewheel = function() {

			if(event.wheelDelta < 0) {
				foo();
			}

		};

	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmousewheel = function() {

				if(event.wheelDelta < 0) {
					foo();
				}

			};
		}

	}

}

plug.onwheeldown = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {

		object_in_buffer.onmousewheel = function() {

			if(event.wheelDelta > 0) {
				foo();
			}

		};

	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onmousewheel = function() {

				if(event.wheelDelta > 0) {
					foo();
				}

			};
		}

	}

}

plug.onoffline = function() {}

plug.ononline = function() {}

plug.onpagehide = function() {}

plug.onpageshow = function() {}

plug.onpause = function() {}

plug.onplay = function() {}

plug.onplaying = function() {}

plug.onpopstate = function() {}

plug.onprogress = function( foo ) {

	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.onprogress = foo;
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].onprogress = foo;
		}

	}

}

plug.onratechange = function() {}

plug.onreset = function() {}

plug.onresize = function() {}

plug.onscroll = function() {}

plug.onsearch = function() {}

plug.onseeked = function() {}

plug.onseeking = function() {}

plug.onselect = function() {}

plug.onshow = function() {}

plug.onstalled = function() {}

plug.onstorage = function() {}

plug.onsubmit = function() {}

plug.onsuspend = function() {}

plug.ontimeupdate = function() {}

plug.ontransitionend = function() {}

plug.onunload = function() {}

plug.onvolumechange = function() {}

plug.onwaiting = function() {}

plug.onwheel = function() {}

plug.listen = function( listener, foo ) {	
	if(typeof object_in_buffer.length == "undefined") {
		object_in_buffer.addEventListener(listener, foo);
	} else {

		for(i = 0; i < object_in_buffer.length; i++) {
			object_in_buffer[i].addEventListener(listener, foo);
		}

	}
}


plug.swipe = function( side, distance, foo) {
	object_in_buffer.addEventListener('touchstart', function( event ) {
		touchStartedCoordinate = event.changedTouches[0].pageX;
	});

	object_in_buffer.addEventListener('touchend', function( event ) {
		touchEndedCoordinate = event.changedTouches[0].pageX;
		calculateDistance = touchStartedCoordinate - touchEndedCoordinate;

		
		if( calculateDistance < 0 && calculateDistance < -distance ) {
			if(side === 'right') {
				foo();
			}
		} else if( distance < calculateDistance ){
			if(side === 'left') {
				foo();
			}
		}

	});

}
