const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const spanColor = document.querySelector("span");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  spanColor.classList.toggle("color-white");
});
