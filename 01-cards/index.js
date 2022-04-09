const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.container');

container.addEventListener('click', (evt) => {
  const target = evt.target;

  const slide = target.closest('.slide');

  if (!slide.classList.contains('active')) {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    slide.classList.add('active');
  }
});
