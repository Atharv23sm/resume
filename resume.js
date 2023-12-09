
var prev_scroll = window.pageYOffset;
window.onscroll = function () {
    var cur_scroll = window.pageYOffset;
    if (prev_scroll > cur_scroll) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-8vw";
    }
    prev_scroll = cur_scroll;
}

function onClickTransition(element) {
    element.classList.toggle('afterclick');
}

function onClickSect(sectid) {
    var div = document.getElementById(sectid);
    div.classList.toggle('afterclick');
}
