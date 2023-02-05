const contactBarBtn = document.querySelector(".contactbar-btn");
const contactBarIcons = document.querySelector(".contactbar-icons");
const chevronIcon = document.querySelector(".contactbar-btn i"); 

function handleContactBar(){
    contactBarBtn.classList.toggle("open");
}

contactBarBtn.addEventListener("click",handleContactBar);
