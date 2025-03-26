document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuIcon.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "block" ? "none" : "block";
  });
});
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}
const wrapper = document.querySelector(".wrapper-ul");
const list = document.querySelector(".listA");

list.addEventListener("click", function () {
  wrapper.classList.toggle("active");
  console.log(wrapper);
});
