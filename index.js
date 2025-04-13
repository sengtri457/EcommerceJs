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
    dropbtn.classList.remove("active");
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
    img: "./pic/h175 (1).png",
    link: "./login.html",
  },
  {
    id: 2,
    name: "img2",
    img: "./pic/h175 (2).png",
  },
  {
    id: 3,
    name: "img3",
    img: "./pic/h175 (9).png",
  },
  {
    id: 4,
    name: "img4",
    img: "./pic/h175 (4).png",
  },
  {
    id: 5,
    name: "img1",
    img: "./pic/h175 (5).png",
  },
  {
    id: 6,
    name: "img2",
    img: "./pic/h175 (6).png",
  },
  {
    id: 7,
    name: "img3",
    img: "./pic/h175 (7).png",
  },
  {
    id: 8,
    name: "img4",
    img: "./pic/h175 (8).png",
  },
];
const data1 = [
  {
    id: 1,
    name: "img1",
    img: "./pic/1730511714186.webp",
    link: "./login.html",
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
    img: "./pic/20240918040216.webp",
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
    img: "./pic/20240918040216.webp",
  },
];
const data2 = [
  {
    id: 1,
    name: "img1",
    img: "./pic/1730511714186.webp",
    link: "./login.html",
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
    img: "./pic/20240918040216.webp",
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
    img: "./pic/20240918040216.webp",
  },
];
const gallerycontainer = document.querySelector(".gallery-container");
const gallerycontainer1 = document.querySelector(".gallery-container1");
const gallerycontainer2 = document.querySelector(".gallery-container2");
console.log(gallerycontainer);
gallerycontainer.innerHTML = data
  .map((a) => {
    return ` 
            <div class="image-card"><a href="${a.link}"><img src="${a.img}" alt="${a.name}">
            </a></div>
        `;
  })
  .join("");
gallerycontainer1.innerHTML = data1
  .map((a) => {
    return ` 
            <div class="image-card1"><a href="${a.link}"><img src="${a.img}" alt="${a.name}">
            </a></div>
        `;
  })
  .join("");
gallerycontainer2.innerHTML = data2
  .map((a) => {
    return ` 
            <div class="image-card2"><a href="${a.link}"><img src="${a.img}" alt="${a.name}">
            </a></div>
        `;
  })
  .join("");

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
function setupGallery({ galleryId, cardClass, backBtnClass, nextBtnClass }) {
  let scrollIndex = 0;
  const gallery = document.getElementById(galleryId);
  const backBtn = document.querySelector(`.${backBtnClass}`);
  const nextBtn = document.querySelector(`.${nextBtnClass}`);

  function scrollToNext() {
    const cards = gallery.querySelectorAll(`.${cardClass}`);
    const isMobile = window.innerWidth <= 768;
    const scrollStep = isMobile ? 1 : 4;

    if (scrollIndex < cards.length - scrollStep) {
      scrollIndex += scrollStep;

      // ✅ Show back button only after clicking next
      backBtn.classList.remove("hidden");
    }

    const scrollPosition = cards[scrollIndex]?.offsetLeft || 0;
    gallery.scrollTo({ left: scrollPosition, behavior: "smooth" });
  }

  function scrollToPrevious() {
    const cards = gallery.querySelectorAll(`.${cardClass}`);
    const isMobile = window.innerWidth <= 768;
    const scrollStep = isMobile ? 1 : 4;

    if (scrollIndex > 0) {
      scrollIndex -= scrollStep;
    }

    const scrollPosition = cards[scrollIndex]?.offsetLeft || 0;
    gallery.scrollTo({ left: scrollPosition, behavior: "smooth" });

    // ✅ Hide back button again if back to start
    if (scrollIndex <= 0) {
      backBtn.classList.add("hidden");
    }
  }

  // Drag functionality

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
    const walk = (x - startX) * 2;
    gallery.scrollLeft = scrollLeft - walk;
  });

  // Button event listeners
  nextBtn.addEventListener("click", scrollToNext);
  backBtn.addEventListener("click", scrollToPrevious);

  return {
    scrollToNext,
    scrollToPrevious,
  };
}

// Set up galleries
setupGallery({
  galleryId: "gallery",
  cardClass: "image-card",
  backBtnClass: "backBtn",
  nextBtnClass: "nextBtn",
});

setupGallery({
  galleryId: "gallery1",
  cardClass: "image-card1",
  backBtnClass: "backBtn1",
  nextBtnClass: "nextBtn1",
});
setupGallery({
  galleryId: "gallery2",
  cardClass: "image-card2",
  backBtnClass: "backBtn2",
  nextBtnClass: "nextBtn2",
});

const shopbtn = document.querySelector(".shop-btn");

shopbtn.addEventListener("click", function () {
  window.location.href = "./html/login.html";
});
