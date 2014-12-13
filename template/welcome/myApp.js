core.using([

		"document web dom",
		"document web events",
		"document web template",
		"document web http",

		"system web forms",

	], function() {

		

		// load nav
		nav = new _template("template/welcome/page/nav.html").puts({ logo: "jSharp" });
		select(".navbar").content(nav);

		// nav links
		navLinks = new _template("template/welcome/page/nav-links.html").load();
		select(".navbar-collapse").content(navLinks);

		// intro header
		introHeader = new _template("template/welcome/page/intro-header.html");
		introHeader = introHeader.puts({
			heading: "jSharp",
			intro: "JavaScript framework for ninjas.",

			github: "https://github.com/Kilgaloon/jSharp"
		});

		select(".intro-header").content(introHeader);

		// footer
		footer = new _template("template/welcome/page/footer.html").load();
		select("footer").content(footer);



});