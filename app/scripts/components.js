function loadComponent() {
  // Extract language prefix and base path
  const language = segments.length > 1 && Object.keys(routes).includes(segments[0]) ? segments[0] : "en";
  const basePath = segments.length > 1 ? segments[1] : segments[0];

  // Use the language and base path to find the component file
  const componentFile = routes[language][basePath] || "home.html";

  fetch(componentFile)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error("Error loading component:", error));
}

export { loadComponent };
