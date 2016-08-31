var button = document.querySelector(".booking-button");
var popup = document.querySelector(".form-window");

button.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form-window-show");
});
