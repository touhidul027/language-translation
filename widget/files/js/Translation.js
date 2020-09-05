define("Translation", ["PageBuilder", "PageBuilderInfo.json"], function (PageBuilder, PageBuilderInfo) {
	var translation = {
		init: function () {
			var thisContext = this;
			thisContext.start();
		},
		start: function () {
			// start your code from here
			console.info("Translation...");
			this.clearDomBody();
			this.buildBodySkeleton();
		},
		clearDomBody: function () {
			document.body.innerHTML = "Hello, I am working";
		},
		buildBodySkeleton: function () {
			var bodyDivStructure = this.getBodyDivStructure();
			document.body.innerHTML = bodyDivStructure;
			PageBuilder.buildMenu();
			var headerMenu = PageBuilderInfo.headerMenu;
			console.info(headerMenu);

		},
		getBodyDivStructure: function () {
			var bodyDivStructure = '<div><div id="header-menu"></div><div id="working-space"></div></div>';
			return bodyDivStructure;
		}
	};
	return translation;
});