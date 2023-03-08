const path = window.location.pathname;
const currentPage = path.split("/").pop().toString();
const navBtn = document.querySelectorAll(".header__nav-btn");

console.log(currentPage);

navBtn.forEach((currentPage) => { 
    if(navBtn.classList.contains("navBtnClicked")){
        navBtn.classList.remove("navBtnClicked");
        if(navBtn.href.toString()===currentPage){
            navBtn.classList.add("navBtnClicked");
        }
    }
})

