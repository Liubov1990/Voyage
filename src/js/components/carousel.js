import { Carousel } from "bootstrap";

if (location.pathname === "/" || location.pathname === "/index.html") {
  const myCarousel = document.querySelector("#carousel");
  const carousel = new Carousel(myCarousel, {
    interval: 3000,
    pause: "hover",
    wrap: true
  });

  carousel.cycle();
}
