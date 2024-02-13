

function showNav() {

    var i = document.getElementById('i');
    var nav = document.getElementById('navs');


    if (!nav.style.display || nav.style.display === "none") {
        nav.style.display = "flex";
        i.className = "fa fa-close";

    }
    else {
        nav.style.display = "none";
        i.className = "fa fa-bars";

    }
}

var prev_scroll = window.pageYOffset;
window.onscroll = function () {
    var cur_scroll = window.pageYOffset;
    if (prev_scroll > cur_scroll) {
        document.getElementById("navbar").style.top = "20px";
    } else {
        document.getElementById("navbar").style.top = "-500px";
    }
    prev_scroll = cur_scroll;
}

function onclickSect(id, i) {

    var sect_cont = document.getElementById(id);
    var i = document.getElementById(i);

    if (!sect_cont.style.display || sect_cont.style.display == "none") {
        sect_cont.style.display = "block";
        i.className = "fa fa-angle-left";
    }
    else {

        sect_cont.style.display = "none";
        i.className = "fa fa-angle-right";
    }


}


