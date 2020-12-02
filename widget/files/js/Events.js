define("Events", ["Utils"], function (Utils) {
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
        loadJSONFile: function (fileName) {
            var url = 'http://' + window.location.host + '/' + fileName;
            return new Promise(function (resolve, reject) {
                var httpReq = new XMLHttpRequest();
                httpReq.overrideMimeType("application/json");
                httpReq.onreadystatechange = function () {
                    var data;
                    if (httpReq.readyState == 4) {
                        if (httpReq.status == 200) {
                            data = JSON.parse(httpReq.responseText);
                            resolve(data);
                        } else {
                            reject(new Error(httpReq.statusText));
                        }
                    }
                };
                httpReq.open("GET", url, true);
                httpReq.send();
            });
        },
        rightClickMenu: function (element, menuID) {
            console.log("+++++++++ rightClickMenu ++++++++++");
            var i = document.getElementById(menuID).style;
            if (document.addEventListener) {
                element.addEventListener('contextmenu', function (e) {
                    var posX = e.clientX;
                    var posY = e.clientY;
                    menu(posX, posY);
                    e.preventDefault();
                }, false);
                element.addEventListener('click', function (e) {
                    i.opacity = "0";
                    setTimeout(function () {
                        i.visibility = "hidden";
                    }, 501);
                }, false);
            } else {
                element.attachEvent('oncontextmenu', function (e) {
                    var posX = e.clientX;
                    var posY = e.clientY;
                    menu(posX, posY);
                    e.preventDefault();
                });
                element.attachEvent('onclick', function (e) {
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
        },
        getPosition: function(e) {
            var element = Utils.getElement(e);
            var DOMRect = element.getBoundingClientRect()
            return {
                top: DOMRect.top,
                left: DOMRect.left,
                width: DOMRect.width,
                height: DOMRect.height
            }
        }
    };
    return Events;
});