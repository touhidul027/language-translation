define("CSSDesigner", ["Events","Utils"], function (Events, Utils) {
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
        isDisplayed: function (e) {
            var element = Utils.getElement(e);
            var isDisplayed = true;
            if (element.style.display === 'none' || element.style.display === 'hiden') {
                isDisplayed = false;
            }
            return isDisplayed;
        },
        setDisplay: function(e, cmd) {
            var element = Utils.getElement(e);
            function _setDisplayNone(ele) {
                ele.style.display = 'none';
            }
            function _setDisplayBlock(ele) {
                ele.style.display = 'block';
            }
            if (cmd.toLowerCase() === "none") {
                _setDisplayNone(element);
            } else if (cmd.toLowerCase() === "block") {
                _setDisplayBlock(element);
            }
        },
        switchDisplay: function(element) {
            if (element.style.display === 'none') {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        },
        viewAsSibling: function(srcEle, temp, direction) {
            var cssObj = Events.getPosition(srcEle);
            var tempDiv = Utils.getElement(temp);
            tempDiv.style.position = "fixed";
            tempDiv.style.display = "bloack";
            if (direction === "right") {
                tempDiv.style.top = cssObj.top + "px";
                tempDiv.style.left = cssObj.left + cssObj.width + "px";
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