define("Events", [], function () {
    var Events = {
        addHover: function (e) {
            console.log("++++++++++addHover+++++++++");
            var element;
            if (typeof e === 'string') {
                element = document.getElementById(e);
            } else {
                element = e;
            }
            
            element.onmouseover = function () {
                this.style.boxShadow = "10px 10px 5px #888";
                this.style.cursor = "pointer";
            }
            element.onmouseleave = function () {
                this.style.boxShadow = "0px 0px 0px #888";
            }
            console.log("----------addHover---------");
        },
        addClickEvent: function (elementId, callBack) {
            console.log("++++++++++addClickEvent+++++++++");
            var element = document.getElementById(elementId);
            element.onclick = function() {
                 callBack(elementId);
            }
            console.log("----------addClickEvent---------");
        },
        removeClickEvent: function() {
            console.log("++++++++++removeClickEvent+++++++++");
            console.log("----------removeClickEvent---------");
        }
    };
    return Events;
});