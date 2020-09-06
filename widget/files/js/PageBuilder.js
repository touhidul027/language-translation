define("PageBuilder", ["CSSDesigner"], function (CSSDesigner) {
	var pageBuilder = {
		buildMenu: function (arr) {
			console.log('++++++++ buildMenu +++++++');
			var style1 = CSSDesigner.horizantalAlignment();
			var menu = '<div style="' + style1 + '">';
			for (var i = 0; i < arr.length; i++) {
				(function (i) {
					var itemText = arr[i];
					console.log(arr[i]);
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
		}
	};
	return pageBuilder;
});