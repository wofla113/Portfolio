const menubBtn = document.querySelector(".header__menubtn");
const headerMenu = document.querySelector(".header__menu");
const xBtn = document.querySelector(".header__xbtn");

const HIDDEN_CLASS = "hidden";

function openHeaderMenu(){
    headerMenu.classList.remove(HIDDEN_CLASS);
}

function closeHeaderMenu(){
    headerMenu.classList.add(HIDDEN_CLASS);
}

menubBtn.addEventListener("click",openHeaderMenu);
xBtn.addEventListener("click",closeHeaderMenu);
