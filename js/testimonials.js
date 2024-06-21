const slider = document.querySelector('.testimonial-slider');
const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds