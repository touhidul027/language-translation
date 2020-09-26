define("PageBuilder", ["CSSDesigner", "Events"], function (CSSDesigner, Events) {
	var pageBuilder = {
		buildMenu: function (arr) {
			console.log('++++++++ buildMenu +++++++');
			var style1 = CSSDesigner.horizantalAlignment();
			var menu = '<div style="' + style1 + '">';
			for (var i = 0; i < arr.length; i++) {
				(function (i) {
					var itemText = arr[i];
					var id = function generateId(itemText) {
						return itemText.toLowerCase().split(" ").join("");
					}(itemText);
					var style = CSSDesigner.getMenuStyle('div');
					var item = '<div id="' + id + '" style="' + style + '">' + arr[i] + '</div>';
					menu += item;
				})(i);
			}
			menu += '</div>';
			console.log('--------buildMenu-------');
			return menu;
		},
		setBodyStyle: function () {
			document.body.style = "background-color: white;"
		},
		setWorkspace: function (workingSpaceId) {
			var element = document.getElementById(workingSpaceId);
			element.style.height = '720px';
			element.style.backgroundColor = 'lightgray';
		},
		seperateElement: function (elementId) {
			var elementStyle = document.getElementById(elementId).style;
			elementStyle.padding = '5px';
			elementStyle.margin = '5px';
		},
		expandMenuButtonVector: function (elementId) {
			var expandMenuId = 'expandMenu' + elementId;
			var expandMenu = document.createElement('div');
			expandMenu.setAttribute('id', expandMenuId);
			var cssObj = {
				'margin': '2px',
				'padding': '2px'
			}
			expandMenu.style.cssText = CSSDesigner.buildStyleString(cssObj);
			var className = 'class' + elementId;
			var style = CSSDesigner.expandMenuButtonVectorCss();
			expandMenu = this.addDivs(expandMenu, 3, className, style);
			Events.addHover(expandMenu);
			return expandMenu;
		},
		addDivs: function (expandMenu, n, className, divStyle) {
			for (var i = 0; i < n; i++) {
				var div = document.createElement('div');
				div.classList.add(className);
				if (divStyle) {
					div.style.cssText = divStyle;
				}
				expandMenu.appendChild(div);
			}
			return expandMenu;
		},
		addPairInput: function (parentElement, map) {
			var div = document.createElement('div');
			var cssObj = {
				padding: '10px',
				display: 'flex'
			}
			var pairStyle = CSSDesigner.buildStyleString(cssObj);
			for (const [key, value] of Object.entries(map)) {
				var temp = document.createElement('div');
				temp.innerHTML = key + '<input type="text" id="' + value + '" name="fname" style="width: 100px;margin-left: 10px;background-color: lightgrey;"></input>';
				temp.style.cssText = pairStyle;
				div.appendChild(temp);
			}
			parentElement.appendChild(div);
			return {
				"parentElement": parentElement,
				"childPairedDiv": div
			}
		}
	};
	return pageBuilder;
});