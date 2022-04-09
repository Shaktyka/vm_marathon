const btnUp = document.querySelector('.up-button');
const btnDown = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const slideContainer = document.querySelector('.main-slide');
const slides = document.querySelectorAll('.main-slide div');
const container = document.querySelector('.container');

const slidesCount = slides.length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount-1) * 100}vh`;

const changeSlide = (direction) => {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  slideContainer.style.transform = `translateY(-${activeSlideIndex*height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`;
};

// Обработчик клика на кнопку "Вниз"
btnDown.addEventListener('click', () => {
  changeSlide('down');
});

// Обработчик клика на кнопку "Вверх"
btnUp.addEventListener('click', () => {
  changeSlide('up');
});
