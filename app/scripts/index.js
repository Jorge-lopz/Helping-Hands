import { parseURL } from "./utilities.js";
import { loadComponent } from "./components.js";

const content = document.getElementById("content");

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "en"); // TODO (Based on browser / system preferences, IP or location)
}
window.lang = localStorage.getItem("lang");

let path = parseURL();
window.page = path[1] || "home.html";
loadComponent();

// Detect URL change and load the matching component
window.addEventListener("popstate", () => {
  if (parseURL()[1] != window.page) {
    window.page = path[1] || "home.html";
    loadComponent();
  }
});
