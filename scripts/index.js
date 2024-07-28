const searchBox = document.getElementById("search");
const searchButton = document.getElementById("search-button");

searchBox.addEventListener("input", () => {
  if (searchBox.value != "") {
    searchButton.children[0].classList.add("active");
    searchButton.setAttribute("href", "");
  } else {
    searchButton.children[0].classList.remove("active");
    searchButton.removeAttribute("href");
  }
});

const popupBackdrop = document.getElementById("popup-backdrop");
const loginPopup = document.getElementById("login-popup");

function loginPopupOpen() {
  popupBackdrop.classList.add("visible");
  loginPopup.classList.add("visible");
  document.querySelector("html").style.overflowY = "hidden";
}

function loginPopupClose() {
  popupBackdrop.classList.remove("visible");
  loginPopup.classList.remove("visible");
  document.querySelector("html").style.overflowY = "auto";
}
