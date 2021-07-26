import { Carousel } from "bootstrap";

const myCarousel = document.querySelector('#carousel');
const carousel = new Carousel(myCarousel, {
  interval: 3000,
  pause: "hover",
})

carousel.cycle();


