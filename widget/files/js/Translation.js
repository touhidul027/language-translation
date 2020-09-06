define("Translation", ["PageBuilder", "PageBuilderInfo", "DOMAppender"], function (PageBuilder, PageBuilderInfo, DOMAppender) {
	var translation = {
		init: function () {
			var thisContext = this;
			thisContext.start();
		},
		start: function () {
			console.info("++++++++++ start ++++++++++");
			this.clearDomBody();
			this.buildBodySkeleton();
			console.log("---------- start ------------");
		},
		clearDomBody: function () {
			document.body.innerHTML = "";
		},
		buildBodySkeleton: function () {
			PageBuilder.setBodyStyle();
			var bodyDivStructure = this.getBodyDivStructure();
			document.body.innerHTML = bodyDivStructure;
			var headerMenu = PageBuilderInfo.headerMenu;
			console.info(headerMenu);
			var headerMenuHTML = PageBuilder.buildMenu(headerMenu);
			console.info(headerMenuHTML);
			DOMAppender.append(PageBuilderInfo.headerMenuId, headerMenuHTML);PageBuilder.setWorkspace(PageBuilderInfo.workingSpaceId);
			PageBuilder.seperateElement(PageBuilderInfo.workingSpaceId);
		},
		getBodyDivStructure: function () {
			var bodyDivStructure = '<div><div id="' + PageBuilderInfo.headerMenuId + '"></div><div id="' + PageBuilderInfo.workingSpaceId + '"></div></div>';
			return bodyDivStructure;
		}
	};
	return translation;
});