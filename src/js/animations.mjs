// slideshow.js

export function createSlideshow(slideshowSelector = ".myslides", options = {}) {
  let slideIndex = 1;
  const slides = document.querySelectorAll(slideshowSelector);
  const autoPlayInterval = options.autoPlayInterval || 5000; // default: 5 seconds
  let autoPlayTimer;

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => (slide.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";
  }

  function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    restartAutoPlay();
  }

  function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    restartAutoPlay();
  }

  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      plusSlides(1);
    }, autoPlayInterval);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayTimer);
  }

  function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Initial setup
  showSlides(slideIndex);
  if (options.autoPlay !== false) {
    startAutoPlay();
  }

  return {
    next: () => plusSlides(1),
    prev: () => plusSlides(-1),
    goTo: (n) => currentSlide(n),
    startAutoPlay,
    stopAutoPlay,
  };
}
