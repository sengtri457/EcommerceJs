const dataSmall = [
  {
    id: 500,
    name: "Tatum 3",
    img: "../pic/jorden2.avif",
    categoies: "Khmer New Year Sale27",
    usPrice: "$20.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "jordan",
    MaxQuantity: 50,
    similar: "top",
  },
  {
    id: 501,
    subId: 500,
    name: "Air Jordan 5 Retro",
    price: "223$",
    img: "../pic/jorden1.avif",
    categoies: "Khmer New Year Sale501",
    usPrice: "$20.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "jordan",
    MaxQuantity: 50,
    similar: "top",
  },
  {
    id: 502,
    subId: 501,
    name: "Air Jordan 5 Retro",
    price: "223$",
    img: "../pic/jorden3.avif",
    categoies: "Khmer New Year Sale502",
    usPrice: "$20.99",
    usPriceoff: "$40.95",
    Priceoff: "-40%",
    typeOfShirt: "lifestyle",
    MaxQuantity: 50,
    similar: "top",
  },
  {
    id: 503,
    subId: 501,
    name: "Air Jordan 5 Retro",
    price: "223$",
    img: "../pic/jorden4.avif",
    categoies: "Khmer New Year Sale503",
    usPrice: "$200.99",
    usPriceoff: "$240.95",
    Priceoff: "-40%",
    typeOfShirt: "jordan",
    MaxQuantity: 50,
    similar: "top",
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
                                    <p class="fw-light pt-1 mb-0">${a.typeOfShirt}</p>
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
  displayItems(dataSmall.filter((item) => item.id >= 500));
});

li.forEach((item) => {
  item.addEventListener("click", (e) => {
    const categories = e.target.dataset.id;
    const newdata = dataSmall.filter((item) => item.typeOfShirt === categories);

    if (categories === "all") {
      displayItems(dataSmall.filter((item) => item.id >= 500));
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
      displayItems(dataSmall.filter((item) => item.id >= 500));
    } else {
      displayItems(newdata);
    }
  });
});
