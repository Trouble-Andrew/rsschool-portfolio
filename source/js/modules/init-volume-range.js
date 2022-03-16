const initVolumeRange = () => {
  const rangeInputs = document.querySelectorAll('input[type="range"]');
  const muteButton = document.querySelector('.video-player__controls-volume');

  function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== 'range') {
      target = document.getElementById('range');
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    val > 0 ? muteButton.classList.remove('video-player__controls-volume--muted') :  muteButton.classList.add('video-player__controls-volume--muted');
  }

  function mute() {
    if (muteButton.classList.contains('video-player__controls-volume--muted')) {
      rangeInputs[0].value = 0.7;
      rangeInputs[0].style.backgroundSize = '70% 100%';
    } else {
      rangeInputs[0].value = 0;
      rangeInputs[0].style.backgroundSize = '0% 100%';
    }
  }

  rangeInputs.forEach((input) => {
    input.addEventListener('input', handleInputChange);
  });

  muteButton.addEventListener('click', mute);

};

export default initVolumeRange;
