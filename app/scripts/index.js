import { parseURL } from "./utilities.js";
import { loadComponent } from "./components.js";

// TODO (Handle Routing)
function handleRouting() {
  const path = window.location.pathname;

  if (path.startsWith("/app/")) {
    window.history.replaceState("", "", path);
  }
}

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "en"); // TODO (Based on browser / system preferences, IP or location)
}
window.lang = localStorage.getItem("lang");

let path = parseURL();
window.page = path[1] || "home";
loadComponent();

// Sidebar navigation
document.querySelector(".sidebar").addEventListener("click", function (event) {
  let url = event.target.closest("a")?.id;
  if (url) window.history.replaceState("", "", url);
});

// Detect URL change and load the matching component
window.addEventListener("popstate", () => {
  console.log("Hi");
  if (parseURL()[1] != window.page) {
    window.page = path[1] || "home";
    loadComponent();
  }
});

// On-screen notification function
function notify(message) {
  // TODO (Notification)
}
