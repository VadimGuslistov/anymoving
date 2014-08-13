function AddPlusOne() {
    if ("true" === document.getElementById("goodshare").getAttribute("viewcounter")) {
        var a = new(window.XDomainRequest || window.XMLHttpRequest);
        a.open("GET", "http://share.cntrlmrktng.ru/1.1/goodshare.php?addPlusOne=" + encodeURIComponent(document.location.href), !0);
        a.send(null)
    }
}

function WindowOpen(a) {
    window.open(a, "", "toolbar=0, status=0, width=626, height=436");
    return !1
}
window.onload = function() {
    for (var a = new Date, h = document.getElementById("goodshare").getAttribute("themecolor"), k = document.getElementById("goodshare").getAttribute("themestyle"), b = document.getElementById("goodshare").getAttribute("socialnetworks"), d = document.getElementById("goodshare").getAttribute("iconsize"), e = document.getElementById("goodshare").getAttribute("buttonfixed"), l = document.getElementById("goodshare").getAttribute("viewcounter"), m = encodeURIComponent(document.title), n = encodeURIComponent(document.location.href),
        g = "", f = 0; f < document.getElementsByName("description").length; f++) g = encodeURIComponent(document.getElementsByName("description")[f].getAttribute("content"));
    "4" >= b.split(",").length ? document.getElementById("goodshare").style.top = document.documentElement.clientHeight / 3 + "px" : "6" >= b.split(",").length ? document.getElementById("goodshare").style.top = document.documentElement.clientHeight / 4 + "px" : "8" >= b.split(",").length ? document.getElementById("goodshare").style.top = document.documentElement.clientHeight / 5 +
        "px" : "10" >= b.split(",").length ? document.getElementById("goodshare").style.top = document.documentElement.clientHeight / 6 + "px" : "12" >= b.split(",").length ? document.getElementById("goodshare").style.top = document.documentElement.clientHeight / 7 + "px" : "14" >= b.split(",").length && (document.getElementById("goodshare").style.top = document.documentElement.clientHeight / 8 + "px");
    "left" === e && (document.getElementById("goodshare").style.position = "fixed", document.getElementById("goodshare").style.width = d + "px", document.getElementById("goodshare").style.left =
        "5px");
    "right" === e && (document.getElementById("goodshare").style.position = "fixed", document.getElementById("goodshare").style.width = d + "px", document.getElementById("goodshare").style.right = "10px");
    var a = "http://share.cntrlmrktng.ru/1.1/goodshare.php?themecolor=" + h + "&themestyle=" + k + "&socialnetworks=" + b + "&iconsize=" + d + "&buttonfixed=" + e + "&viewcounter=" + l + "&documenttitle=" + m + "&documenturl=" + n + "&metadescription=" + g + "&" + a.getTime(),
        c = new(window.XDomainRequest || window.XMLHttpRequest);
    c.onload = function() {
        document.getElementById("goodshare").innerHTML =
            c.responseText
    };
    c.open("GET", a, !0);
    c.send(null)
};