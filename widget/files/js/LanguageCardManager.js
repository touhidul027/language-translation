define("LanguageCardManager", ["PageBuilder", "Utils", "DOMAppender", "HTMLMarkupBuilder"], function (PageBuilder, Utils, DOMAppender, HTMLMarkupBuilder) {
    var LanguageCardManager = {
        process: function(elementLanguageCard, menus) {
            console.log("+++++++++++++ process ++++++++++++++");
            if (elementLanguageCard == null) {
                return;
            }
            var languageMenus = HTMLMarkupBuilder.buildMenuDiv(menus);
            console.log(languageMenus);
            var elementId = Utils.getElementId(elementLanguageCard);
            console.log(elementId);
            DOMAppender.append(elementId, languageMenus);
            console.log("------------ process --------------");
        }
    };
    return LanguageCardManager;
});