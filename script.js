// Category filter functionality
const filters = document.querySelectorAll('.category-filters li');
const videoCards = document.querySelectorAll('.video-card');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    const category = filter.getAttribute('data-category');
    videoCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update active filter styling
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
  });
});
