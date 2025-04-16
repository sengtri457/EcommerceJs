let imageList = []; // Will be filled dynamically
let currentIndex = 0;
let currentImages = [];
const dataSmall = [
  {
    id: 1,
    name: "img1",
    img: ["../pic/h175 (1).png", "../pic/h175 (2).png", "../pic/h175 (9).png"],
    class: "img1",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 2,
    name: "img2",
    img: "../pic/h175 (2).png",
    class: "img2",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 3,
    name: "img3",
    img: "../pic/h175 (9).png",
    class: "img3",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 4,
    name: "img4",
    img: "../pic/h175 (4).png",
    class: "img4",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 5,
    name: "img1",
    img: "../pic/h175 (5).png",
    class: "img5",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 6,
    name: "img2",
    img: "../pic/h175 (6).png",
    class: "img6",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 7,
    name: "img3",
    img: "../pic/h175 (7).png",
    class: "img7",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 8,
    name: "img4",
    img: "../pic/h175 (1).png",
    class: "img8",
    categoies: "Khmer New Year Sale!",
  },
  {
    id: 9,
    name: "img1",
    img: "../pic/h175 (1).png",
    link: "./login.html",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 10,
    name: "img2",
    img: "../pic/1731034178744.webp",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 11,
    name: "img3",
    img: "../pic/1743463843176.jpg",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 12,
    name: "img4",
    img: "../pic/20240918040216.webp",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 13,
    name: "img1",
    img: "../pic/h175 (1).png",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 14,
    name: "img2",
    img: "../pic/1731034178744.webp",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 15,
    name: "img3",
    img: "../pic/1743463843176.jpg",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 16,
    name: "img4",
    img: "../pic/20240918040216.webp",
    categoies: "Khmer New Year Sale2",
  },
  {
    id: 17,
    name: "img1",
    img: "../pic/1730511714186.webp",
    link: "./login.html",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 18,
    name: "img2",
    img: "../pic/1731034178744.webp",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 19,
    name: "img3",
    img: "../pic/1743463843176.jpg",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 20,
    name: "img4",
    img: "../pic/20240918040216.webp",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 21,
    name: "img1",
    img: "../pic/1730511714186.webp",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 22,
    name: "img2",
    img: "../pic/1731034178744.webp",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 23,
    name: "img3",
    img: "../pic/1743463843176.jpg",
    categoies: "Khmer New Year Sale3",
  },
  {
    id: 24,
    name: "img4",
    img: "../pic/20240918040216.webp",
    categoies: "Khmer New Year Sale3",
  },
  // Recent Product
  {
    id: 25,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "223$",
    img: "../pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$235.00",
  },
  {
    id: 26,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "123$",
    img: "../pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$125.00",
  },
  {
    id: 27,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "300$",
    img: "../pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$335.00",
  },
  {
    id: 28,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "../pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
  {
    id: 29,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "../pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
  {
    id: 30,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "../pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
  {
    id: 31,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "../pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
  {
    id: 32,
    name: "ASUS Zenbook 14X OLED (UX5401)",
    price: "$234",
    img: "../pic/20240918040216.webp",
    i: "fa fa-star text-primary mr-1",
    iHalf: "fa fa-star-half-alt text-primary mr-1",
    del: "$255.00",
  },
];
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const product = dataSmall.find((p) => p.id === id);

// Update the main image
function updateMainImage(index) {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnails img");

  thumbnails.forEach((img) => img.classList.remove("active"));
  if (thumbnails[index]) thumbnails[index].classList.add("active");

  mainImage.classList.add("fade-out");

  setTimeout(() => {
    mainImage.src = currentImages[index];
    mainImage.onload = () => {
      mainImage.classList.remove("fade-out");
    };
  }, 150);
}

// When clicking on a thumbnail
function selectImage(index) {
  currentIndex = index;
  updateMainImage(index);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateMainImage(currentIndex);
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateMainImage(currentIndex);
}

window.addEventListener("DOMContentLoaded", () => {
  const thumbnailContainer = document.getElementById("thumbnailContainer");

  if (product) {
    // 🔥 Get all products in the same category
    const sameCategoryProducts = dataSmall.filter(
      (item) => item.categoies === product.categoies
    );

    // 🔥 Flatten all images from that category
    imageList = sameCategoryProducts.flatMap((item) =>
      Array.isArray(item.img) ? item.img : [item.img]
    );

    // 🔥 Remove duplicates
    imageList = [...new Set(imageList)];

    // Set currentImages
    currentImages = imageList;
    currentIndex = currentImages.findIndex((img) =>
      Array.isArray(product.img)
        ? product.img.includes(img)
        : img === product.img
    );

    // Fallback if not found
    if (currentIndex === -1) currentIndex = 0;

    // Set main image
    const mainImage = document.getElementById("mainImage");
    mainImage.src = currentImages[currentIndex];

    // Clear and generate new thumbnails
    thumbnailContainer.innerHTML = "";
    currentImages.forEach((imgSrc, index) => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = `Thumbnail ${index + 1}`;
      img.classList.add("thumbnail");
      if (index === currentIndex) img.classList.add("active");

      img.addEventListener("click", () => selectImage(index));
      thumbnailContainer.appendChild(img);
    });

    // Set product name
    const productName = document.getElementById("product-name");
    if (productName) {
      productName.textContent = product.name;
    }
  } else {
    document.body.innerHTML = "<h2>Product not found!</h2>";
  }
});
// size

const sizexs = document.querySelector(".size-Xs");
const sizes = document.querySelector(".size-S");
const sizeM = document.querySelector(".size-M");
const sizeL = document.querySelector(".size-L");

sizexs.addEventListener("click", () => {
  sizexs.classList.toggle("sizeSelected");
  sizes.classList.remove("sizeSelected");
  sizeM.classList.remove("sizeSelected");
  sizeL.classList.remove("sizeSelected");
});
sizes.addEventListener("click", () => {
  sizes.classList.toggle("sizeSelected");
  sizexs.classList.remove("sizeSelected");
  sizeM.classList.remove("sizeSelected");
  sizeL.classList.remove("sizeSelected");
});
sizeM.addEventListener("click", () => {
  sizeM.classList.toggle("sizeSelected");
  sizexs.classList.remove("sizeSelected");
  sizes.classList.remove("sizeSelected");
  sizeL.classList.remove("sizeSelected");
});
sizeL.addEventListener("click", () => {
  sizeL.classList.toggle("sizeSelected");
  sizexs.classList.remove("sizeSelected");
  sizes.classList.remove("sizeSelected");
  sizeM.classList.remove("sizeSelected");
});

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const valueText = document.querySelector(".resultQTY");
const btnSub = document.querySelector(".btn-sub");
const result = document.querySelector(".result");
valueText.innerHTML = 0;
result.innerHTML = 0;
increment.addEventListener("click", function () {
  valueText.innerHTML = parseInt(valueText.innerHTML) + 1;
});
decrement.addEventListener("click", function () {
  if (valueText.innerHTML <= 0) {
    valueText.innerHTML = 0;
  } else {
    valueText.innerHTML = parseInt(valueText.innerHTML) - 1;
  }
});

btnSub.addEventListener("click", function () {
  if (valueText.innerHTML <= 0) {
    result.innerHTML = 0;
  } else {
    result.innerHTML = parseInt(valueText.innerHTML);
  }
});
