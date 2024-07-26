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
