const dataSmall = [
  {
    id: 400,
    subId: 401,
    name: "BackPack Men",
    img: "../pic/ac1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale400",
    usPrice: "$69.99",
    usPriceoff: "$74.99",
    Priceoff: "-40%",
    typeOfShirt: "Bags & Backpacks",
    MaxQuantity: 50,
    similar: "top",
  },
  {
    id: 401,
    subId: 400,
    name: "BackPack Men",
    img: "../pic/Nike Utility Speed 1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale401",
    usPrice: "$69.99",
    usPriceoff: "$74.99",
    Priceoff: "-40%",
    typeOfShirt: "Bags & Backpacks",
    MaxQuantity: 50,
    similar: "top",
  },
  {
    id: 402,
    subId: 400,
    name: "women Bag",
    img: "../pic/Jordan Alpha 1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale402",
    usPrice: "$54.99",
    usPriceoff: "$35.97",
    Priceoff: "-34%",
    typeOfShirt: "Bags & Backpacks",
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
    typeOfShirt: "Duffels",
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
    Priceoff: "-34%",
    typeOfShirt: "Duffels",
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
    Priceoff: "-34%",
    typeOfShirt: "Duffels",
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
    typeOfShirt: "Duffels",
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
    Priceoff: "-34%",
    typeOfShirt: "Drawstring Bags",
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
    Priceoff: "-34%",
    typeOfShirt: "Drawstring Bags",
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
    typeOfShirt: "Drawstring Bags",
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
  displayItems(dataSmall.filter((item) => item.id >= 400));
});

li.forEach((item) => {
  item.addEventListener("click", (e) => {
    const categories = e.target.dataset.id;
    const newdata = dataSmall.filter((item) => item.typeOfShirt === categories);

    if (categories === "all") {
      displayItems(dataSmall.filter((item) => item.id >= 400));
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

document.addEventListener("DOMContentLoaded", () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const totalOrdersElements = document.querySelectorAll(".totalOrders");
  const wrapperCanvases = document.querySelectorAll(".wrapper-canvas");
  const wra = document.querySelectorAll(".wrapper-btn-53");

  // order Cart
  let totalAmount = 0;
  totalOrdersElements.forEach((el) => {
    el.textContent = orders.length;
  });
  if (orders.length === 0) {
    wrapperCanvases.forEach((wrapper) => {
      wrapper.innerHTML = "<p>No items</p>";
    });
    wra.forEach((e) => {
      e.classList.add("active");
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
  const lastPrice = document.querySelector(".lastPrice");
  const quan = document.querySelector(".quan");
  const wra = document.querySelectorAll(".wrapper-btn-53");

  totalOrdersElements.forEach((el) => (el.textContent = orders.length));
  if (orders.length === 0) {
    wrapperCanvases.forEach((wrapper) => {
      wrapper.innerHTML = "<p>No items</p>";
    });
    wra.forEach((e) => {
      e.classList.add("active");
    });
    return;
  }

  let totalAmount = 0;
  let html = "";
  orders.forEach((order, index) => {
    const price = parseFloat(order.usPriceoff?.replace("$", "") || 0);
    const total = price * order.quantity;
    totalAmount += total;
    lastPrice.innerHTML = "$" + totalAmount.toFixed(2);
    quan.innerHTML = orders.length;
    html += `
      <div class="row mt-4">
        <div class="col-lg-6 col-6">
          <span class="usPricecart">Price: $${price.toFixed(2)}</span>
          <h5 class="offPricecart">Discount: ${order.offPrice}</h5>
          <h5 class="typeOfShirtcart">
            type: ${order.typeOfShirt}
          </h5>
          <h5 class="totalPrice1">Total: $${totalAmount.toFixed(2)}</h5>
          <h5 class="sizeitem1">Size: ${order.size}</h5>
          <h5 class="qtyitem1">Quantity: ${order.quantity}</h5>
<button class="button1" onclick="deleteOrder(${index})">
  <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
</button>
        </div>
        <div class="col-lg-6 col-6">
          <div class="cart-preview">
            <img class="cart-preview-img w-100" src="${order.image}" />
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
