const navBarList = document.querySelector(".nav-bar__list");

function handleNavBar(event){
    const clickedBtn = event.target;
    clickedBtn.classList.add(clicked);
}

navBarList.addEventListener("click",handleNavBar);