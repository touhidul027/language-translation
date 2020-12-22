
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
        }
    };
    return Utils;
});