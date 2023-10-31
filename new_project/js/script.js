const SliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('.slider__img');
const nextButton = document.querySelector('.button-next');
const prevButton = document.querySelector('.button-prew');

let currentIndex = 0;
let width;

function init() {
  width = document.querySelector('.slider__block').offsetWidth;
  SliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

function rollSlider() {
  SliderLine.style.transform = 'translate(-' + currentIndex * width + 'px)';
}

function sliderNext() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  rollSlider();
  updateImages(); 
}

function sliderPrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  rollSlider();
  updateImages(); 
}

function updateImages() {
  images.forEach((image, index) => {
    if (index === 1 || index === 2) {
    }
  });
}

if (nextButton) {
  nextButton.addEventListener('click', sliderNext);
}

if (prevButton) {
  prevButton.addEventListener('click', sliderPrev);
}


images[1].style.display = 'block';




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
    setTimeout(showSlides, 4000); // Change slides every 4 seconds
}

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

const headerHeight = header.offsetHeight;

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

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("open_popup_btn").addEventListener("click", function(){
      document.querySelector(".popup").classList.add("open");
    });
  
    document.getElementById("close_popup_btn").addEventListener("click", function(){
      document.querySelector(".popup").classList.remove("open");
    });
  });

document.addEventListener("click", function (event) {
    var submenu = document.querySelector(".submenu");
    if (submenu.style.display === "block" && !event.target.closest(".big_list")) {
        submenu.style.display = "none";
    }
});

//validation
  document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.querySelector("input[name='name']");

    nameInput.addEventListener("input", function () {
        //Remove any non-letter characters
        this.value = this.value.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІґҐ']/g, '');
    });
});
//validation phone
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelector("input[name='phone']");

    phoneInput.addEventListener("input", function () {
        //Remove any characters that are not plus (+) or numbers
        this.value = this.value.replace(/[^+\d]/g, '');
        // We limit the input to 10 digits
        if (this.value.length > 11) {
            this.value = this.value.substring(0, 11);
        }
    });
});

