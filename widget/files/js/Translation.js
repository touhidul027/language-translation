define("Translation", ["PageBuilder", "PageBuilderInfo", "DOMAppender", "Utils", "Events"], function (PageBuilder, PageBuilderInfo, DOMAppender, Utils, Events) {
	var translation = {
		init: function () {
			var thisContext = this;
			thisContext.start();
		},
		start: function () {
			console.log("++++++++++ start ++++++++++");
			this.clearDomBody();
			this.buildBodySkeleton();
			this.addEvents();
			console.log("---------- start ------------");
		},
		addEvents: function () {
			console.log("+++++++++++ addEvents ++++++++++");
			this.addEventToMenu();
			console.log("----------- addEvents ----------");
		},
		addEventToMenu: function () {
			console.log("+++++++++++addEventToMenu+++++++++++");
			var headerMenu = PageBuilderInfo.headerMenu;
			for (var i = 0; i < headerMenu.length; i++) {
				(function (i) {
					var id = Utils.generateId(headerMenu[i]);
					console.log(id);
					Events.addHover(id);
					Events.addClickEvent(id, Utils.getClickHandler(Object.keys({ headerMenu })[0]));
				})(i);
			}
			console.log("-------------addEventToMenu--------------");
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
			DOMAppender.append(PageBuilderInfo.headerMenuId, headerMenuHTML); PageBuilder.setWorkspace(PageBuilderInfo.workingSpaceId);
			PageBuilder.seperateElement(PageBuilderInfo.workingSpaceId);
		},
		getBodyDivStructure: function () {
			var bodyDivStructure = '<div><div id="' + PageBuilderInfo.headerMenuId + '"></div><div id="' + PageBuilderInfo.workingSpaceId + '"></div></div>';
			return bodyDivStructure;
		}
	};
	return translation;
});