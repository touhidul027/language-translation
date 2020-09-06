define("CSSDesigner", [], function () {
	var pageBuilder = {
		designMenu: function (menu) {
			console.log('++++++++ designMenu +++++++');
			
			console.log('--------designMenu-------');
			return menu;
        },
        getMenuStyle: function(type) {
            if (type === "div") {
                return "font:red;"
            }
        },
        test: function() {
            console.info("testing----------");
        }
	};
	return pageBuilder;
});