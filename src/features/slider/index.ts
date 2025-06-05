const hideAllElements = (elements: Element[]) => {
  elements.forEach((el) => {
    el.classList.add("visually-hidden");
  });
};

const showElementByIdx = (elements: Element[], idx: number) => {
  const el = elements[idx];

  if (el) {
    el.classList.remove("visually-hidden");
  }
};

const runSlider = (rootEl: Element) => {
  const prevButton = rootEl.querySelector("#main-slider-prev");
  const nextButton = rootEl.querySelector("#main-slider-next");
  const slides = Array.from(rootEl.querySelectorAll(".main-slide"));

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

  prevButton.addEventListener("click", () => {
    prevSlide();
    hideAllElements(slides);
    showElementByIdx(slides, currentSlideIdx);
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
    hideAllElements(slides);
    showElementByIdx(slides, currentSlideIdx);
  });
};

export default runSlider;
