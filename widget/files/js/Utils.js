
define("Utils", [], function () {
    var Utils = {
        generateId: function (str) {
            return str.toLowerCase().split(" ").join("");
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
        }
    };
    return Utils;
});