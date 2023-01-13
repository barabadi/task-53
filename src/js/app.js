import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


});
const products = document.querySelectorAll(".product");

products.forEach(product => {
  const price = product.querySelector(".price").textContent;
  product.setAttribute("data-price", price);
});
