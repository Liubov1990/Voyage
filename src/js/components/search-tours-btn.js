if (location.pathname === "/" || location.pathname === "/index.html") {
  const searchToursBtn = document.querySelector(".destination-date__search");

  searchToursBtn.addEventListener("click", event => {
    event.preventDefault();
  });
}
