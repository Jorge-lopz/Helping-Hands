import routes from "./routes.js";

// Function to parse the URL for the page and the extra parameters
function parseURL() {
  const pathSegments = window.location.pathname.split("/").filter((segment) => segment.trim() !== "");
  if (pathSegments[1] && !routes[pathSegments[1]]) {
    window.history.replaceState("", "", "/app/");
    return ["app", "home"];
  }
  return pathSegments;
}

export { parseURL };
