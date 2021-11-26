let flashCardBtn = document.querySelector("#portfolio>.flashCard>button");
let virtualPianoBtn = document.querySelector("#portfolio>.virtualPiano>button");
let popUpWnd = document.querySelector("#popUpWindow");
let closeBtn = popUpWnd.querySelector("button");
flashCardBtn.addEventListener("click", function () {
    popUpWnd.style.zIndex = '10';
});
virtualPianoBtn.addEventListener("click", function () {
    popUpWnd.style.zIndex= '10';
});
closeBtn.addEventListener("click", function () {
    popUpWnd.style.zIndex = '-1';
})