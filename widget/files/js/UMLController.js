
define("UMLController", ["PageBuilderInfo", "PageBuilder", "CSSDesigner", "Events", "DOMAppender", "LanguageCardManager"], function (PageBuilderInfo, PageBuilder, CSSDesigner, Events, DOMAppender, LanguageCardManager) {
    var UMLController = {
        languageChoices: '',
        locality: {
            maincontainer: 'newUmlContainer',
            sidePanelId: 'sidePanel',
            sidePanel: {
                dragableUMLClassOptionsID: "dragableUMLClassOptions",
                dragableUMLClassOptions: [{
                    id: 'uml-class',
                    division: 'class',
                    img_url: 'widget/files/js/uml/images/sample.png',
                    text: 'Class',
                    spanText: 'ADD',
                    dataTransfer: 'umlClassName'
                }, {
                    id: 'uml-static-variable',
                    division: 'variable',
                    img_url: 'widget/files/js/uml/images/sample.png',
                    text: 'Static Variable',
                    spanText: 'ADD',
                    dataTransfer: 'umlStaticVariable'
                }, {
                    id: 'uml-instance-variable',
                    division: 'variable',
                    img_url: 'widget/files/js/uml/images/sample.png',
                    text: 'Instance Variable',
                    spanText: 'ADD',
                    dataTransfer: 'umlInstanceVariable'
                }, {
                    id: 'uml-static-method',
                    division: 'method',
                    img_url: 'widget/files/js/uml/images/sample.png',
                    text: 'Static Method',
                    spanText: 'ADD',
                    dataTransfer: 'umlStaticMethod'
                },
                {
                    id: 'uml-instance-method',
                    division: 'method',
                    img_url: 'widget/files/js/uml/images/sample.png',
                    text: 'Instance Method',
                    spanText: 'ADD',
                    dataTransfer: 'umlInstanceMethod'
                }]
            },
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
            }, {
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
                'min-width': '300px',
                'max-width': '300px',
                'background-color': 'gray',
                margin: '5px'
            };
            var cssText = CSSDesigner.buildStyleString(css);
            sidePanel.style.cssText = cssText;
            this.createDefaultSetting(sidePanel);
            this.createDragableUMLClassOptions(sidePanel);
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
        createDragableUMLClassOptions: function (sidePanel) {
            console.log("++++++++++++ createDragableUMLClassOptions +++++++++++++");
            var thisContext = this;
            var dragableUMLClassOptions = document.createElement('div');
            var divId = this.locality.sidePanel.dragableUMLClassOptionsID;
            dragableUMLClassOptions.setAttribute('id', divId);

            for (let i = 0; i < thisContext.locality.sidePanel.dragableUMLClassOptions.length; i++) {
                (function (i) {
                    let option = thisContext.locality.sidePanel.dragableUMLClassOptions[i];

                    var aTag = document.createElement('a');
                    aTag.setAttribute('href', "#");
                    console.info(option.id);
                    aTag.setAttribute('id', option.id);
                    var img = document.createElement('img');
                    var imgUrl = Events.getImageUrl(option.img_url);
                    img.src = imgUrl; // "http://localhost:8091/widget/files/js/sample.png";
                    aTag.appendChild(img);

                    //var txt = document.createTextNode(option.text);
                    //aTag.appendChild(txt);

                    var spanTxt = document.createElement('span')
                    spanTxt.innerText = option.text;
                    aTag.appendChild(spanTxt);

                    var dataTransfer = {
                        "division": option.division,
                        "dataTransfer": option.dataTransfer
                    };
                    aTag.draggable = true;
                    aTag.ondragstart = function (event) {
                        console.info("firing");
                        console.info(event.target.id);
                        event.dataTransfer.setData("text", JSON.stringify(dataTransfer));
                    };
                    dragableUMLClassOptions.appendChild(aTag);
                })(i);
            }

            sidePanel.appendChild(dragableUMLClassOptions);
            console.log("------------ createDragableUMLClassOptions -------------");
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
            this.createUMLClassSection(classDiagram);
            this.createUMLInstanceSection(classDiagram);
            this.createUMLMethodSection(classDiagram);
            Events.rightClickMenu(classDiagram, this.locality.rightClickMenuID);
            console.log("------------ drawClassDiagram -------------");
            return classDiagram;
        },
        createUMLClassSection: function (parentElement) {
            console.log("+++++++++++++ createUMLClassSection +++++++++++++++");
            /*
            <div style="height: 45px;width: auto;background-color: darkgray;border: 1px solid aliceblue;" contenteditable="true">hjykbjbjb</div>
            */
            var thisContext = this;
            var classSection = document.createElement('div');
            var singleUMLDivId = parentElement.getAttribute("id");
            var id = singleUMLDivId + "_ClassSection";
            classSection.setAttribute("id", id);
            classSection.classList.add("uml-class-section");
            //classSection.setAttribute("contenteditable", true);
            classSection.innerText = "ClassName";
            classSection.ondblclick = function (e) {
                //e.target.innerText = "";
                console.log("converting UML to code");
                thisContext.displayUMLToLanguageChoice(singleUMLDivId);
            };
            classSection.ondragover = function (e) {
                e.preventDefault()
            };
            classSection.ondrop = function (ev) {
                ev.preventDefault();
                var data = JSON.parse(ev.dataTransfer.getData("text"));
                if (data.division.toLowerCase().includes("class")) {
                    thisContext.umlInputFieldutils.generateInputForClassSection(classSection);
                }
                stop();
            }
            parentElement.appendChild(classSection);
            console.log("------------- createUMLClassSection ---------------");
        },
        createUMLInstanceSection: function (parentElement) {
            console.log("+++++++++++++ createUMLInstanceSection +++++++++++++++");
            /*
            <div style="height: 45px;width: auto;background-color: darkgray;border: 1px solid aliceblue;" contenteditable="true">hjykbjbjb</div>
            */
            var thisContext = this;
            var classSection = document.createElement('div');
            var id = parentElement.getAttribute("id") + "_createUMLInstanceSection";
            classSection.setAttribute("id", id);
            classSection.classList.add("uml-variable-section");
            //classSection.setAttribute("contenteditable", true);
            classSection.innerText = "Instances";
            classSection.ondblclick = function (e) {
                //e.target.innerText = "";
            };
            classSection.ondragover = function (e) {
                e.preventDefault()
            };
            classSection.ondrop = function (ev) {
                ev.preventDefault();
                var data = JSON.parse(ev.dataTransfer.getData("text"));
                if (data.division.toLowerCase().includes("variable")) {
                    thisContext.umlInputFieldutils.generateInputForVariableSection(classSection, data);
                }
                stop();
            }
            parentElement.appendChild(classSection);
            console.log("------------- createUMLInstanceSection ---------------");
        },
        createUMLMethodSection: function (parentElement) {
            console.log("+++++++++++++ createUMLInstanceSection +++++++++++++++");
            /*
            <div style="height: 45px;width: auto;background-color: darkgray;border: 1px solid aliceblue;" contenteditable="true">hjykbjbjb</div>
            */
            var thisContext = this;
            var methodSection = document.createElement('div');
            var id = parentElement.getAttribute("id") + "_createUMLMethodSection";
            methodSection.setAttribute("id", id);
            methodSection.classList.add("uml-method-section");
            //methodSection.setAttribute("contenteditable", true);
            methodSection.innerText = "Method";
            methodSection.ondblclick = function (e) {
                //e.target.innerText = "";
            };
            methodSection.ondragover = function (e) {
                e.preventDefault()
            };
            methodSection.ondrop = function (ev) {
                ev.preventDefault();
                var data = JSON.parse(ev.dataTransfer.getData("text"));
                if (data.division.toLowerCase().includes("method")) {
                    thisContext.umlInputFieldutils.generateInputForMethodSection(methodSection, data);
                }
                stop();
            }
            parentElement.appendChild(methodSection);
            console.log("------------- createUMLInstanceSection ---------------");
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
        },
        umlInputFieldutils: {
            generateInputForClassSection: function (element) {
                console.info("++++++++++++ generateInputForClassSection +++++++++++++++");
                console.info(element);
                if (element.children.length === 0) {
                    element.innerText = "";
                    var inputElement = document.createElement("INPUT");
                    inputElement.setAttribute("type", "text");
                    element.appendChild(inputElement);
                } else {
                    alert("Already has an element. Please modify that.");
                }
                console.info("----------- generateInputForClassSection -----------");
            },
            generateInputForVariableSection: function (element, data) {
                console.info("++++++++++++ generateInputForVariableSection +++++++++++++++");
                console.info(element);
                console.info(data);
                /*
                data = {
                    "division": "variable",
                    "dataTransfer": "umlInstanceVariable"
                }
                */
                if (element.children.length === 0) {
                    element.innerText = "";
                }
                var inputElement = document.createElement("INPUT");
                inputElement.setAttribute("type", "text");
                inputElement.setAttribute("variable-type", data.dataTransfer);
                element.appendChild(inputElement);
                //alert("You created variable section.");
                console.info("----------- generateInputForVariableSection -----------");
            },
            generateInputForMethodSection: function (element, data) {
                console.info("++++++++++++ generateInputForMethodSection +++++++++++++++");
                console.info(element);
                console.info(data);
                if (element.children.length === 0) {
                    element.innerText = "";
                }
                var inputElement = document.createElement("INPUT");
                inputElement.setAttribute("type", "text");
                element.appendChild(inputElement);
                //alert("You created variable section.");
                console.info("----------- generateInputForMethodSection -----------");
            }
        },
        displayUMLToLanguageChoice: function (umlDivId) {
            console.log("++++++++++ displayUMLToLanguageChoice +++++++++++");
            var fileName = 'widget/files/js/LanguageConfigurations.json';
            var cardDivId = umlDivId + "_languageTranslationCard";
            var LanguageCard = document.getElementById(cardDivId);
            if (LanguageCard != null) {
                var isDisplayed = CSSDesigner.isDisplayed(LanguageCard);
                if (isDisplayed) {
                    CSSDesigner.setDisplay(LanguageCard, "none");
                } else {
                    CSSDesigner.setDisplay(LanguageCard, "block");
                }
            }
            Events.loadJSONFile(fileName).then(function (jsonData) {
                languageChoices = jsonData.languages;
                var languageArray = [];
                for (const [key, value] of Object.entries(languageChoices)) {
                    languageArray.push(value.name);
                }
                LanguageCard = PageBuilder.createLanguageCard(umlDivId, cardDivId, languageArray);
                CSSDesigner.viewAsSibling(umlDivId, LanguageCard, "right");
                LanguageCardManager.process(LanguageCard, languageArray);
            });

            var umlDivElement = document.getElementById(umlDivId);
            console.log("---------- displayUMLToLanguageChoice -----------");
        }
    };
    return UMLController;
});