const SEASONS = ['winter', 'spring', 'summer', 'autumn'];

const preloadImages = () => {
  SEASONS.forEach((season) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./img/content/${season}-${i}.jpg`;
    }
  });
};

export default preloadImages;
