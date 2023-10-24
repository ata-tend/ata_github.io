const SliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('.slider__img');

const nextButton = document.querySelector('.button-next');
const prevButton = document.querySelector('.button-prev');

let count = 0;
let width;

function init() {
    width = document.querySelector('.slider__block').offsetWidth;
    SliderLine.style.width = width * images.length + 'px'; // Fixed this line
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}
init();
window.addEventListener('resize', init);

function rollSlider() {
    SliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

function sliderNext() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
}

if (nextButton !== null) nextButton.addEventListener('click', sliderNext);

function sliderPrev() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
}

if (prevButton !== null) prevButton.addEventListener('click', sliderPrev);

// Додайте обробку подій для кнопок "Назад" і "Вперед"
if (nextButton !== null) {
    nextButton.addEventListener('click', sliderNext);
}

if (prevButton !== null) {
    prevButton.addEventListener('click', sliderPrev);
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Зміна слайдів кожні 4 секунди
}



// script.js
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

// Отримуємо висоту блока, який видаляємо (наприклад, header)
const headerHeight = header.offsetHeight;

// Функція для видалення блока (наприклад, header)
function removeHeader() {
    header.style.transform = `translateY(-${headerHeight}px)`;
}




  

document.querySelectorAll('.big_list').forEach(function (bigListItem) {
    bigListItem.addEventListener('mouseenter', function () {
        document.querySelectorAll('.big_list').forEach(function (item) {
            item.style.transform = 'translateY(0)';
        });
        bigListItem.style.transform = 'translateY(-' + (bigListItem.offsetHeight - 10) + 'px)';
    });
});



const burgerButton = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');

burgerButton.addEventListener('click', function () {
    this.classList.toggle('active');
    navMenu.classList.toggle('open');
});





