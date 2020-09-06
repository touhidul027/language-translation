
define("DOMAppender", [], function () {
	var DOMAppender = {
		append: function(elementId, htmlStr) {
            console.info('+++++++append++++++++');
            console.log(elementId);
            console.log(htmlStr)
            document.getElementById(elementId).append(htmlStr);
            console.info('-------append--------');
        }
	};
	return DOMAppender;
});