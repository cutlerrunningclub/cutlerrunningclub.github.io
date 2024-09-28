function changeLanguage() {
  const dataset = document.querySelector("body").dataset;
  const language = dataset.language === "CN" ? "EN" : "CN";
  dataset.language = language;
  localStorage.setItem("language", language);
}


window.addEventListener("DOMContentLoaded", function() {
  const language = localStorage.getItem("language");
  if (language) {
    const dataset = document.querySelector("body").dataset;
    dataset.language = language;
    if (language === "EN") {
      document.querySelector(".form-check-input").checked = false;
    }
  }
}, false);
