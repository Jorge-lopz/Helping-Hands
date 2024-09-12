// Function to parse the URL for the page and the extra parameters
function parseURL() {
  const pathSegments = window.location.pathname.split("/").filter((segment) => segment.trim() !== "");
  return pathSegments;
}

export { parseURL };
