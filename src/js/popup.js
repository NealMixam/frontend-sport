// Get elements
const openPopupBtns = document.querySelectorAll('.openPopupBtn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

// Open popup
openPopupBtns.forEach((openPopupBtn) =>
  openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  })
);

// Close popup when clicking the close button
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside of the popup content
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    popup.style.display = 'none';
  }
});
