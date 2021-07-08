let menuBtn = document.querySelector(".menu-btn");
let navContent = document.querySelectorAll(".nav-content");

function menuBtnClicked() {
    menuBtn.classList.toggle("menu-clicked");
    for (i = 0; i < navContent.length; i++) {
        navContent[i].classList.toggle("menu-clicked");
    }
}