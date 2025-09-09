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
    plugins: {
      legend: { display: false }
    }
  }
});
