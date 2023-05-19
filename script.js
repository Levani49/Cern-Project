const amazonImage = document.querySelector(".amazon-image");
const amazonButton = document.querySelector(".amazon-button");
const teslaImage = document.querySelector(".tesla-image");
const teslaButton = document.querySelector(".tesla-button");
const twitterImage = document.querySelector(".twitter-image");
const twitterButton = document.querySelector(".twitter-button");
const cernImage = document.querySelector(".cern-image");
const cernButton = document.querySelector(".cern-button");

amazonButton.addEventListener("click", () => {
  if (amazonImage.style.display == "none") {
    amazonImage.style.display = "block";
    amazonButton.style.backgroundColor = "black";
  } else {
    amazonImage.style.display = "none";
    amazonButton.style.backgroundColor = "rgb(78, 77, 77)";
  }
});

teslaButton.addEventListener("click", () => {
  if (teslaImage.style.display == "none") {
    teslaImage.style.display = "block";
    teslaButton.style.backgroundColor = "rgb(172, 2, 2)";
  } else {
    teslaImage.style.display = "none";
    teslaButton.style.backgroundColor = "rgb(250, 12, 12)";
  }
});

twitterButton.addEventListener("click", () => {
  if (twitterImage.style.display == "none") {
    twitterImage.style.display = "block";
    twitterButton.style.backgroundColor = "#00acee";
  } else {
    twitterImage.style.display = "none";
    twitterButton.style.backgroundColor = "#75d8ff";
  }
});

cernButton.addEventListener("click", () => {
  if (cernImage.style.display == "none") {
    cernImage.style.display = "block";
    cernButton.style.backgroundColor = "blue";
  } else {
    cernImage.style.display = "none";
    cernButton.style.backgroundColor = "rgb(71, 71, 205)";
  }
});
