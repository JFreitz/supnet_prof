let currentIndex = 0;

function moveCarousel(step) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex = (currentIndex + step + totalItems) % totalItems;
  const offset = -currentIndex * 100;

  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}