const dataSmall = [
    {
        id: 400,
        subId:401,
        name: "img1",
        img: "../pic/ac1.avif",
        class: "img1",
        categoies: "Khmer New Year Sale400",
        usPrice: "$69.99",
        usPriceoff: "$74.99",
        // Priceoff: "-40%",
        typeOfShirt: "Bag",
        MaxQuantity: 50,
        similar: "top",
      },
    {
        id: 401,
        subId: 400,
        name: "img1",
        img: "../pic/Nike Utility Speed 1.avif",
        class: "img1",
        categoies: "Khmer New Year Sale401",
        usPrice: "$69.99",
        usPriceoff: "$74.99",
        // Priceoff: "-40%",
        typeOfShirt: "Bag",
        MaxQuantity: 50,
        similar: "top",
      },
    {
        id: 402,
        subId: 400,
        name: "img1",
        img: "../pic/Jordan Alpha 1.avif",
        class: "img1",
        categoies: "Khmer New Year Sale402",
        usPrice: "$54.99",
        usPriceoff: "$35.97",
        Priceoff: "-34%",
        typeOfShirt: "Bag",
        MaxQuantity: 50,
        similar: "top",
      },
      {
        id: 403,
        subId: 400,
        name: "Jordan Monogram",
        img: "../pic/Jordan Monogram 1.avif",
        class: "img1",
        categoies: "Khmer New Year Sale403",
        usPrice: "$81.97",
        usPriceoff: "$125",
        Priceoff: "-34%",
        typeOfShirt: "Bag",
        MaxQuantity: 50,
        similar: "top",
      },
      {
        id: 404,
        subId: 400,
        name: "Nike Brasilia",
        img: "../pic/Nike Brasilia 1.avif",
        class: "Mesh Training Backpack (26L)",
        categoies: "Khmer New Year Sale404",
        usPrice: "$49.99",
        usPriceoff: "$59.99",
        // Priceoff: "-34%",
        typeOfShirt: "Bag",
        MaxQuantity: 50,
        similar: "top",
      },
      {
        id: 405,
        subId: 400,
        name: "Nike Brasilia",
        img: "../pic/Flight Carryall Tote 1.avif",
        class: "Mesh Training Backpack (26L)",
        categoies: "Khmer New Year Sale405",
        usPrice: "$49.99",
        usPriceoff: "$59.99",
        // Priceoff: "-34%",
        typeOfShirt: "Bag",
        MaxQuantity: 50,
        similar: "top",
      },
      {
        id: 406,
        subId: 400,
        name: "Nike Brasilia",
        img: "../pic/Nike Utility Power 1.avif",
        class: "Mesh Training Backpack (26L)",
        categoies: "Khmer New Year Sale406",
        usPrice: "$49.99",
        usPriceoff: "$59.99",
        Priceoff: "-34%",
        typeOfShirt: "Bag",
        MaxQuantity: 50,
        similar: "top",
      },
  ];
  const wrappersimilar = document.querySelector(".wrapper-similar");
  // wrappersimilar.innerHTML = dataSmall
  //   .filter((e) => {
  //     return e.section == "Men";
  //   })
  //   .map((a) => {
  //     return `
  //             <div class="col-lg-4 mb-4 col-6">
  //                 <div class="image-card-wrapper w-100 overflow-hidden">
  //                     <a href="data.html?id=${a.id}">
  //                         <img src="${a.img}" class="${a.class}" alt="${a.name}">
  //                     </a>
  //                 </div>
  //                 <div class="wrapper-similar-text mt-3 overflow-hidden">
  //                     <div class="wrapper-hover">
  //                     <div class="wrapper-flex-text d-flex justify-content-between align-items-center ">
  //                         <h5 class="fw-bold text-dark m-0 price-text">US ${a.usPrice}</h5>
  //         <h5 class=" text-dark fw-bolder clickFav" id="offcanvasRightLabel"><i class="fa-regular fa-heart clickHeart"></i>
  //         </h5>
  //     </div>
  //     <span class="offPriceShow">${a.usPriceoff}</span>
  //                                     <div class="flex-img d-flex justify-content-between align-items-center">
  //                                     <p class="fw-light pt-1 mb-0">${a.typeOfShirt}</p>
  //                                     <a href="data.html?id=${a.id}">
  //                         <img src="${a.img}" class="${a.class} img-price" alt="${a.name}" style="width:35px;height: 35px;">
  //                     </a>
  //                 </div>
  //                 </div>
  //                 </div>
  //             </div>
  //           `;
  //   })
  //   .join("");
  
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
    displayItems(dataSmall.filter((item) => item.id >=400));
  });
  
  li.forEach((item) => {
    item.addEventListener("click", (e) => {
      const categories = e.target.dataset.id;
      const newdata = dataSmall.filter((item) => item.typeOfShirt === categories);
  
      if (categories === "all") {
        displayItems(dataSmall.filter((item) => item.id >=400));
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
        displayItems(dataSmall.filter((item) => item.id >= 400));
      } else {
        displayItems(newdata);
      }
    });
  });
  