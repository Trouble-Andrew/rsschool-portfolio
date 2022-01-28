const initPortfolio = () => {
  const buttonsWrapper = document.querySelector('[data-gallery-controls]');
  const portfolioImages = document.querySelectorAll('.portfolio__gallery-item img');

  function changeImage(event) {
    if (event.target.classList.contains('portfolio__button')) {
      portfolioImages.forEach((img, index) => {
        img.src = `./img/content/${event.target.dataset.season}-${index + 1}.jpg`;
      });
    }
  }

  buttonsWrapper.addEventListener('click', changeImage);
};

export default initPortfolio;
