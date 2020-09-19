
define("UMLController", ["PageBuilderInfo","PageBuilder", "CSSDesigner"], function (PageBuilderInfo, PageBuilder, CSSDesigner) {
    var UMLController = {
        locality: {
            maincontainer: 'newUmlContainer',
            sidePanelId: 'sidePanel',
            defaultSettingId: 'defaultSetting',
            defaultSettingHeaderId: 'defaultSettingHeader'
        },
        generateUMLStructure: function () {
            console.log("+++++++++generateUMLStructure+++++++++");
            // if uml environment is ready then do not need to create it again
            var e = document.getElementById(this.locality.maincontainer);
            if (e) {
               console.log("---------generateUMLStructure---------");
               return; 
            }
            console.info("zzz " + PageBuilderInfo.workingSpaceId);
            var workingSpace = document.getElementById(PageBuilderInfo.workingSpaceId);
            console.info("+-+-+-+ locality");
            
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
            console.info(mainContainer);
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
            console.info(cssText);
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
        createDefaultSettingBody: function () {
            console.log("++++++++++++ createDefaultSettingBody +++++++++++++");

            console.log("------------ createDefaultSettingBody -------------");
        }
    };
    return UMLController;
});