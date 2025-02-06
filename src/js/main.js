var infoIcons = document.querySelectorAll(".fa-circle-info");

function toggleDetails(event) {
  var productBox = event.target.closest(".product");
  var details = productBox.querySelector(".product-details");
  details.classList.toggle("is-active");
  productBox.classList.toggle("change-color");
}

infoIcons.forEach(function (icon) {
  icon.addEventListener("click", toggleDetails);
});

infoIcons.forEach(function (icon) {
  var productBox = icon.closest(".product");
  productBox.addEventListener("click", function () {
    productBox.classList.toggle("is-active");
  });
});
