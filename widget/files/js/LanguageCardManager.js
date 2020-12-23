define("LanguageCardManager", ["PageBuilder", "Utils", "DOMAppender", "HTMLMarkupBuilder"], function (PageBuilder, Utils, DOMAppender, HTMLMarkupBuilder) {
    var LanguageCardManager = {
        process: function(elementLanguageCard, menus) {
            console.log("+++++++++++++ process ++++++++++++++");
            if (elementLanguageCard == null) {
                return;
            }
            var elementId = Utils.getElementId(elementLanguageCard);
            console.log(elementId);

            var options = {
                parentNodeClass: "language-card-header-menus",
                idPrefix: elementId,
                idSufix: ""
            }
            var languageMenus = HTMLMarkupBuilder.buildMenuDiv(menus, options);
            console.log(languageMenus);
            
            DOMAppender.append(elementId, languageMenus);
            options = {
                className: "language-card-header-body",
                id: elementId + "_body"
            }
            var LanguageCardBodyDiv = HTMLMarkupBuilder.createDiv(options);
            console.log(LanguageCardBodyDiv);

            DOMAppender.appendLast(elementLanguageCard, LanguageCardBodyDiv);

            console.log("------------ process --------------");
        }
    };
    return LanguageCardManager;
});