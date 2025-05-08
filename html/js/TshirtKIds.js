const dataSmall = [
  {
    id: 336,
    name: "Nike Fleece",
    img: "../pic/tk1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale336",
    usPrice: "$18.99",
    usPriceoff: "$24.95",
    Priceoff: "-10%",
    typeOfShirt: "Graphic Tshirt",
    MaxQuantity: 5,
  },
  {
    id: 337,
    name: "Nike Graphic",
    img: "../pic/tk2.avif",
    class: "img1",
    categoies: "Khmer New Year Sale337",
    usPrice: "$28.99",
    usPriceoff: "$64.95",
    Priceoff: "-40%",
    typeOfShirt: "Graphic Tshirt",
    MaxQuantity: 5,
  },
  {
    id: 338,
    name: "Nike Graphic",
    img: "../pic/tk3.avif",
    class: "img1",
    categoies: "Khmer New Year Sale338",
    usPrice: "$38.99",
    usPriceoff: "$54.95",
    Priceoff: "-30%",
    typeOfShirt: "Graphic Tshirt",
    MaxQuantity: 5,
  },
  {
    id: 339,
    name: "Nike Graphic",
    img: "../pic/lk1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale339",
    usPrice: "$58.99",
    usPriceoff: "$84.95",
    Priceoff: "-40%",
    typeOfShirt: "Long Slevee",
    MaxQuantity: 5,
  },
  {
    id: 340,
    name: "Nike Graphic",
    img: "../pic/lk2.avif",
    class: "img1",
    categoies: "Khmer New Year Sale340",
    usPrice: "$28.99",
    usPriceoff: "$64.95",
    Priceoff: "-40%",
    typeOfShirt: "Long Slevee",
    MaxQuantity: 5,
  },
  {
    id: 341,
    name: "Nike Pro",
    img: "../pic/lk3.avif",
    class: "img1",
    categoies: "Khmer New Year Sale341",
    usPrice: "$10.99",
    usPriceoff: "$54.95",
    Priceoff: "-40%",
    typeOfShirt: "Long Slevee",
    MaxQuantity: 5,
  },
  {
    id: 342,
    name: "Nike Pro",
    img: "../pic/pk1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale342",
    usPrice: "$8.99",
    usPriceoff: "$14.95",
    Priceoff: "-40%",
    typeOfShirt: "Polo Shirt",
    MaxQuantity: 5,
  },
  {
    id: 343,
    name: "Nike Teach",
    img: "../pic/pk2.avif",
    class: "img1",
    categoies: "Khmer New Year Sale343",
    usPrice: "$18.99",
    usPriceoff: "$54.95",
    Priceoff: "-40%",
    typeOfShirt: "Polo Shirt",
    MaxQuantity: 5,
  },
  //   short
  {
    id: 336,
    name: "Nike Fleece",
    img: "../pic/tk1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale336",
    usPrice: "$18.99",
    usPriceoff: "$24.95",
    Priceoff: "-10%",
    typeOfShirt: "Short Slevee",
    MaxQuantity: 5,
  },
  {
    id: 337,
    name: "Nike Graphic",
    img: "../pic/tk2.avif",
    class: "img1",
    categoies: "Khmer New Year Sale337",
    usPrice: "$28.99",
    usPriceoff: "$64.95",
    Priceoff: "-40%",
    typeOfShirt: "Short Slevee",
    MaxQuantity: 5,
  },
  {
    id: 338,
    name: "Nike Graphic",
    img: "../pic/tk3.avif",
    class: "img1",
    categoies: "Khmer New Year Sale338",
    usPrice: "$38.99",
    usPriceoff: "$54.95",
    Priceoff: "-30%",
    typeOfShirt: "Short Slevee",
    MaxQuantity: 5,
  },
  {
    id: 342,
    name: "Nike Pro",
    img: "../pic/pk1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale342",
    usPrice: "$8.99",
    usPriceoff: "$14.95",
    Priceoff: "-40%",
    typeOfShirt: "Short Slevee",
    MaxQuantity: 5,
  },
  {
    id: 343,
    name: "Nike Teach",
    img: "../pic/pk2.avif",
    class: "img1",
    categoies: "Khmer New Year Sale343",
    usPrice: "$18.99",
    usPriceoff: "$54.95",
    Priceoff: "-40%",
    typeOfShirt: "Short Slevee",
    MaxQuantity: 5,
  },
];
const wrappersimilar = document.querySelector(".wrapper-similar");
//   btn-filter
const ul = document.querySelector(".clothes-flters");
const li = document.querySelectorAll(".custom-cursor-on-hover");
const displayItems = (items) => {
  const showing = items
    .map((a) => {
      return `
   <div class="col-lg-4 mb-4 col-6 " data-aos="zoom-in-up">
                  <div class="image-card-wrapper w-100 overflow-hidden">
                      <a href="data.html?id=${a.id}">
                          <img src="${a.img}" class="${a.class}" alt="${a.name}">
                      </a>
                  </div>
                  <div class="wrapper-similar-text mt-3 overflow-hidden">
                      <div class="wrapper-hover">
                      <div class="wrapper-flex-text d-flex justify-content-between align-items-center ">
                          <h5 class="fw-bold text-dark m-0 price-text">US ${a.usPrice}</h5>
          <h5 class=" text-dark fw-bolder clickFav" id="offcanvasRightLabel"><i class="fa-regular fa-heart clickHeart"></i>
          </h5>
      </div>
      <span class="offPriceShow">${a.usPriceoff}</span>
                                      <div class="flex-img d-flex justify-content-between align-items-center"> 
                                      <p class="fw-light pt-1 mb-0">${a.name}</p>
                                      <a href="data.html?id=${a.id}">
                          <img src="${a.img}" class="${a.class} img-price" alt="${a.name}" style="width:35px;height: 35px;">
                      </a>
                  </div>
                  </div>
                  </div>
              </div>
        </div>
        `;
    })
    .join("");
  wrappersimilar.innerHTML = showing;
};

window.addEventListener("DOMContentLoaded", () => {
  displayItems(dataSmall.filter((item) => item.id >= 300));
});

li.forEach((item) => {
  item.addEventListener("click", (e) => {
    const categories = e.target.dataset.id;
    const newdata = dataSmall.filter((item) => item.typeOfShirt === categories);

    if (categories === "all") {
      displayItems(dataSmall.filter((item) => item.id >= 300));
    } else {
      displayItems(newdata);
    }
  });
});
li.forEach((item) => {
  item.addEventListener("click", (e) => {
    li.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");

    const categories = e.target.dataset.id;
    const newdata = dataSmall.filter((item) => item.typeOfShirt === categories);

    if (categories === "all") {
      displayItems(dataSmall.filter((item) => item.id >= 300));
    } else {
      displayItems(newdata);
    }
  });
});
