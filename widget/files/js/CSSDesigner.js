define("CSSDesigner", [], function () {
    var pageBuilder = {
        designMenu: function (menu) {
            console.log('++++++++ designMenu +++++++');

            console.log('--------designMenu-------');
            return menu;
        },
        getMenuStyle: function (type) {
            if (type === "div") {
                return "background: oldlace;margin: 5px; padding: 5px;width: 110px;"
            }
        },
        horizantalAlignment: function () {
            return "display: flex;background-color: lightslategray;";
        },
        buildStyleString: function (cssObj) {
            var cssText = '';
            for (const [key, value] of Object.entries(cssObj)) {
                console.info(key + ' ' + value);
                cssText += key + ':' + value + ';';
            }
            return cssText;
        },
        test: function () {
            console.info("testing----------");
        }
    };
    return pageBuilder;
});