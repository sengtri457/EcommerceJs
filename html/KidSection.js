const dataSmall = [
    {
      id: 300,
      subId: 300,
      name: "img1",
      img: "../pic/subkid1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale!",
      usPrice: "$10.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Oversied T-Shirt",
      MaxQuantity: 5,
      similar: "tshirt",
      section: "Kid",
    },
    {
      id: 301,
      subId: 300,
      name: "img1",
      img: "../pic/subkidsport1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale!",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Oversied T-Shirt",
      MaxQuantity: 5,
      similar: "tshirt",
      section: "Kid",
    },
    {
      id: 302,
      subId: 300,
      name: "img1",
      img: "../pic/subkidwhite1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale300",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Oversied T-Shirt",
      MaxQuantity: 5,
      similar: "tshirt",
      section: "Men",
    },
    {
      id: 303,
      subId: 300,
      name: "img1",
      img: "../pic/subkidblack1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale303",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Oversied T-Shirt",
      MaxQuantity: 5,
      similar: "tshirt",
      section: "Men",
    },
    {
      id: 304,
      subId: 300,
      name: "img1",
      img: "../pic/subkidblue1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale303",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Oversied T-Shirt",
      MaxQuantity: 5,
      similar: "tshirt",
      section: "Men",
    },
    {
      id: 305,
      subId: 301,
      name: "img1",
      img: "../pic/subkidgray1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale305",
      usPrice: "$10.09",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Oversied T-Shirt",
      MaxQuantity: 5,
      similar: "tshirt",
      section: "Men",
    },
    {
      id: 306,
      subId: 304,
      name: "img1",
      img: "../pic/subkidyellow1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale303",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Oversied T-Shirt",
      MaxQuantity: 5,
      similar: "tshirt",
      section: "Men",
    },
    {
      id: 307,
      subId: 301,
      name: "img1",
      img: "../pic/subkidred1.avif",
      class: "img1",
      categoies: "Khmer New Year Sale307",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Oversied T-Shirt",
      MaxQuantity: 5,
      similar: "tshirt",
      section: "Men",
    },
    {
      name: "img1",
      img: "../pic/subkidred2.avif",
      class: "img1",
      categoies: "Khmer New Year Sale307",
      usPrice: "$8.99",
      usPriceoff: "$14.95",
      Priceoff: "-40%",
      typeOfShirt: "Oversied T-Shirt",
      MaxQuantity: 5,
      similar: "tshirt",
      section: "Men",
    },
    {
      id:308,
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

// cart store
document.addEventListener("DOMContentLoaded", function () {
  // Get orders from localStorage
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  // const ordersTable = document.getElementById("ordersList");
  const totalOrdersSpan = document.querySelectorAll(".totalOrders");
  // const totalAmountSpan = document.getElementById("totalAmount");
  const wrappecanvas = document.querySelector(".wrapper-canvas");
  console.log(orders);

  // Calculate totals
  let totalAmount = 0;

  // Display orders
  orders.forEach((order, index) => {
    // const row = document.createElement("tr");
    const price = parseFloat(order.usPriceoff?.replace("$", "") || 0);
    const total = price * order.quantity;
    totalAmount += total;

    wrappecanvas.innerHTML = `<div class="col-lg-6 col-6">
                        <h5 class="text-dark fw-bold">Ordered Review</h5>
                        <br/>
                        <span class="usPricecart">Price: $${price.toFixed(
                          2
                        )}</span>
                        <h5 class="offPricecart">Discount: ${
                          order.offPrice
                        }</h5>
                        <h5 class="typeOfShirtcart" style="color: black;padding: 0.5rem 0rem;">${
                          order.typeOfShirt
                        }</h5>
                        <h5 class="totalPrice1" id="totalAmount">Total: $${totalAmount.toFixed(
                          2
                        )}</h5>
                        <h5 class="sizeitem1">Size:${order.size}</h5>
                        <h5 class="qtyitem1">Quantity:${order.quantity}</h5>
                        <button class="btn btn-danger btn-sm mt-3" onclick="deleteOrder(${index})">Delete Item
                               <i class="bi bi-trash"></i>
                           </button>
                    </div>
                    <div class="col-lg-6 col-6">
                        <div class="cart-preview">
                            <h5 class="text-dark fw-bold text-right">Cart Preview</h5>
                             <br/>
                            <img class="cart-preview-img w-100" src="${
                              order.image
                            }"/>
                        </div>
                    </div>
                        `;
    if (orders.length == 0) {
      wrappecanvas.innerHTML = "No items";
    }
  });

  // Update totals display
  totalOrdersSpan.forEach((e) => {
    e.textContent = orders.length;
  });
  console.log(orders);
});

function deleteOrder(index) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  location.reload();
}
