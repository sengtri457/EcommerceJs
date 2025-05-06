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
toggleHover(
  document.querySelector(".listD"),
  document.querySelector(".wrapper-ul3")
);
toggleHover(
  document.querySelector(".listE"),
  document.querySelector(".wrapper-ul4")
);

const searchData = [
  {
    id: 1,
    name: "Men",
  },
  {
    id: 2,
    name: "Women",
  },
];
const inputsearch = document.querySelector(".input-search");
const searchButton = document.querySelector(".search-button"); // Assuming a button with this class exists

function handleSearch() {
  const inputValue = inputsearch.value.toLowerCase();
  const matchedItem = searchData.find(
    (key) => inputValue === key.name.toLowerCase()
  );
  if (matchedItem) {
    window.location.href = `./html/${matchedItem.name}Section.html`;
  } else {
    alert("No matching section found.");
  }
}
inputsearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});
window.addEventListener("DOMContentLoaded", () => {
  inputsearch.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });
});

// nav fix
const navbar = document.querySelector(".navbar");
const a = document.querySelectorAll(".nav-link");
const dropbtn = document.querySelector(".dropbtn");
console.log(a);
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    // Scrolling down
    navbar.style.transform = "translateY(-101px)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
  }

  lastScrollY = currentScrollY;
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
    typeOfShirt: "Oversied Tshirt",
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
    typeOfShirt: "Oversied Polo",
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
    typeOfShirt: "Oversied Hoodie",
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
    typeOfShirt: "Oversied Track",
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
    typeOfShirt: "Oversied polo",
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
    typeOfShirt: "Oversied Hoddie",
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
    id: 51,
    name: "img1",
    img: "./pic/track.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied Track",
  },
  {
    id: 56,
    name: "img1",
    img: "./pic/tshirtmen1.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied Tshirt",
  },
  {
    id: 60,
    name: "img1",
    img: "./pic/jacketmen1.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$70.99",
    usPriceoff: "$90.95",
    Priceoff: "-40%",
    typeOfShirt: "Jacket CropTop",
  },
  {
    id: 64,
    name: "img1",
    img: "./pic/subpolomen1.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied Polo",
  },
  {
    id: 76,
    name: "img1",
    img: "./pic/pants2.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$50.99",
    usPriceoff: "60.95",
    Priceoff: "-40%",
    typeOfShirt: "Pants And Tights",
  },
  {
    id: 72,
    name: "img1",
    img: "./pic/subpolomen3-3.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied Polo",
  },
  {
    id: 68,
    name: "img1",
    img: "./pic/subpolomen2-3.avif",
    categoies: "Khmer New Year Sale2",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied Polo",
  },
  {
    id: 84,
    name: "img1",
    img: "./pic/womentshirt1.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$10.99",
    usPriceoff: "$20.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied Tshirt",
  },
  {
    id: 86,
    name: "img1",
    img: "./pic/hoddiewomen1.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$30.99",
    usPriceoff: "$60.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied Hoodie",
  },
  {
    id: 87,
    name: "img1",
    img: "./pic/skirt1.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$50.99",
    usPriceoff: "$70.95",
    Priceoff: "-40%",
    typeOfShirt: "Sportswear Tech Fleece",
  },
  {
    id: 88,
    name: "img1",
    img: "./pic/womenpants1.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$30.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Nike Sportswear Pants",
  },
  {
    id: 89,
    name: "img1",
    img: "./pic/womenshort1.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$20.99",
    usPriceoff: "$45.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied Short",
  },
  {
    id: 90,
    name: "img1",
    img: "./pic/fleecec1.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$40.99",
    usPriceoff: "$80.95",
    Priceoff: "-40%",
    typeOfShirt: "Nike Sportswear Fleece",
  },
  {
    id: 91,
    name: "img1",
    img: "./pic/leg1.avif",
    categoies: "Khmer New Year Sale3",
    usPrice: "$20.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "Oversied CropTop",
  },

  // Recent Product
  {
    id: 500,
    name: "Air Jordan 5 Retro",
    price: "223$",
    img: "./pic/jordanP1.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$235.00",
    categoies: "Recent Product",
  },
  {
    id: 501,
    name: "Tatum3",
    price: "125$",
    img: "./pic/jordanP2.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$205.00",
    categoies: "Recent Product",
  },
  {
    id: 502,
    name: "Air Jordan 1 Low G",
    price: "140$",
    img: "./pic/jordanP3.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$195.00",
    categoies: "Recent Product",
  },
  {
    id: 503,
    name: "Air Jordan 3 Retro",
    price: "200$",
    img: "./pic/jordanP4.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$305.00",
    categoies: "Recent Product",
  },
  // bag
  {
    id: 504,
    name: "Nike Utility Power",
    price: "100$",
    img: "./pic/bagP1.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$125.00",
    categoies: "Recent Product",
  },
  {
    id: 505,
    name: "Nike Academy Team",
    price: "57$",
    img: "./pic/bagP2.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$100.00",
    categoies: "Recent Product",
  },
  {
    id: 506,
    name: "Nike Brasilia",
    price: "70$",
    img: "./pic/bagP3.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$85.00",
    categoies: "Recent Product",
  },
  {
    id: 507,
    name: "Nike Brasilia 9.5",
    price: "100$",
    img: "./pic/bagP4.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$125.00",
    categoies: "Recent Product",
  },
  {
    id: 89,
    name: "Women Short",
    price: "30$",
    img: "./pic/womenshort1.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$125.00",
    categoies: "Recent Product",
  },
  {
    id: 87,
    name: "Women Short",
    price: "50.99$",
    img: "./pic/skirt1.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$70.00",
    categoies: "Recent Product",
  },
  {
    id: 91,
    name: "Women Fleece",
    price: "20.99$",
    img: "./pic/fleecec1.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$40.00",
    categoies: "Recent Product",
  },
  {
    id: 86,
    name: "Women Hoddies",
    price: "30.99$",
    img: "./pic/hoddiewomen1.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$60.00",
    categoies: "Recent Product",
  },
  {
    id: 68,
    name: "Oversied Polo",
    price: "30.99$",
    img: "./pic/subpolomen2-3.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$40.00",
    categoies: "Recent Product",
  },
  {
    id: 68,
    name: "Oversied White Polo",
    price: "40.99$",
    img: "./pic/subpolomen3-3.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$50.00",
    categoies: "Recent Product",
  },
  {
    id: 1,
    name: "Oversied Tshirt",
    price: "8.99$",
    img: "./pic/main1.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$15.00",
    categoies: "Recent Product",
  },
  {
    id: 24,
    name: "Oversied Tshirt",
    price: "30.99$",
    img: "./pic/submenn8.avif",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$45.00",
    categoies: "Recent Product",
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
      <div class="image-card overflow-hidden" data-aos="zoom-in">
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
             <div class="image-card1 overflow-hidden" data-aos="zoom-in">
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
              <div class="image-card2 overflow-hidden" data-aos="zoom-in">
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
    return r.categoies == "Recent Product";
  })
  .map((a) => {
    return ` 
           <div class="col-lg-3 col-6 mb-3 mb-lg-4 " data-aos="zoom-in">
           <article class="wrapper-recent">
           <div class="wrapper-img position-relative overflow-hidden">
                            <img src="${a.img}"" class="w-100">
                            <div class="product-action">
                                <a class="btn btn-outline-primary btn-square"  href="./html/data.html?id=${a.id}"><i
                                        class="fa fa-shopping-cart"></i></a>
                                <a class="btn btn-outline-primary btn-square btnFav"  href="./html/AddFav.html"><i class="far fa-heart"></i></a>
                                <a class="btn btn-outline-primary btn-square" href="" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><i class="fa fa-search"></i></a>
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

const img1 = document.querySelectorAll(".img1");
img1.forEach((e) => {
  const originalSrc = e.src;

  e.addEventListener("mouseenter", function () {
    e.src = "./pic/main2.avif";
  });

  e.addEventListener("mouseleave", function () {
    e.src = originalSrc;
  });
});
const img2 = document.querySelectorAll(".img2");
img2.forEach((e) => {
  const originalSrc = e.src;

  e.addEventListener("mouseenter", function () {
    e.src = "./pic/submen2.avif";
  });

  e.addEventListener("mouseleave", function () {
    e.src = originalSrc;
  });
});
const img3 = document.querySelectorAll(".img3");
img3.forEach((e) => {
  const originalSrc = e.src;

  e.addEventListener("mouseenter", function () {
    e.src = "./pic/submenn6-1.avif";
  });

  e.addEventListener("mouseleave", function () {
    e.src = originalSrc;
  });
});
const img4 = document.querySelectorAll(".img4");
img4.forEach((e) => {
  const originalSrc = e.src;

  e.addEventListener("mouseenter", function () {
    e.src = "./pic/submenn7-1.avif";
  });

  e.addEventListener("mouseleave", function () {
    e.src = originalSrc;
  });
});
const img5 = document.querySelectorAll(".img5");
img5.forEach((e) => {
  const originalSrc = e.src;

  e.addEventListener("mouseenter", function () {
    e.src = "./pic/submenn2.avif";
  });

  e.addEventListener("mouseleave", function () {
    e.src = originalSrc;
  });
});
const img6 = document.querySelectorAll(".img6");
img6.forEach((e) => {
  const originalSrc = e.src;

  e.addEventListener("mouseenter", function () {
    e.src = "./pic/submenn8-1.avif";
  });

  e.addEventListener("mouseleave", function () {
    e.src = originalSrc;
  });
});
const img7 = document.querySelectorAll(".img7");
img7.forEach((e) => {
  const originalSrc = e.src;

  e.addEventListener("mouseenter", function () {
    e.src = "./pic/submenn9-1.avif";
  });

  e.addEventListener("mouseleave", function () {
    e.src = originalSrc;
  });
});
const img8 = document.querySelectorAll(".img8");
img8.forEach((e) => {
  const originalSrc = e.src;

  e.addEventListener("mouseenter", function () {
    e.src = "./pic/submenn10-1.avif";
  });

  e.addEventListener("mouseleave", function () {
    e.src = originalSrc;
  });
});

// Favorite Icon Click
const clickFav = document.querySelectorAll(".clickFav");
clickFav.forEach((fav) => {
  fav.addEventListener("click", function () {
    const heart = fav.querySelector(".clickHeart");
    heart.classList.toggle("fa-solid");
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
document.addEventListener("DOMContentLoaded", () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const totalOrdersElements = document.querySelectorAll(".totalOrders");
  const wrapperCanvases = document.querySelectorAll(".wrapper-canvas");

  // order Cart
  let totalAmount = 0;
  totalOrdersElements.forEach((el) => {
    el.textContent = orders.length;
  });
  if (orders.length === 0) {
    wrapperCanvases.forEach((wrapper) => {
      wrapper.innerHTML = "<p>No items</p>";
    });
    return;
  }
  // Display each order
  orders.forEach((order, index) => {
    const price = parseFloat(order.usPriceoff?.replace("$", "") || 0);
    const total = price * order.quantity;
    totalAmount += total;
    const orderHTML = `
       <div class="col-lg-6 col-6">
        <span class="usPricecart">Price: $${price.toFixed(2)}</span>
       <h5 class="offPricecart">Discount: ${order.offPrice}</h5>
        <h5 class="typeOfShirtcart">${order.typeOfShirt}</h5>
        <h5 class="totalPrice1">Total: $${total.toFixed(2)}</h5>
        <h5 class="sizeitem1">Size: ${order.size}</h5>
        <h5 class="qtyitem1">Quantity: ${order.quantity}</h5>
        <button class="btn btn-danger btn-sm mt-3" onclick="deleteOrder(${index})">
          Delete Item <i class="bi bi-trash"></i>
        </button>
      </div>
      <div class="col-lg-6 col-6">
        <div class="cart-preview">
          <img class="cart-preview-img w-100" src="${order.image}" />
          <button class="btn-sm2 mt-3 text-white">
          <a href="./html/Register.html" class="btn-sm1">
            Check Out <i class="fa-solid fa-bag-shopping"></i>
          </a>
        </button>
        </div>
        <br>
        <br>
      </div>
    `;

    // Insert into each wrapper canvas
    wrapperCanvases.forEach((wrapper) => {
      wrapper.innerHTML = orderHTML;
    });
  });
});

// Delete item from orders
function deleteOrder(index) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  location.reload(); // Reload to reflect updated cart
}

function renderOrdersUI() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const wrapperCanvases = document.querySelectorAll(".wrapper-canvas");
  const totalOrdersElements = document.querySelectorAll(".totalOrders");

  totalOrdersElements.forEach((el) => (el.textContent = orders.length));
  if (orders.length === 0) {
    wrapperCanvases.forEach((wrapper) => {
      wrapper.innerHTML = "<p>No items</p>";
    });
    return;
  }

  let totalAmount = 0;
  let html = "";

  orders.forEach((order, index) => {
    const price = parseFloat(order.usPriceoff?.replace("$", "") || 0);
    const total = price * order.quantity;
    totalAmount += total;

    html += `
      <div class="row mt-5">
        <div class="col-lg-6 col-6">
          <span class="usPricecart">Price: $${price.toFixed(2)}</span>
          <h5 class="offPricecart">Discount: ${order.offPrice}</h5>
          <h5 class="typeOfShirtcart" style="color: black; padding: 0.5rem 0;">
            ${order.typeOfShirt}
          </h5>
          <h5 class="totalPrice1">Total: $${totalAmount.toFixed(2)}</h5>
          <h5 class="sizeitem1">Size: ${order.size}</h5>
          <h5 class="qtyitem1">Quantity: ${order.quantity}</h5>
          <button class="btn btn-danger btn-sm mt-3" onclick="deleteOrder(${index})">
            Delete Item <i class="bi bi-trash"></i>
          </button>
        </div>
        <div class="col-lg-6 col-6">
          <div class="cart-preview">
            <img class="cart-preview-img w-100" src="${order.image}" />
             <button class="btn-sm2 text-white ">
            <a href="./html/Register.html" class="btn-sm1">
              Check Out <i class="fa-solid fa-bag-shopping" style="margin-left: 2px;"></i>
            </a>
          </button>
          </div>
        </div>
        </div>`;
  });

  wrapperCanvases.forEach((wrapper) => {
    wrapper.innerHTML = html;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderOrdersUI();
});

// back-to-top

let isScrolling;
const $backToTop = $(".back-to-top");
$backToTop.hide();
$(window).scroll(function () {
  clearTimeout(isScrolling);
  $backToTop.fadeIn("slow");
  isScrolling = setTimeout(function () {
    $backToTop.fadeOut("slow");
  }, 1000);
});
$backToTop.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1700, "easeInOutExpo");
});

// video option
const video = document.getElementById("myVideo");

video.addEventListener("pause", () => {
  video.play();
});
video.addEventListener("contextmenu", (e) => e.preventDefault());
