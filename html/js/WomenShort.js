const dataSmall = [
  {
    id: 204,
    subId: 203,
    name: "NikeCourt Phoenix",
    img: "../pic/hw1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale204",
    usPrice: "$160.99",
    usPriceoff: "$280.95",
    Priceoff: "-50%",
    typeOfShirt: "Hoddies",
    MaxQuantity: 50,
  },
  {
    id: 205,
    subId: 204,
    name: "Hoddie Women",
    img: "../pic/hw3.avif",
    class: "img1",
    categoies: "Khmer New Year Sale205",
    usPrice: "$120.99",
    usPriceoff: "$240.95",
    Priceoff: "-50%",
    typeOfShirt: "Hoddies",
    MaxQuantity: 50,
  },
  {
    id: 206,
    subId: 205,
    name: "Hoddie Women",
    img: "../pic/hw4.avif",
    class: "img1",
    categoies: "Khmer New Year Sale206",
    usPrice: "$120.99",
    usPriceoff: "$240.95",
    Priceoff: "-50%",
    typeOfShirt: "Hoddies",
    MaxQuantity: 50,
  },
  {
    id: 207,
    subId: 206,
    name: "Hoddie Women",
    img: "../pic/hw5.avif",
    class: "img1",
    categoies: "Khmer New Year Sale207",
    usPrice: "$120.99",
    usPriceoff: "$240.95",
    Priceoff: "-50%",
    typeOfShirt: "Hoddies",
    MaxQuantity: 50,
  },
  {
    id: 224,
    subId: 206,
    name: "Nike Sportswear",
    img: "../pic/sw1.avif",
    class: "img1",
    categoies: "Khmer New Year Sale224",
    usPrice: "$50.99",
    usPriceoff: "$100.95",
    Priceoff: "-50%",
    typeOfShirt: "Knee Length",
    MaxQuantity: 50,
  },
  {
    id: 227,
    subId: 206,
    name: "Nike Sportswear",
    img: "../pic/sw4.avif",
    class: "img1",
    categoies: "Khmer New Year Sale227",
    usPrice: "$50.99",
    usPriceoff: "$100.95",
    Priceoff: "-50%",
    typeOfShirt: "Knee Length",
    MaxQuantity: 50,
  },
  {
    id: 225,
    subId: 224,
    name: "Nike One",
    img: "../pic/sw2.avif",
    class: "img1",
    categoies: "Khmer New Year Sale225",
    usPrice: "$40.99",
    usPriceoff: "$100.95",
    Priceoff: "-60%",
    typeOfShirt: "Knee Length",
    MaxQuantity: 50,
  },
  {
    id: 226,
    subId: 225,
    name: "Nike Sportswear",
    img: "../pic/sw3.avif",
    class: "img1",
    categoies: "Khmer New Year Sale226",
    usPrice: "$30.99",
    usPriceoff: "$100.95",
    Priceoff: "-70%",
    typeOfShirt: "Knee Length",
    MaxQuantity: 50,
  },
  {
    id: 228,
    subId: 225,
    name: "Nike Sportswear",
    img: "../pic/sw5.avif",
    class: "img1",
    categoies: "Khmer New Year Sale228",
    usPrice: "$30.99",
    usPriceoff: "$100.95",
    Priceoff: "-70%",
    typeOfShirt: "Knee Length",
    MaxQuantity: 50,
  },
  {
    id: 229,
    subId: 228,
    name: "Nike Sportswear",
    img: "../pic/sw6.avif",
    class: "img1",
    categoies: "Khmer New Year Sale229",
    usPrice: "$30.99",
    usPriceoff: "$100.95",
    Priceoff: "-70%",
    typeOfShirt: "Knee Length",
    MaxQuantity: 50,
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
                    <a href="data2.html?id=${a.id}">
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
  displayItems(dataSmall.filter((item) => item.id > 0));
});

li.forEach((item) => {
  item.addEventListener("click", (e) => {
    const categories = e.target.dataset.id;
    const newdata = dataSmall.filter((item) => item.typeOfShirt === categories);

    if (categories === "all") {
      displayItems(dataSmall.filter((item) => item.id > 0));
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
      displayItems(dataSmall.filter((item) => item.id > 0));
    } else {
      displayItems(newdata);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const totalOrdersElements = document.querySelectorAll(".totalOrders");
  const wrapperCanvases = document.querySelectorAll(".wrapper-canvas");

  // order Cart

  let totalAmount = 0;

  // Update total orders count
  totalOrdersElements.forEach((el) => {
    el.textContent = orders.length;
  });

  // If no orders, show "No items" message
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
          <a href="./Register.html" class="btn-sm1">
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
            <a href="./Register.html" class="btn-sm1">
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
