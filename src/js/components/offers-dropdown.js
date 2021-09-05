const cards = document.querySelectorAll(".offers__card");
const dropdownBtn = document.querySelectorAll(".offers__dropdown");

document.addEventListener("DOMContentLoaded", function() {
  const dropdownBtn = document.querySelectorAll(".offers__dropdown");
  [...dropdownBtn].forEach(btn => {
    btn.addEventListener("click", toggleInfo);
  });
});

function toggleInfo(event) {
  const currentTarget = event.currentTarget;
  const cardElement = currentTarget.closest(".offers__card");

  if (currentTarget.classList.contains("offers__dropdown") && !cardElement.classList.contains("offers__card--active")) {
    cardElement.classList.add("offers__card--active");
  } else if (
    currentTarget.classList.contains("offers__dropdown") &&
    cardElement.classList.contains("offers__card--active")
  ) {
    cardElement.classList.remove("offers__card--active");
  }
}
