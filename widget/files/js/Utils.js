
define("Utils", [], function () {
    var Utils = {
        generateId: function (str) {
            return str.toLowerCase().split(" ").join("");
        },
        generateRandomId: function () {
            //return id of format 'aaaabbbbaaaa'
            return this.s4() + '' + this.s4() + '' + this.s4();
        },
        s4: function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        },
        getClickHandler: function (key) {
            var func;
            if (key === 'headerMenu') {
                func = function (elementId) {
                    if (elementId === 'newuml') {
                        console.info('------ ' + elementId + ' clicked');
                        require(['UMLController'], function (UMLController) {
                            'use strict';
                            UMLController.generateUMLStructure();
                        });
                    } else if (elementId === 'uploadjson') {
                        console.info('------ ' + elementId + ' clicked');
                    }
                }
            } else if (key === "defaultFieldMethodNumberButton") {
                func = function (elementId) {
                    require(['UMLController'], function (UMLController) {
                        'use strict';
                        UMLController.refreshMainPanel();
                    });
                }
            }
            return func;
        },
        getElementId: function(element) {
            if (element == null) {
                return null;
            }
            return element.getAttribute("id");
        },
        getElement: function(e) {
            var element = null;
            if (typeof e === 'string') {
                element = document.getElementById(e);
            } else {
                element = e;
            }
            return element;
        },
        addClassToElement: function(e, className) {
            e = this.getElement(e);
            e.classList.add(className);
            return e;
        },
        getFirstLevelChild: function(element) {
            console.log("++++++ getFirstLevelChild +++++");
            function getChildNodes(node) {
                var children = new Array();
                for(var child in node.childNodes) {
                    if(node.childNodes[child].nodeType == 1) {
                        children.push(child);
                    }
                }
                return children;
            }
            console.log("------ getFirstLevelChild -----");
        },
        isEmpty: function(x) {
            if(typeof(x) === 'object'){
                if(JSON.stringify(x) === '{}' || JSON.stringify(x) === '[]'){
                    return true;
                }else if(!x){
                    return true;
                }
                return false;
            }
            return (
                (typeof x == 'undefined')
                            ||
                (x == null)
                            ||
                (x == false)  //same as: !x
                            ||
                (x.length == 0)
                            ||
                (x == "")
                            ||
                (x.replace(/\s/g,"") == "")
                            ||
                (!/[^\s]/.test(x))
                            ||
                (/^\s*$/.test(x))
            );
        }
    };
    return Utils;
});