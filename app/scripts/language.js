function loadLanguage() {
  fetch(`../locales/${window.lang}/${window.page}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Update content with the loaded language data
      for (const [key, value] of Object.entries(data)) {
        if (contentElements[key]) {
          contentElements[key].textContent = value;
        }
      }
    })
    .catch(() => {
      console.error("Error loading language:", window.lang, ", defaulting to English");
      window.lang = "en";
      loadLanguage();
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
