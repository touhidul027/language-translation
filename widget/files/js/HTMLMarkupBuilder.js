define("HTMLMarkupBuilder", [], function () {
    var HTMLMarkupBuilder = {
        buildMenuDiv: function(menus) {
            console.log("+++++++++++++ buildMenuDiv ++++++++++++++");
            var thisContext = this;
            var arr = menus;
            var style1 = thisContext.horizantalProperty();
			var menu = '<div style="' + style1 + '">';
			for (var i = 0; i < arr.length; i++) {
				(function (i) {
					var itemText = arr[i];
					var id = function generateId(itemText) {
						return itemText.toLowerCase().split(" ").join("");
					}(itemText);
					var style = thisContext.seperateMenus('div');
					var item = '<div id="' + id + '" style="' + style + '">' + arr[i] + '</div>';
					menu += item;
				})(i);
			}
			menu += '</div>';
            console.log("------------ buildMenuDiv --------------");
            return menu;
        },
        horizantalProperty: function() {
            return "display: flex;";
        },
        seperateMenus: function(type) {
            if (type === "div" || type == null || type == undefined) {
                return "margin: 5px; padding: 5px;"
            }
        }
    };
    return HTMLMarkupBuilder;
});