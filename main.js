const shareButton1 = document.querySelector(".share-button-1");
const shareButton2 = document.querySelector(".share-button-2");
const authorWrapper = document.querySelector(".author-wrapper");
const shareWrapper = document.querySelector(".toggle-share-wrapper");

shareButton1.addEventListener("click", () => {
  shareWrapper.classList.remove("toggle-share-wrapper");
  authorWrapper.style.display = "none";
});

shareButton2.addEventListener("click", () => {
  shareWrapper.classList.add("toggle-share-wrapper");
  authorWrapper.style.display = "flex";
});
