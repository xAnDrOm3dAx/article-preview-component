const shareButton = document.querySelector(".share-button");
const shareWrapper = document.querySelector(".share-wrapper");
const authorInfoWrapper = document.querySelector(".author-info-wrapper");
const linksWrapper = document.querySelector("#links-wrapper");
const svgPath = document.querySelector(".svg-path");

shareButton.addEventListener("click", () => {
  if (linksWrapper.style.display === "flex") {
    toggleAuthor();
  } else {
    toggleShareLinks();
  }
});

function toggleAuthor() {
  linksWrapper.style.display = "none";
  shareWrapper.style.background = "none";
  authorInfoWrapper.style.display = "flex";
  shareButton.style.background = "var(--light-grayish-blue)";
  svgPath.setAttribute("fill", "#6E8098");
}

function toggleShareLinks() {
  linksWrapper.style.display = "flex";
  authorInfoWrapper.style.display = "none";
  shareWrapper.style.background = "var(--very-dark-grayish-blue)";
  shareButton.style.background = "var(--desaturated-dark-blue)";
  svgPath.setAttribute("fill", "var(--light-grayish-blue)");
}
