// Carousel logic (same as before) ...
// Swipe support (same as before) ...
// Chart.js (same as before) ...

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check saved preference
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeToggle.textContent = "🌙 Dark Mode";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙 Light Mode";
    localStorage.setItem("theme", "dark");
  }
});
