// document.addEventListener("DOMContentLoaded", () => {
//   const menuIcon = document.querySelector(".menu-icon");
//   const mobileMenu = document.querySelector(".mobile-menu");

//   menuIcon.addEventListener("click", () => {
//     mobileMenu.style.display =
//       mobileMenu.style.display === "block" ? "none" : "block";
//   });
// });
function toggleMenu() {
  const menu = document.querySelectorAll(".menu");
  const hamburger = document.querySelector(".hamburger");
  menu.forEach((item) => {
    item.classList.toggle("active");
  });

  hamburger.classList.toggle("active");
}
const toggleHover = (trigger, target) => {
  trigger.addEventListener("mouseenter", () => target.classList.add("active"));
  target.addEventListener("mouseleave", () =>
    target.classList.remove("active")
  );
};

toggleHover(
  document.querySelector(".listA"),
  document.querySelector(".wrapper-ul")
);
toggleHover(
  document.querySelector(".listB"),
  document.querySelector(".wrapper-ul1")
);
toggleHover(
  document.querySelector(".listC"),
  document.querySelector(".wrapper-ul2")
);

// nav fix
const navbar = document.querySelector(".navbar");
const a = document.querySelectorAll(".nav-link");
const dropbtn = document.querySelector(".dropbtn");
console.log(a);
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("active");
    dropbtn.classList.add("active");
    a.forEach((item) => {
      item.classList.add("active");
    });
  } else {
    navbar.classList.remove("active");
    a.forEach((item) => {
      item.classList.remove("active");
    });
    dropbtn.classList.removedd("active");
  }
});
// const img1 = document.getElementById("img1");
// const img2 = document.getElementById("img2");
// const img3 = document.getElementById("img3");
// const imgShow = document.getElementById("imgShow");

// img1.addEventListener("click", function () {
//   imgShow.src = img1.src;
// });
// img2.addEventListener("click", function () {
//   imgShow.src = img2.src;
// });
// img3.addEventListener("click", function () {
//   imgShow.src = img3.src;
// });

// const increment = document.querySelector(".increment");
// const decrement = document.querySelector(".decrement");
// const valueText = document.querySelector(".valueText");
// const sp = document.querySelector(".sp");
// const spimg = document.querySelector(".spimg");
// const spimg1 = document.querySelector(".spimg1");
// valueText.innerHTML = 0;
// increment.addEventListener("click", function () {
//   valueText.innerHTML = parseInt(valueText.innerHTML) + 1;
//   sp.innerHTML = valueText.innerHTML;
//   spimg.src = imgShow.src;
// });
// decrement.addEventListener("click", function () {
//   if (valueText.innerHTML <= 0) {
//     valueText.innerHTML = 0;
//   } else {
//     valueText.innerHTML = parseInt(valueText.innerHTML) - 1;
//     sp.innerHTML = valueText.innerHTML;
//     spimg.src = "";
//   }
// });

const data = [
  {
    id: 1,
    name: "img1",
    img: "./pic/1730511714186.webp",
  },
  {
    id: 2,
    name: "img2",
    img: "./pic/1731034178744.webp",
  },
  {
    id: 3,
    name: "img3",
    img: "./pic/1743463843176.jpg",
  },
  {
    id: 4,
    name: "img4",
    img: "./pic/20250227031156.webp",
  },
  {
    id: 5,
    name: "img1",
    img: "./pic/1730511714186.webp",
  },
  {
    id: 6,
    name: "img2",
    img: "./pic/1731034178744.webp",
  },
  {
    id: 7,
    name: "img3",
    img: "./pic/1743463843176.jpg",
  },
  {
    id: 8,
    name: "img4",
    img: "./pic/20250227031156.webp",
  },
];

const gallerycontainer = document.querySelector(".gallery-container");
console.log(gallerycontainer);
gallerycontainer.innerHTML = data
  .map((a) => {
    return ` 
            <div class="image-card"><img src="${a.img}" alt="${a.name}"></div>
        `;
  })
  .join("");

// const wrapperdata = document.querySelector(".wrapper-data");
// const initApp = () => {
//   fetch("items.json")
//     .then((response) => response.json())
//     .then((data) => {
//       wrapperdata.innerHTML = data
//         .filter((e) => {
//           return e.id == 1 || e.id == 2 || e.id == 3;
//         })
//         .map(
//           (item) => `<div class="col-lg-4">
//                         <span>${item.id}</span>
//                         <p>${item.name}</p>
//                         <img src="${item.img}" alt="">
//                      </div>`
//         )
//         .join("");
//       console.log(data);
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// };
// initApp();

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const carousel = button.closest("[data-carousel]");
    if (!carousel) return;

    const slides = carousel.querySelector("[data-slides]");
    if (!slides) return;

    const activeSlide = slides.querySelector("[data-active]");
    if (!activeSlide) return;

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

let scrollIndex = 0;
const backBtn = document.querySelector(".backBtn");

function scrollToNext() {
  const gallery = document.getElementById("gallery");
  const imageCards = gallery.querySelectorAll(".image-card");
  const isMobile = window.innerWidth <= 768; // Check if the screen is a phone
  const scrollStep = isMobile ? 1 : 4; // Scroll 1 for phone, 4 for larger screens

  if (scrollIndex < imageCards.length - scrollStep) {
    scrollIndex += scrollStep;
    backBtn.classList.add("hidden");
  }
  const scrollPosition = imageCards[scrollIndex].offsetLeft;
  gallery.scrollTo({ left: scrollPosition, behavior: "smooth" });
}

function scrollToPrevious() {
  const gallery = document.getElementById("gallery");
  const imageCards = gallery.querySelectorAll(".image-card");
  const isMobile = window.innerWidth <= 768; // Check if the screen is a phone
  const scrollStep = isMobile ? 1 : 4; // Scroll 1 for phone, 4 for larger screens

  if (scrollIndex > 0) {
    scrollIndex -= scrollStep;
    backBtn.classList.remove("hidden");
  }
  const scrollPosition = imageCards[scrollIndex].offsetLeft;
  gallery.scrollTo({ left: scrollPosition, behavior: "smooth" });
}

// Add drag functionality
const gallery = document.getElementById("gallery");
let isDragging = false;
let startX, scrollLeft;

gallery.addEventListener("mousedown", (e) => {
  isDragging = true;
  gallery.classList.add("dragging");
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener("mouseleave", () => {
  isDragging = false;
  gallery.classList.remove("dragging");
});

gallery.addEventListener("mouseup", () => {
  isDragging = false;
  gallery.classList.remove("dragging");
});

gallery.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  gallery.scrollLeft = scrollLeft - walk;
});
