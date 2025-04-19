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
    img: "./pic/main1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale!",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 5,
    name: "img2",
    img: "./pic/menn2.avif",
    class: "img2",
    categoies: "Khmer New Year Sale!",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 13,
    name: "img3",
    img: "./pic/submenn6.avif",
    class: "img3",
    categoies: "Khmer New Year Sale!",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 17,
    name: "img4",
    img: "./pic/submenn5.avif",
    class: "img4",
    categoies: "Khmer New Year Sale!",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 22,
    name: "img1",
    img: "./pic/submenn4.avif",
    class: "img5",
    categoies: "Khmer New Year Sale!",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 24,
    name: "img2",
    img: "./pic/submenn8.avif",
    class: "img6",
    categoies: "Khmer New Year Sale!",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 36,
    name: "img3",
    img: "./pic/submenn9.avif",
    class: "img7",
    categoies: "Khmer New Year Sale!",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 40,
    name: "img4",
    img: "./pic/submenn10.avif",
    class: "img8",
    categoies: "Khmer New Year Sale!",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn2.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn9.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn7.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn6.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn2.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn5.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn4.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn2.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn9.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn7.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn6.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn3.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn5.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },
  {
    id: 9,
    name: "img1",
    img: "./pic/submenn4.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
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
      <div class="image-card " data-aos="zoom-in">
        <a href="./html/data.html?id=${a.id}">
          <img src="${a.img}" class="${a.class}" alt="${a.name}">
        </a>
                        <div class="wrapper-similar-text mt-3 overflow-hidden">
                    <div class="wrapper-hover">
                        <div class="wrapper-flex-text d-flex justify-content-between align-items-center ">
                        <h5 class="fw-bold text-dark m-0 price-text">US ${a.usPrice}</h5>
        <h5 class=" text-dark fw-bolder clickFav" id="offcanvasRightLabel"><i class="fa-regular fa-heart clickHeart"></i>
        </h5>
    </div>
                    <span class="offPriceShow">${a.usPriceoff}</span>
                                    <div class="flex-img d-flex justify-content-between align-items-center"> 
                                    <p class="fw-light mb-0">${a.typeOfShirt}</p>
                                    <a href="data.html?id=${a.id}">
                        <img src="${a.img}" class="${a.class} img-price" alt="${a.name}" style="width:35px;height: 35px;">
                    </a>
                </div>
                </div>
                </div>
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
             <div class="image-card1" data-aos="zoom-in">
         <a href="./html/data.html?id=${a.id}">
          <img src="${a.img}" class="${a.class}" alt="${a.name}">
        </a>
                        <div class="wrapper-similar-text mt-3 overflow-hidden">
                    <div class="wrapper-hover">
                        <div class="wrapper-flex-text d-flex justify-content-between align-items-center ">
                        <h5 class="fw-bold text-dark m-0 price-text">US ${a.usPrice}</h5>
        <h5 class=" text-dark fw-bolder clickFav" id="offcanvasRightLabel"><i class="fa-regular fa-heart clickHeart"></i>
        </h5>
    </div>
                    <span class="offPriceShow">${a.usPriceoff}</span>
                                    <div class="flex-img d-flex justify-content-between align-items-center"> 
                                    <p class="fw-light mb-0">${a.typeOfShirt}</p>
                                    <a href="data.html?id=${a.id}">
                        <img src="${a.img}" class="${a.class} img-price" alt="${a.name}" style="width:35px;height: 35px;">
                    </a>
                </div>
                </div>
                </div>
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
              <div class="image-card2" data-aos="zoom-in">
        <a href="./html/data.html?id=${a.id}">
          <img src="${a.img}" class="${a.class}" alt="${a.name}">
        </a>
                        <div class="wrapper-similar-text mt-3 overflow-hidden">
                    <div class="wrapper-hover">
                        <div class="wrapper-flex-text d-flex justify-content-between align-items-center ">
                        <h5 class="fw-bold text-dark m-0 price-text">US ${a.usPrice}</h5>
        <h5 class=" text-dark fw-bolder clickFav" id="offcanvasRightLabel"><i class="fa-regular fa-heart clickHeart"></i>
        </h5>
    </div>
                    <span class="offPriceShow">${a.usPriceoff}</span>
                                    <div class="flex-img d-flex justify-content-between align-items-center"> 
                                    <p class="fw-light mb-0">${a.typeOfShirt}</p>
                                    <a href="data.html?id=${a.id}">
                        <img src="${a.img}" class="${a.class} img-price" alt="${a.name}" style="width:35px;height: 35px;">
                    </a>
                </div>
                </div>
                </div>
      </div>
        `;
  })
  .join("");
wrapperrecent.innerHTML = data
  .filter((r) => {
    return r.name == "ASUS Zenbook 14X OLED (UX5401)";
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
// Favorite Icon Click
const clickFav = document.querySelectorAll(".clickFav");
clickFav.forEach((fav) => {
  fav.addEventListener("click", function () {
    const heart = fav.querySelector(".clickHeart");
    heart.classList.toggle("fa-solid");
  });
});

console.dir(clickFav);
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
    const scrollStep = isMobile ? 1 : 3;

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
    const scrollStep = isMobile ? 1 : 3;

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
