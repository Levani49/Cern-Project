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
  } else {
    amazonImage.style.display = "none";
  }
});

teslaButton.addEventListener("click", () => {
  if (teslaImage.style.display == "none") {
    teslaImage.style.display = "block";
  } else {
    teslaImage.style.display = "none";
  }
});

twitterButton.addEventListener("click", () => {
  if (twitterImage.style.display == "none") {
    twitterImage.style.display = "block";
  } else {
    twitterImage.style.display = "none";
  }
});

cernButton.addEventListener("click", () => {
  if (cernImage.style.display == "none") {
    cernImage.style.display = "block";
  } else {
    cernImage.style.display = "none";
  }
});
