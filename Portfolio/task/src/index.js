let flashCardBtn = document.querySelector("#portfolio>.flashCard>button");
let virtualPianoBtn = document.querySelector("#portfolio>.virtualPiano>button");
let popUpWnd = document.querySelector("#popUpWindow");
let closeBtn = popUpWnd.querySelector("button");
let mobileNav = document.querySelector(".hamburger");
let navItems = document.querySelector(".hamburgerItems");
flashCardBtn.addEventListener("click", function () {
    popUpWnd.style.zIndex = '10';
});
virtualPianoBtn.addEventListener("click", function () {
    popUpWnd.style.zIndex= '10';
});
closeBtn.addEventListener("click", function () {
    popUpWnd.style.zIndex = '-1';
})
mobileNav.addEventListener("click", function () {
    if (navItems.style.visibility == "visible") {
    	navItems.style.visibility = "hidden";
    } else {
    	navItems.style.visibility = "visible";
    }    
});

navItems.querySelector("a").addEventListener("click", function () {
    navItems.style.visibility = "hidden";   
});