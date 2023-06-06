const modeSwitch = document.getElementById("mode-switch");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

modeSwitch.addEventListener("change", function () {
  if (this.checked) {
    nav.classList.add("dark-mode");
    body.classList.add("dark-mode");
  } else {
    nav.classList.remove("dark-mode");
    body.classList.remove("dark-mode");
  }
});
