// For mobile navBar!!!
isClicked = false;
const icon = document.querySelector(".icon");
const links = document.querySelector(".links");
const mFArrow = document.querySelector(".mobile .features .direction");
const mCArrow = document.querySelector(".mobile .company .direction");
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".mobile .features a").onclick = function () {
    document.querySelector(".mobile .under-features").classList.toggle("block");
    mFArrow.classList.toggle("fa-angle-up");
  };
  document.querySelector(".mobile .company a").onclick = function () {
    document.querySelector(".mobile .under-company").classList.toggle("block");
    mCArrow.classList.toggle("fa-angle-up");
  };

  // For Desktop NavBar
  const features = document.querySelector(".features a");
  const company = document.querySelector(".company a");
  const hiddenFeatures = document.querySelector(".under-features");
  const hiddenCompany = document.querySelector(".under-company");
  const fArrow = document.querySelector(".desktop .features .direction");
  const cArrow = document.querySelector(".desktop .company .direction");

  fClicked =  false;
  features.addEventListener("click", function () {
    if (!fClicked) {
      hiddenFeatures.classList.remove("hide");
      fArrow.classList.remove("fa-angle-down");
      fArrow.classList.add("fa-angle-up");
      fClicked = true;
    } else {
      hiddenFeatures.classList.add("hide");
      fArrow.classList.add("fa-angle-down");
      fArrow.classList.remove("fa-angle-up");
      fClicked = false;
    }
  });
  cClicked = false;
  company.addEventListener("click", function () {
    if (!cClicked) {
      hiddenCompany.classList.remove("hide");
      cArrow.classList.remove("fa-angle-down");
      cArrow.classList.add("fa-angle-up");
      cClicked = true;
    } else {
      hiddenCompany.classList.add("hide");
      cArrow.classList.add("fa-angle-down");
      cArrow.classList.remove("fa-angle-up");
      cClicked = false;
    }
  });
});
function show(){
  document.querySelector(".mobile-link-div").classList.toggle("blur");
    if (!isClicked) {
      links.classList.remove("left");
      links.classList.add("show");
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      isClicked = true;
    } else {
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
      links.classList.remove("show");
      links.classList.add("left");
      isClicked = false;
    }
}
// This function works only if the mobile nav is in display
function noShow(){
  if (isClicked) {
      document.querySelector(".mobile-link-div").classList.remove("blur");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
      links.classList.remove("show");
      links.classList.add("left");
      isClicked = false;
    }
}
