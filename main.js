const searchMovies = document.getElementById("form");
const searchInput = document.getElementById("searchInput");
const movie = new MovieApi();

searchMovies.addEventListener("submit", getMovieByName);
document.addEventListener("DOMContentLoaded", () => movie.getPopulerMovie());

function getMovieByName(e) {
  console.log("oldu");
  const searchI = searchInput.value.trim();
  movie.getSearchMovie(searchI);
  e.preventDefault();
}

// Dark/Light mode toggle logic
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  let isDark = document.documentElement.classList.contains("dark");

  // Set initial icon
  darkModeToggle.textContent = isDark ? "🌙" : "☀️";

  darkModeToggle.addEventListener("click", function () {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark", isDark);
    body.classList.toggle("bg-primary", isDark);
    body.classList.toggle("bg-white", !isDark);
    body.classList.toggle("text-white", isDark);
    body.classList.toggle("text-gray-900", !isDark);
    darkModeToggle.textContent = isDark ? "🌙" : "☀️";
    // Optionally, persist mode in localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    body.classList.toggle("bg-primary", isDark);
    body.classList.toggle("bg-white", !isDark);
    body.classList.toggle("text-white", isDark);
    body.classList.toggle("text-gray-900", !isDark);
    darkModeToggle.textContent = isDark ? "🌙" : "☀️";
  }
});
