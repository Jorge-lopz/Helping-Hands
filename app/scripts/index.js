import { parseURL } from "./utilities.js";
import { loadComponent } from "./components.js";

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
  if (url) window.history.replaceState("", "", url.replace(/^home$/, "/app"));
});

// Override the replaceState method (Adding custom event)
(function () {
  const originalReplaceState = window.history.replaceState;
  window.history.replaceState = function (...args) {
    originalReplaceState.apply(window.history, args);
    // Create and dispatch a custom event
    window.dispatchEvent(new Event("pageChange"));
  };
})();

// Detect URL change and load the matching component
window.addEventListener("pageChange", () => {
  path = parseURL();
  if (path[1] != window.page) {
    window.page = path[1] || "home";
    loadComponent();
  }
});

// On-screen notification function
function notify(message) {
  // TODO (Notification)
}
