const dataSmall = [
    {
      id:308,
      subId: 308,
      name: "img1",
      img: "../pic/kidhoddiebluewhite1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale308",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Hoddies",
      MaxQuantity: 5,
      similar: "Hoddies",
      section: "top",
    },
    {
      id:309,
      subId: 308,
      name: "img1",
      img: "../pic/kidhoddieblue1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale309",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Hoddies",
      MaxQuantity: 5,
      similar: "Hoddies",
      section: "top",
    },
    {
      id:310,
      subId: 308,
      name: "img1",
      img: "../pic/kidhoddiegirlorange1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale310",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Hoddies",
      MaxQuantity: 5,
      similar: "Hoddies",
      section: "top",
    },
    {
      id:311,
      subId: 308,
      name: "img1",
      img: "../pic/kidhoddiegirlpink1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale311",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Hoddies",
      MaxQuantity: 5,
      similar: "Hoddies",
      section: "top",
    },
    {
      id:312,
      subId: 308,
      name: "img1",
      img: "../pic/kidhoddiegirlyellow1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale312",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Hoddies",
      MaxQuantity: 5,
      similar: "Hoddies",
      section: "top",
    },
    {
      id:313,
      subId: 308,
      name: "img1",
      img: "../pic/kidhoddiegirlpouple1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale313",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Hoddies",
      MaxQuantity: 5,
      similar: "Hoddies",
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
  