const hideAllElements = (elements: Element[]) => {
  elements.forEach((el) => {
    el.classList.add('visually-hidden');
  });
};

const showElementByIdx = (elements: Element[], idx: number) => {
  const el = elements[idx];

  if (el) {
    el.classList.remove('visually-hidden');
  }
};

const runSlider = (rootEl: HTMLElement) => {
  const prevButton = rootEl.querySelector('#main-slider-prev');
  const nextButton = rootEl.querySelector('#main-slider-next');
  const slides = Array.from(rootEl.querySelectorAll('.main-slide'));

  if (!prevButton || !nextButton || !slides) {
    return;
  }

  let currentSlideIdx = 0;
  const maxSlideIdx = slides.length - 1;

  hideAllElements(slides);
  showElementByIdx(slides, currentSlideIdx);

  const prevSlide = () => {
    currentSlideIdx = currentSlideIdx <= 0 ? maxSlideIdx : currentSlideIdx - 1;
  };

  const nextSlide = () => {
    currentSlideIdx = currentSlideIdx >= maxSlideIdx ? 0 : currentSlideIdx + 1;
  };

  const handlePrev = () => {
    prevSlide();
    hideAllElements(slides);
    showElementByIdx(slides, currentSlideIdx);
  };

  const handleNext = () => {
    nextSlide();
    hideAllElements(slides);
    showElementByIdx(slides, currentSlideIdx);
  };

  prevButton.addEventListener('click', handlePrev);

  nextButton.addEventListener('click', handleNext);

  const movingIntervalData = rootEl.dataset.movingInterval;
  const movingInterval = Number(movingIntervalData);

  if (!Number.isNaN(movingInterval) && movingInterval > 0) {
    setInterval(handleNext, movingInterval);
  }
};

export default runSlider;
