function loadLanguage() {
  let url = `./locales/${window.lang}/${window.page}.json`;
  fetch(url, { method: "HEAD" })
    .then((response) => {
      if (!response.ok) throw new Error(`File not found: ${url}`);
      return fetch(url);
    })
    .then((response) => response.json())
    .then((data) => {
      // Update content with the loaded language data
      for (const [key, value] of Object.entries(data)) {
        if (document.getElementById(key)) {
          document.getElementById(key).textContent = value;
        }
      }
    })
    .catch((error) => {
      console.warn(`Error loading language: ${window.lang}, defaulting to English`);

      if (window.lang !== "en") {
        localStorage.setItem("lang", "en");
        window.lang = "en";
        loadLanguage();
      }
    });
}

// Handle language switch
/* TODO (Language Switcher)
languageSwitcher.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    loadLanguage(selectedLanguage);
    localStorage.setItem("lang", selectedLanguage);
}); 
*/

export { loadLanguage };
