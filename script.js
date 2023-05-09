const amazonImage = document.querySelector(".amazon-image");
const amazonButton = document.querySelector(".amazon-button");
const teslaImage = document.querySelector(".tesla-image");
const teslaButton = document.querySelector(".tesla-button");
const twitterImage = document.querySelector(".twitter-image");
const twitterButton = document.querySelector(".twitter-button");

amazonButton.addEventListener("click", () => {
  if (amazonImage.style.display == "none") {
    amazonImage.style.display = "block";
    amazonButton.textContent = "Hide Amazon's image";
  } else {
    amazonImage.style.display = "none";
    amazonButton.textContent = "Show Amazon's Image";
  }
});

teslaButton.addEventListener("click", () => {
  if (teslaImage.style.display == "none") {
    teslaImage.style.display = "block";
    teslaButton.textContent = "Hide Tesla's image";
  } else {
    teslaImage.style.display = "none";
    teslaButton.textContent = "Show Tesla's image";
  }
});

twitterButton.addEventListener("click", () => {
  if (twitterImage.style.display == "none") {
    twitterImage.style.display = "block";
    twitterButton.textContent = "Hide Twitter's image";
  } else {
    twitterImage.style.display = "none";
    twitterButton.textContent = "Show Twitter's image";
  }
});
