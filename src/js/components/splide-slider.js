import Splide from "@splidejs/splide";

if (location.pathname === "/" || location.pathname === "/index.html") {
  document.addEventListener("DOMContentLoaded", function() {
    new Splide(".clients__splide", {
      type: "loop",
      perPage: 4,
      focus: "center",
      autoplay: false,
      pagination: false,
      classes: {
        arrows: "splide__arrows multi-slider__arrows",
        arrow: "splide__arrow multi-slider__arrow",
        prev: "splide__arrow--prev multi-slider__prevBtn",
        next: "splide__arrow--next multi-slider__nextBtn"
      },
      breakpoints: {
        1440: {
          perPage: 3
        },
        1024: {
          perPage: 2
        },
        768: {
          perPage: 1
        }
      },
      autoWidth: true
    }).mount();

    new Splide(".offers__splide", {
      focus: "center",
      direction: "ltr",
      perPage: 4,
      perMove: 1,
      autoplay: false,
      pagination: false,
      waitForTransition: false,
      drag: false,
      classes: {
        arrows: "splide__arrows multi-slider__arrows",
        arrow: "splide__arrow multi-slider__arrow",
        prev: "splide__arrow--prev multi-slider__prevBtn",
        next: "splide__arrow--next multi-slider__nextBtn"
      },
      fixedWidth: 277
    }).mount();
  });
}
