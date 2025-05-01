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
