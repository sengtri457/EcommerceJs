const dataSmall = [
    // {
    //   id:318,
    //   subId: 308,
    //   name: "img1",
    //   img: "../pic/kidjacked1.avif",
    //   class: "img1",
    //   categoies: "Khmer New Year Sale318",
    //   usPrice: "$8.99",
    //   usPriceoff: "$14.95",
    //   Priceoff: "-40%",
    //   typeOfShirt: "Jacket",
    //   MaxQuantity: 5,
    //   similar: "Jacket",
    //   section: "top",
    // },
    {
        id:319,
        subId: 308,
        name: "img1",
        img: "../pic/kidjacked11.avif",
        class: "img1",
        categoies: "Khmer New Year Sale319",
        usPrice: "$8.99",
        usPriceoff: "$14.95",
        Priceoff: "-40%",
        typeOfShirt: "Jacket",
        MaxQuantity: 5,
        similar: "Jacket",
        section: "top",
      },
      {
        id:320,
        subId: 308,
        name: "img1",
        img: "../pic/kidjackedblack1.avif",
        class: "img1",
        categoies: "Khmer New Year Sale320",
        usPrice: "$8.99",
        usPriceoff: "$14.95",
        Priceoff: "-40%",
        typeOfShirt: "Jacket",
        MaxQuantity: 5,
        similar: "Jacket",
        section: "top",
      },
      {
        id:321,
        subId: 308,
        name: "img1",
        img: "../pic/kidjackedblue1.avif",
        class: "img1",
        categoies: "Khmer New Year Sale321",
        usPrice: "$8.99",
        usPriceoff: "$14.95",
        Priceoff: "-40%",
        typeOfShirt: "Jacket",
        MaxQuantity: 5,
        similar: "Jacket",
        section: "top",
      },
      {
        id:322,
        subId: 308,
        name: "img1",
        img: "../pic/kidjackedbrown1.avif",
        class: "img1",
        categoies: "Khmer New Year Sale322",
        usPrice: "$8.99",
        usPriceoff: "$14.95",
        Priceoff: "-40%",
        typeOfShirt: "Jacket",
        MaxQuantity: 5,
        similar: "Jacket",
        section: "top",
      },
      {
        id:323,
        subId: 308,
        name: "img1",
        img: "../pic/kidjackedbrody1.avif",
        class: "img1",
        categoies: "Khmer New Year Sale323",
        usPrice: "$8.99",
        usPriceoff: "$14.95",
        Priceoff: "-40%",
        typeOfShirt: "Jacket",
        MaxQuantity: 5,
        similar: "Jacket",
        section: "top",
      },
      {
        id:325,
        subId: 308,
        name: "img1",
        img: "../pic/kidjackedpurple1.avif",
        class: "img1",
        categoies: "Khmer New Year Sale325",
        usPrice: "$6.59",
        usPriceoff: "$14.95",
        Priceoff: "-40%",
        typeOfShirt: "Jacket",
        MaxQuantity: 5,
        similar: "Jacket",
        section: "top",
      },
    // {
    //   name: "img1",
    //   img: "../pic/T-Shirts (10).jpg",
    //   class: "img1",
    //   categoies: "Khmer New Year Sale!",
    // },
    
    // big
  
  
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
  