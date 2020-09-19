define("DOMAppender", [], function () {
    var DOMAppender = {
        append: function (elementId, htmlStr) {
            console.info('+++++++append++++++++');
            document.getElementById(elementId).innerHTML = htmlStr;
            console.info('-------append--------');
        }
    };
    return DOMAppender;
});