import { loadLanguage } from "./language.js";
import routes from "./routes.js";

// Extract language prefix and base path
function loadComponent() {
  let page = routes[window.page];
  fetch(`./pages/${page}`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error("Error loading component:", error));
  loadLanguage();
}

export { loadComponent };
