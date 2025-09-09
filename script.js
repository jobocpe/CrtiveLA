// Carousel Logic
const track = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener("click", () => {
  if (currentIndex < track.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Swipe Support for Mobile
let startX = 0;
let isSwiping = false;

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

track.addEventListener("touchmove", (e) => {
  if (!isSwiping) return;
  let moveX = e.touches[0].clientX;
  let diff = startX - moveX;

  if (Math.abs(diff) > 50) {
    if (diff > 0 && currentIndex < track.children.length - 1) {
      currentIndex++;
    } else if (diff < 0 && currentIndex > 0) {
      currentIndex--;
    }
    updateCarousel();
    isSwiping = false; // prevent multiple triggers
  }
});

track.addEventListener("touchend", () => {
  isSwiping = false;
});

// Chart.js Example
const ctx = document.getElementById('socialChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Twitter', 'Instagram', 'YouTube'],
    datasets: [{
      label: 'Followers',
      data: [1200, 3400, 5600], // replace with real numbers
      backgroundColor: ['#1da1f2', '#e1306c', '#ff0000']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    }
  }
});

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
