// Keep the copyright year current without changing the page content manually.
const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Accept this entry module so Vite can replace it without a full page reload.
if (import.meta.hot) {
  import.meta.hot.accept();
}
