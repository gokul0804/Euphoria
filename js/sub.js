const menuItems = document.querySelectorAll('.main-header .center ul li');

function activateMenuItem() {
    menuItems.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active');
}

menuItems.forEach((item) => {
    item.addEventListener('click', activateMenuItem);
});

const footerLinks = document.getElementById("footerLinks");
const arrowIcon = document.querySelector(".arrow-icon");

function toggleMenu() {
    footerLinks.style.display = footerLinks.style.display === "block" ? "none" : "block";
    if (arrowIcon.style.transform === "rotate(180deg)") {
        arrowIcon.style.transform = "rotate(0deg)";
    } else {
        arrowIcon.style.transform = "rotate(180deg)";
    }
}

arrowIcon.addEventListener('click', toggleMenu);
