const sidebar = document.getElementById("sidebar");
const cart = document.getElementById("cart");
const closeBtn = document.getElementById("close-btn");
const sideBox = document.getElementById("side-box");
const overlay = document.getElementById("overlay");

// add function
let openBar = function () {
  sidebar.style.right = "0px";
  document.body.classList = "open";
  overlay.classList.add("overlay");
};
// remove function
let closeBar = function () {
  sidebar.style.right = "-500px";
  document.body.classList.remove("open");
  overlay.classList.remove("overlay");
};
cart.addEventListener("click", openBar);
sideBox.addEventListener("click", openBar);
closeBtn.addEventListener("click", closeBar);
overlay.addEventListener("click", closeBar);
