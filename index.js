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
const data = [
  {
    id: 1,
    name: "img1",
    img: "./pic/h175 (1).png",
    class: "img1",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 2,
    name: "img2",
    img: "./pic/h175 (2).png",
    class: "img2",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 3,
    name: "img3",
    img: "./pic/h175 (9).png",
    class: "img3",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 4,
    name: "img4",
    img: "./pic/h175 (4).png",
    class: "img4",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 5,
    name: "img1",
    img: "./pic/h175 (5).png",
    class: "img5",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 6,
    name: "img2",
    img: "./pic/h175 (6).png",
    class: "img6",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 7,
    name: "img3",
    img: "./pic/h175 (7).png",
    class: "img7",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 8,
    name: "img4",
    img: "./pic/h175 (1).png",
    class: "img8",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/h175 (1).png",
    link: "./login.html",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 10,
    name: "img2",
    img: "./pic/1731034178744.webp",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 11,
    name: "img3",
    img: "./pic/1743463843176.jpg",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 12,
    name: "img4",
    img: "./pic/20240918040216.webp",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 13,
    name: "img1",
    img: "./pic/h175 (1).png",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 14,
    name: "img2",
    img: "./pic/1731034178744.webp",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 15,
    name: "img3",
    img: "./pic/1743463843176.jpg",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 16,
    name: "img4",
    img: "./pic/20240918040216.webp",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 17,
    name: "img1",
    img: "./pic/1730511714186.webp",
    link: "./login.html",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 18,
    name: "img2",
    img: "./pic/1731034178744.webp",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 19,
    name: "img3",
    img: "./pic/1743463843176.jpg",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 20,
    name: "img4",
    img: "./pic/20240918040216.webp",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 21,
    name: "img1",
    img: "./pic/1730511714186.webp",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 22,
    name: "img2",
    img: "./pic/1731034178744.webp",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 23,
    name: "img3",
    img: "./pic/1743463843176.jpg",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 24,
    name: "img4",
    img: "./pic/20240918040216.webp",
    categoies: "Khmer New Year Sale3",
  },
  // Recent Product
  {
    id: 25,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "223$",
    img: "./pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$235.00",
  },
  {
    id: 26,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "123$",
    img: "./pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$125.00",
  },
  {
    id: 27,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "300$",
    img: "./pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$335.00",
  },
  {
    id: 28,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "./pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
  {
    id: 29,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "./pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
  {
    id: 30,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "./pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
  {
    id: 31,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "./pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
  {
    id: 32,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "./pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
];

const gallerycontainer = document.querySelector(".gallery-container");
const gallerycontainer1 = document.querySelector(".gallery-container1");
const gallerycontainer2 = document.querySelector(".gallery-container2");
const wrapperrecent = document.querySelector(".wrapper-recent-product");
gallerycontainer.innerHTML = data
  .filter((d) => {
    return d.categoies == "Khmer New Year Sale!";
  })
  .map((a) => {
    return `
      <div class="image-card">
        <a href="./html/data.html?id=${a.id}">
          <img src="${a.img}" class="${a.class}" alt="${a.name}">
        </a>
      </div>
    `;
  })
  .join("");

gallerycontainer1.innerHTML = data
  .filter((e) => {
    return e.categoies === "Khmer New Year Sale2";
  })
  .map((a) => {
    return ` 
             <div class="image-card1">
        <a href="./html/data.html?id=${a.id}">
          <img src="${a.img}" class="${a.class}" alt="${a.name}">
        </a>
      </div>
        `;
  })
  .join("");
gallerycontainer2.innerHTML = data
  .filter((e) => {
    return e.categoies == "Khmer New Year Sale3";
  })
  .map((a) => {
    return ` 
              <div class="image-card2">
        <a href="./html/data.html?id=${a.id}">
          <img src="${a.img}" class="${a.class}" alt="${a.name}">
        </a>
      </div>
        `;
  })
  .join("");
wrapperrecent.innerHTML = data
  .filter((r) => {
    return r.id >= 25;
  })
  .map((a) => {
    return ` 
           <div class="col-lg-3 col-6 mb-2 mb-lg-0">
           <article class="wrapper-recent">
           <div class="wrapper-img position-relative overflow-hidden">
                            <img src="${a.img}"" class="w-100">
                            <div class="product-action">
                                <a class="btn btn-outline-primary btn-square"  href="./html/data.html?id=${a.id}"><i
                                        class="fa fa-shopping-cart"></i></a>
                                <a class="btn btn-outline-primary btn-square" href=""><i class="far fa-heart"></i></a>
                                <a class="btn btn-outline-primary btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                                <a class="btn btn-outline-primary btn-square" href=""><i class="fa fa-search"></i></a>
                            </div>
                        </div>
                        <div class="wrapper-text text-center p-3">
                            <h5>${a.name}</h5>
                            <h6 class="d-inline-block">${a.price}</h6>
                            <h6 class="text-muted ml-2 d-inline-block"><del>${a.del}</del></h6>
                            <div class="d-flex align-items-center justify-content-center mb-1">
                                <small class="${a.i}"></small>
                                <small class="${a.i}"></small>
                                <small class="${a.i}"></small>
                                <small class="${a.i}"></small>
                                <small class="${a.iHalf}"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                        </article>
                </div>
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
  const wrapper = gallery.closest(".gallery-wrapper"); // Assuming a wrapper exists
  const backBtn = wrapper.querySelector(`.${backBtnClass}`);
  const nextBtn = wrapper.querySelector(`.${nextBtnClass}`);

  function scrollToNext() {
    const cards = gallery.querySelectorAll(`.${cardClass}`);
    const isMobile = window.innerWidth <= 768;
    const scrollStep = isMobile ? 1 : 4;

    if (scrollIndex < cards.length - scrollStep) {
      scrollIndex += scrollStep;
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

// script.js
// const products = [
//   { id: 1, name: "Shoes", description: "Stylish running shoes." },
//   { id: 2, name: "Bag", description: "Leather backpack." },
// ];

// const params = new URLSearchParams(window.location.search);
// const id = parseInt(params.get("id"));
// const product = products.find((p) => p.id === id);

// const pname = document.getElementById("product-name");
// const pd = document.getElementById("product-description");
// pname.textContent = products[0].name;
// pd.textContent = products[0].description;
