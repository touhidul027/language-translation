define("DOMAppender", ["CSSDesigner", "Events", "Utils"], function (CSSDesigner, Events, Utils) {
    var DOMAppender = {
        append: function (elementId, htmlStr) {
            console.info('+++++++append++++++++');
            document.getElementById(elementId).innerHTML = htmlStr;
            console.info('-------append--------');
        },
        _appendTextToElement: function (Element, text) {
            // check if it is elementId, or Element, or nodeList
            if (Element.type = "input") {
                Element.setAttribute("value", text);
            }
        },
        // could be array, set
        appendText: function (e, obj) {
            var thisContext = this;
            var isNodes = NodeList.prototype.isPrototypeOf(e);
            var isSet = e instanceof Set;
            if (isSet) {
                e.forEach(function (key, value) {
                    var elementId = key.getAttribute('id');
                    var text = obj[elementId];
                    thisContext._appendTextToElement(key, text);
                });
            }
        },
        elementExtract: function (nodes, elementType, newNodes) {
            if (!nodes) {
                return null;
            }
            if (!newNodes) {
                newNodes = new Set();
            }
            if (!nodes.length && nodes.tagName === 'DIV') {
                newNodes = this.elementExtract(nodes.childNodes, elementType, newNodes);
            }
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].tagName === 'DIV') {
                    newNodes = this.elementExtract(nodes[i], elementType, newNodes);
                } else if (nodes[i].tagName && nodes[i].tagName.toLowerCase() === elementType.toLowerCase()) {
                    console.info("Matched");
                    newNodes.add(nodes[i]);
                }
            }
            return newNodes;
        },
        addButton: function (parentElement, obj) {
            var div = document.createElement('div');
            var cssObj = {
                padding: '10px'
            }
            var style = CSSDesigner.buildStyleString(cssObj);
            var temp = document.createElement('div');
            temp.style.cssText = style;
            var btn = document.createElement("BUTTON");
            btn.innerHTML = obj.text;
            btn.setAttribute('id', obj.id);
            temp.appendChild(btn);
            parentElement.appendChild(temp);
        },
        appendElementToBody: function(element){
            document.body.appendChild(element);
        }
    };
    return DOMAppender;
});