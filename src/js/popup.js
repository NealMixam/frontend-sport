const initPopup = function () {
  const openPopupBtns = document.querySelectorAll('.openPopupBtn');
  const popup = document.querySelector('.popup');
  const closeBtn = document.querySelector('.close-btn');

  openPopupBtns.forEach((openPopupBtn) => openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  }));

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

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
};

initPopup();
