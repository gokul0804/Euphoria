let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderLineProgress = document.querySelector('.slider-line-progress');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    sliderLineProgress.style.width = `${(currentSlide + 1) / totalSlides * 100}%`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    changeSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    changeSlide();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

changeSlide();

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const list = document.querySelector('.new-arrival-list');
const totalItems = document.querySelectorAll('.new-arrival-list li').length;
let currentIndex = 0;
const itemsToShow = 4;

function moveSlider(direction) {
    if (direction === 'left') {
        if (currentIndex > 0) {
            currentIndex -= itemsToShow;
        }
    } else if (direction === 'right') {
        if (currentIndex + itemsToShow < totalItems) {
            currentIndex += itemsToShow;
        }
    }
    list.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
}

leftArrow.addEventListener('click', () => moveSlider('left'));
rightArrow.addEventListener('click', () => moveSlider('right'));

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

const likeIcons = document.querySelectorAll('.like-icon-tag');

function toggleLikeIconBackground() {
    const likeIcon = this.querySelector('.like-icon');
    likeIcon.classList.toggle('active');
}

likeIcons.forEach((iconTag) => {
    iconTag.addEventListener('click', toggleLikeIconBackground);
});
