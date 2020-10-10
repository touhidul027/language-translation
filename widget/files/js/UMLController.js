
define("UMLController", ["PageBuilderInfo", "PageBuilder", "CSSDesigner", "Events", "DOMAppender"], function (PageBuilderInfo, PageBuilder, CSSDesigner, Events, DOMAppender) {
    var UMLController = {
        locality: {
            maincontainer: 'newUmlContainer',
            sidePanelId: 'sidePanel',
            bodyPanelId: 'bodyPanel',
            defaultSettingId: 'defaultSetting',
            defaultSettingHeaderId: 'defaultSettingHeader',
            defaulSettingBodyDivId: 'defaulSettingBody',
            umlClassDiagramClass: 'umlClassDiagram',
            rightClickMenuID: 'uml-rightclick-menu',
            rightClickMenuOptions: [{
                img_url: 'widget/files/js/uml/images/sample.png',
                text: 'Class',
                spanText: 'ADD'
            }, {
                img_url: 'widget/files/js/uml/images/sample.png',
                text: 'Static Variable',
                spanText: 'ADD'
            },
            {
                img_url: 'widget/files/js/uml/images/sample.png',
                text: 'Instance Variable',
                spanText: 'ADD'
            }, {
                img_url: 'widget/files/js/uml/images/sample.png',
                text: 'Static Method',
                spanText: 'ADD'
            }]
        },
        addEvents: function () {
            //Events.rightClickMenu(this.locality.umlClassDiagramClass, this.locality.rightClickMenuID);
        },
        addEventToExpandMenuButtonVector: function (element) {
            var thisContext = this;
            element.onclick = function () {
                thisContext.displayfaultSettingBody();
            }
        },
        generateUMLStructure: function () {
            console.log("+++++++++generateUMLStructure+++++++++");
            // if uml environment is ready then do not need to create it again
            var e = document.getElementById(this.locality.maincontainer);
            if (e) {
                console.log("---------generateUMLStructure---------");
                return;
            }
            this.attachUMLRightClickMenu();
            var workingSpace = document.getElementById(PageBuilderInfo.workingSpaceId);
            var mainContainer = this.createMainContainer(this.locality.maincontainer);
            if (mainContainer !== null) {
                workingSpace.appendChild(mainContainer);
                var sidePanel = this.createSidePanel(this.locality.sidePanelId);
                var bodyPanel = this.createBodyPanel(this.locality.bodyPanelId);
                mainContainer.appendChild(sidePanel);
                mainContainer.appendChild(bodyPanel);
            }
            this.addEvents();
            console.log("---------generateUMLStructure---------");
        },
        createMainContainer: function (elemId) {
            console.log("++++++++++++ createMainContainer +++++++++++++");
            var mainContainer = document.createElement('div');
            mainContainer.setAttribute('id', elemId);
            var cssObject = {
                display: 'flex'
            };
            var cssText = CSSDesigner.buildStyleString(cssObject);
            mainContainer.style.cssText = cssText;
            console.log("------------ createMainContainer -------------");
            return mainContainer;
        },
        createSidePanel: function (elemId) {
            console.log("++++++++++++ createSidePanel +++++++++++++");
            var sidePanel = document.createElement('div');
            sidePanel.setAttribute('id', elemId);
            console.info(sidePanel);
            var css = {
                height: '500px',
                width: '300px',
                'background-color': 'gray',
                margin: '5px'
            };
            var cssText = CSSDesigner.buildStyleString(css);
            sidePanel.style.cssText = cssText;
            this.createDefaultSetting(sidePanel);
            console.log("------------ createSidePanel -------------");
            return sidePanel;
        },
        createDefaultSetting: function (parentElement) {
            console.log("++++++++++++ createDefaultSetting +++++++++++++");
            var defaultSetting = document.createElement('div');
            defaultSetting.setAttribute('id', this.locality.defaultSettingId);
            defaultSetting = this.createDefaultSettingHeader(defaultSetting);
            defaultSetting.appendChild(PageBuilder.expandMenuButtonVector(this.locality.defaultSettingId));
            this.addEventToExpandMenuButtonVector(defaultSetting);
            parentElement.appendChild(defaultSetting);
            console.log("------------ createDefaultSetting -------------");
            return parentElement;
        },
        createDefaultSettingHeader: function (parentElem) {
            console.log("++++++++++++ createDefaultSettingHeader +++++++++++++");
            var defaultSettingHeader = document.createElement('div');
            defaultSettingHeader.setAttribute('id', this.locality.defaultSettingHeaderId);
            var css = {
                height: '44px',
                width: 'auto',
                'text-align': 'start',
            }
            var cssText = CSSDesigner.buildStyleString(css);
            defaultSettingHeader.style.cssText = cssText;
            defaultSettingHeader.innerText = "Default Setting";
            parentElem.appendChild(defaultSettingHeader);
            console.log("------------ createDefaultSettingHeader -------------");
            return parentElem;
        },
        displayfaultSettingBody: function () {
            console.log("++++++++++++ displayfaultSettingBody +++++++++++++");
            var settingBodyDiv = this.createDefaultSettingBody();
            if (settingBodyDiv) {
                document.body.appendChild(settingBodyDiv);
            }
            console.log("------------ displayfaultSettingBody -------------");
        },
        createDefaultSettingBody: function () {
            console.log("++++++++++++ createDefaultSettingBody +++++++++++++");
            var settingBodyDiv = document.createElement('div');
            var divId = this.locality.defaulSettingBodyDivId;
            var element = document.getElementById(divId);
            if (element) {
                CSSDesigner.switchDisplay(element);
                return null;
            }
            settingBodyDiv.setAttribute('id', divId);
            var cssObject = {
                width: '283px',
                height: '108px',
                'background-color': 'grey',
                transform: 'translate',
                border: 'solid whitesmoke 1px',
                display: 'flex',
                padding: '2px',
                margin: '5px',
                position: 'absolute',
                left: '24px',
                top: '108px',
                overflow: 'auto'
            };
            var cssText = CSSDesigner.buildStyleString(cssObject);
            settingBodyDiv.style.cssText = cssText;
            var pairInputMap = {
                Fields: 'defaultFieldNumber',
                Methods: 'defaultMethodNumber'
            };
            var inputValuesMap = {
                defaultFieldNumber: 3,
                defaultMethodNumber: 3
            };
            var settingBodyDivAndPairedDiv = PageBuilder.addPairInput(settingBodyDiv, pairInputMap);
            var nodes = settingBodyDivAndPairedDiv.childPairedDiv.childNodes;
            var inputNodesSet = DOMAppender.elementExtract(nodes, "input");
            DOMAppender.appendText(inputNodesSet, inputValuesMap);
            DOMAppender.addButton(settingBodyDiv, { text: "refresh", id: "defaultFieldMethodNumberButton" });
            console.log("------------ createDefaultSettingBody -------------");
            return settingBodyDivAndPairedDiv.parentElement;
        },
        refreshMainPanel: function () {
            console.log("++++++++++++ refreshMainPanel +++++++++++++");
            console.log("------------ refreshMainPanel -------------");
        },
        createBodyPanel: function (bodyPanelDivId) {
            console.log("++++++++++++ createBodyPanel +++++++++++++");

            var bodyPanelDiv = document.createElement('div');
            bodyPanelDiv.setAttribute("id", bodyPanelDivId);
            var cssObj = {
                'background- color': 'lightgray',
                width: '1080px',
                height: '506px',
                margin: '5px',
                border: 'solid whitesmoke 1px',
            }
            var cssText = CSSDesigner.buildStyleString(cssObj);
            bodyPanelDiv.style.cssText = cssText;
            var classDiagram = this.drawClassDiagram();
            bodyPanelDiv.appendChild(classDiagram);
            Events.dragElement(classDiagram); // frame will be dragrable
            //Events.rightClickMenu(classDiagram, "fun123");
            console.log("------------ createBodyPanel -------------");
            return bodyPanelDiv;
        },
        // the div area that will contains UML information
        drawClassDiagram: function () {
            console.log("++++++++++++ drawClassDiagram +++++++++++++");
            var diagrams = document.getElementsByClassName(this.locality.umlClassDiagramClass);
            var classDiagramId = this.locality.umlClassDiagramClass + '_';
            if (diagrams) {
                classDiagramId += diagrams.length;
            } else {
                classDiagramId += '0';
            }

            var classDiagram = document.createElement('div');
            classDiagram.setAttribute("id", classDiagramId);
            classDiagram.classList.add(this.locality.umlClassDiagramClass);
            var cssObj = {
                position: 'absolute',
                'background- color': 'lightgray',
                width: '300px',
                height: '430px',
                margin: '5px',
                border: 'solid black 1px',
                'background-color': 'silver',
                overflow: 'hidden'
            }
            var cssText = CSSDesigner.buildStyleString(cssObj);
            classDiagram.style.cssText = cssText;
            Events.rightClickMenu(classDiagram, this.locality.rightClickMenuID);
            console.log("------------ drawClassDiagram -------------");
            return classDiagram;
        },
        attachUMLRightClickMenu: function () {
            console.log("+++++++++++++ getUMLRightClickMenu +++++++++++++");
            var thisContext = this;

            var rightClickMenu = document.createElement('div');
            rightClickMenu.setAttribute("id", this.locality.rightClickMenuID);

            for (let i = 0; i < thisContext.locality.rightClickMenuOptions.length; i++) {
                (function (i) {
                    let option = thisContext.locality.rightClickMenuOptions[i];

                    var aTag = document.createElement('a');
                    aTag.setAttribute('href', "#");

                    var img = document.createElement('img');
                    var imgUrl = Events.getImageUrl(option.img_url);
                    img.src = imgUrl; // "http://localhost:8091/widget/files/js/sample.png";
                    aTag.appendChild(img);

                    var txt = document.createTextNode(option.text);
                    aTag.appendChild(txt);

                    var spanTxt = document.createElement('span')
                    spanTxt.innerText = option.spanText;
                    aTag.appendChild(spanTxt);

                    rightClickMenu.appendChild(aTag);
                })(i);
            }

            document.body.appendChild(rightClickMenu);
            console.log("------------ getUMLRightClickMenu ------------");
        }
    };
    return UMLController;
});