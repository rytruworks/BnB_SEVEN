var stay = document.getElementById('stay');

stay.addEventListener('click',() => {

    const element = document.getElementById('room');
    const targetDOMRect = element.getBoundingClientRect();
    const targetTop = targetDOMRect.top + window.pageYOffset;
    window.scrollTo({
    top: targetTop,
    behavior: 'smooth'
    
    });
});

const burger = document.querySelector(".burger")
const nav = document.querySelector(".header_inner_right")
const menu = document.querySelectorAll(".header_inner_right a")

burger.addEventListener("click", () => {
    nav.classList.toggle ("nav-active");

    menu.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = "";
        } else {
            link.style.animation = `menuFade 0.5s ease forwards ${(index + 1) / 5}s`;
        }
    });
    burger.classList.toggle("toggle");
});