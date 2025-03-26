document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuIcon.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "block" ? "none" : "block";
  });
});
function toggleMenu() {
  const menu = document.querySelectorAll(".menu");
  const hamburger = document.querySelector(".hamburger");
  menu.forEach((item) => {
    item.classList.toggle("active");
  });

  hamburger.classList.toggle("active");
}
const toggleActive = (element, target) => {
  element.addEventListener("mouseover", () => target.classList.add("active"));
  element.addEventListener("mouseout", () => target.classList.remove("active"));
};

toggleActive(
  document.querySelector(".listA"),
  document.querySelector(".wrapper-ul")
);
toggleActive(
  document.querySelector(".listB"),
  document.querySelector(".wrapper-ul1")
);
toggleActive(
  document.querySelector(".wrapper-ul"),
  document.querySelector(".wrapper-ul")
);
toggleActive(
  document.querySelector(".wrapper-ul1"),
  document.querySelector(".wrapper-ul1")
);

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const imgShow = document.getElementById("imgShow");

img1.addEventListener("click", function () {
  imgShow.src = img1.src;
});
img2.addEventListener("click", function () {
  imgShow.src = img2.src;
});
img3.addEventListener("click", function () {
  imgShow.src = img3.src;
});

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const valueText = document.querySelector(".valueText");
const sp = document.querySelector(".sp");
const spimg = document.querySelector(".spimg");
const spimg1 = document.querySelector(".spimg1");
valueText.innerHTML = 0;
increment.addEventListener("click", function () {
  valueText.innerHTML = parseInt(valueText.innerHTML) + 1;
  sp.innerHTML = valueText.innerHTML;
  spimg.src = imgShow.src;
});
decrement.addEventListener("click", function () {
  if (valueText.innerHTML <= 0) {
    valueText.innerHTML = 0;
  } else {
    valueText.innerHTML = parseInt(valueText.innerHTML) - 1;
    spimg.src = "";
  }
});
