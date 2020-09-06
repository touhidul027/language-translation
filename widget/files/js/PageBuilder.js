define("PageBuilder", ["CSSDesigner"], function (CSSDesigner) {
	var pageBuilder = {
		buildMenu: function (arr) {
			console.log('++++++++ buildMenu +++++++');
			var menu = '<div>';
			for (var i = 0; i < arr.length; i++) {
				(function (i) {
					var itemText = arr[i];
					console.log(arr[i]);
					var id = function generateId(itemText) {
						return itemText.toLowerCase().split(" ").join("");
					}(itemText);
					var style = CSSDesigner.getMenuStyle('div');
					var item = '<div id="' + id + '" styles="' + style + '">' + arr[i] + '</div>';

					menu += item;
				})(i);
			}
			menu += '</div>';
			console.log('--------buildMenu-------');
			return menu;
		}
	};
	return pageBuilder;
});