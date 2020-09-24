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
                cssText += key + ':' + value + ';';
            }
            return cssText;
        },
        expandMenuButtonVectorCss: function() {
            var cssObj = {
                'width': '35px',
                'height': '5px',
                'background-color': 'black',
                'margin': '6px 0'
            };
            var cssStyle = this.buildStyleString(cssObj);
            return cssStyle;
        },
        switchDisplay: function(element) {
            if (element.style.display === 'none') {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        },
        appendInnerHtml: function(elementId, innerHTML) {
            document.getElementById(elementId).innerHTML = innerHTML;
        },
        
        test: function () {
            console.info("testing----------");
        }
    };
    return pageBuilder;
});