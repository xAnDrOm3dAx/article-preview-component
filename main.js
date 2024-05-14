const shareButton = document.querySelector(".share-button");
const shareButton2 = document.querySelector(".share-button-2");
const authorWrapper = document.querySelector(".author-wrapper");
const authorInfoWrapper = document.querySelector(".author-info-wrapper");
const shareWrapper = document.querySelector("#share-wrapper");

shareButton.addEventListener("click", () => {
  if (shareWrapper.style.display === "flex") {
    shareWrapper.style.display = "none";
    authorWrapper.style.background = "none";
    authorInfoWrapper.style.display = "flex";
    shareButton.classList.add("share-button");
    shareButton.classList.remove("share-button-2");
  } else {
    shareWrapper.style.display = "flex";
    authorInfoWrapper.style.display = "none";
    authorWrapper.style.background = "var(--very-dark-grayish-blue)";
    shareButton.classList.remove("share-button");
    shareButton.classList.add("share-button-2");
  }
});
