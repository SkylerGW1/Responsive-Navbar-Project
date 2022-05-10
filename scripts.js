
var mobileBreakpoint = 620; 


window.onload = function() {
    var screenWidth = window.innerWidth;
    var globalNavbar = document.getElementById("global-nav");
    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
    }
}

window.onresize = function() {
    var screenWidth = window.innerWidth;
    var globalNavbar = document.getElementById("global-nav");

    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
    }
    else { 
        globalNavbar.classList.remove("open");
    }
    
}