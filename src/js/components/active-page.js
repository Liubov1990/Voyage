const authorizationNav = document.querySelector(".header-bar__autorization");
const linksList = authorizationNav.querySelectorAll("a");

document.addEventListener("DOMContentLoaded", highlightActivePage);

function highlightActivePage() {
  const [activePage] = window.location.pathname.replace(/\/+/g, "").split(".");

  return [...linksList].forEach(link => {
    const linkName = link.dataset.name;

    if (activePage === linkName) {
      link.classList.add("active-page");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  })
}