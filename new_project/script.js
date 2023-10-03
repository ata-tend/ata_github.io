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
