import routes from "./routes.js";
import { loadComponent } from "./components.js";

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

// TODO (Create checks for each URL)
// Checks the URL and returns the highest valid URL (Removing everything after the first mistake)
function validURL(pathSegments) {
  // SEARCH -> Allows 'users/', 'offers/' and 'requests/', the actual user input appears as a param (?q=input)
  // HOME -> Doesn't allow any further URLs
  // FRIENDS -> Doesn't allow any further URLs
}

// Function to parse the URL for the page and the extra parameters
function parseURL() {
  const pathSegments = window.location.pathname.split("/").filter((segment) => segment.trim() !== "");
  /* TODO Check if valid */
  if (pathSegments[1] && !routes[pathSegments[1]]) {
    window.history.replaceState("", "", "/app/");
    return ["app", "home"];
  }
  return pathSegments;
}

function changePage() {
  let path = parseURL();
  if (path[1] != window.page) {
    window.page = path[1] || "home";
    document.getElementsByTagName("title")[0].innerHTML = `Helping Hands | ${window.page.capitalize()}`;
    loadComponent();
  }
}

export { parseURL, changePage };
