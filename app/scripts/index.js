import { changePage } from "./utilities.js";

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "en"); // TODO (Based on browser / system preferences, IP or location)
}
window.lang = localStorage.getItem("lang");

changePage();
addEventListener("pageChange", () => changePage());

// Sidebar navigation
document.querySelector(".sidebar").addEventListener("click", function (event) {
  let url = event.target.closest("a")?.id;
  if (url) window.history.replaceState("", "", url.replace(/^home$/, "/app/"));
});

// Override the replaceState and pushState method (Adding custom event dispatching)
function addEventDispatching(target, method, event) {
  const originalMethod = target[method];
  function newMethod(...args) {
    originalMethod.apply(target, args);
    window.dispatchEvent(new Event(event));
  }
  target[method] = newMethod;
}

addEventDispatching(window.history, "replaceState", "pageChange");
addEventDispatching(window.history, "pushState", "pageChange");

// On-screen notification function
function notify(message) {
  // TODO (Notification)
}
