define("Translation", ["PageBuilder", "PageBuilderInfo", "DOMAppender"], function (PageBuilder, PageBuilderInfo, DOMAppender) {
	var translation = {
		init: function () {
			var thisContext = this;
			thisContext.start();
			console.info("it is working");
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
			var headerMenu = PageBuilderInfo.headerMenu;
			console.info(headerMenu);
			var headerMenuHTML = PageBuilder.buildMenu(headerMenu);
			console.info(headerMenuHTML);
			DOMAppender.append(PageBuilderInfo.headerMenuId,headerMenuHTML);
		},
		getBodyDivStructure: function () {
			var bodyDivStructure = '<div><div id="headerMenu"></div><div id="working-space"></div></div>';
			return bodyDivStructure;
		}
	};
	return translation;
});