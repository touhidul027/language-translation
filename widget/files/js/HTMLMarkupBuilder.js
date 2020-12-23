define("HTMLMarkupBuilder", ["Utils"], function (Utils) {
    var HTMLMarkupBuilder = {
        buildMenuDiv: function(menus, options) {
            console.log("+++++++++++++ buildMenuDiv ++++++++++++++");
            var thisContext = this;
            var arr = menus;
            var cls = Utils.isEmpty(options.parentNodeClass) === true ? "" : options.parentNodeClass;
            var idPref = Utils.isEmpty(options.idPrefix) === true ? "" : options.idPrefix;
            var idSufix = Utils.isEmpty(options.idSufix) === true ? "" : options.idSufix;
            var style1 = thisContext.horizantalProperty();
			var menu = '<div style="' + style1 + '" class="'+ cls +'">';
			for (var i = 0; i < arr.length; i++) {
				(function (i) {
					var itemText = arr[i];
					var id = function generateId(itemText) {
						return  idPref + itemText.toLowerCase().split(" ").join("") + idSufix;
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
        },
        createDiv: function(options) {
            var div = document.createElement('div');
            if (!Utils.isEmpty(options.className)) {
                div.classList.add(options.className);
            }
            if (!Utils.isEmpty(options.id)) {
                div.classList.add(options.id);
            }
            return div
        }
    };
    return HTMLMarkupBuilder;
});