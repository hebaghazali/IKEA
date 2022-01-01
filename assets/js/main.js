var carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  var leftChevron = carousel.children[0];
  var carouselBody = carousel.children[1];
  var rightChevron = carousel.children[2];

  rightChevron.addEventListener('click', () => {
    carouselBody.scrollBy({ left: 1000, behavior: 'smooth' });
  });

  leftChevron.addEventListener('click', () => {
    carouselBody.scrollBy({ left: -1000, behavior: 'smooth' });
  });
});
