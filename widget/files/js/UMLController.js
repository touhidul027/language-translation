
define("UMLController", ["PageBuilderInfo", "PageBuilder", "CSSDesigner", "Events", "DOMAppender"], function (PageBuilderInfo, PageBuilder, CSSDesigner, Events, DOMAppender) {
    var UMLController = {
        locality: {
            maincontainer: 'newUmlContainer',
            sidePanelId: 'sidePanel',
            defaultSettingId: 'defaultSetting',
            defaultSettingHeaderId: 'defaultSettingHeader',
            defaulSettingBodyDivId: ' defaulSettingBody'
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
            var workingSpace = document.getElementById(PageBuilderInfo.workingSpaceId);

            console.info(this.locality.maincontainer);
            var mainContainer = this.createMainContainer(this.locality.maincontainer);
            if (mainContainer !== null) {
                workingSpace.appendChild(mainContainer);
                var sidePanel = this.createSidePanel(this.locality.sidePanelId);
                console.info(workingSpace);
                mainContainer.appendChild(sidePanel);
            }

            console.log("---------generateUMLStructure---------");
        },
        createMainContainer: function (elemId) {
            console.log("++++++++++++ createMainContainer +++++++++++++");
            var mainContainer = document.createElement('div');
            mainContainer.setAttribute('id', elemId);
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
        }
    };
    return UMLController;
});