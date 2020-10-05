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
            element.onclick = function () {
                callBack(elementId);
            }
            console.log("----------addClickEvent---------");
        },
        removeClickEvent: function () {
            console.log("++++++++++removeClickEvent+++++++++");
            console.log("----------removeClickEvent---------");
        },
        dragElement: function (el) {
            el.addEventListener('mousedown', function (e) {
                var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
                var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

                function mouseMoveHandler(e) {
                    el.style.top = (e.clientY - offsetY) + 'px';
                    el.style.left = (e.clientX - offsetX) + 'px';
                }

                function reset() {
                    el.removeEventListener('mousemove', mouseMoveHandler);
                    el.removeEventListener('mouseup', reset);
                }

                el.addEventListener('mousemove', mouseMoveHandler);
                el.addEventListener('mouseup', reset);
            });
        },
        loadCssFile: function (fileName) {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            var url = window.location.host + '/' + fileName;
            link.href = url;
            document.getElementsByTagName("head")[0].appendChild(link);
        },
        getImageUrl: function (fileName) {
            var url = 'http://'+ window.location.host + '/' + fileName;
            return url;
        },
        rightClickMenu: function (menuID) {
            console.log("+++++++++ rightClickMenu ++++++++++");
            var i = document.getElementById(menuID).style;
            if (document.addEventListener) {
                document.addEventListener('contextmenu', function (e) {
                    var posX = e.clientX;
                    var posY = e.clientY;
                    menu(posX, posY);
                    e.preventDefault();
                }, false);
                document.addEventListener('click', function (e) {
                    i.opacity = "0";
                    setTimeout(function () {
                        i.visibility = "hidden";
                    }, 501);
                }, false);
            } else {
                document.attachEvent('oncontextmenu', function (e) {
                    var posX = e.clientX;
                    var posY = e.clientY;
                    menu(posX, posY);
                    e.preventDefault();
                });
                document.attachEvent('onclick', function (e) {
                    i.opacity = "0";
                    setTimeout(function () {
                        i.visibility = "hidden";
                    }, 501);
                });
            }

            function menu(x, y) {
                i.top = y + "px";
                i.left = x + "px";
                i.visibility = "visible";
                i.opacity = "1";
            }
            console.log("---------- rightClickMenu -----------");
        }
    };
    return Events;
});