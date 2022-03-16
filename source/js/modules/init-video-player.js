const initVideoPlayer = () => {
  const player = document.querySelector('.video-player');
  const playerButton = document.querySelector('.video-player__button');
  const playerControls = document.querySelector('.video-player__controls');
  const muteButton = document.querySelector('.video-player__controls-volume');
  const video = document.querySelector('.viewer');
  const progress = document.querySelector('.progress');
  const progressBar = document.querySelector('.progress__filled');
  const toggle = document.querySelector('.toggle');
  const volumeInput = document.querySelector('[data-volume]');

  function togglePlay() {
    video.paused ? video.play() : video.pause();
    playerControls.classList.add('is-active');
  }

  function updateButton() {
    video.paused ? toggle.classList.remove('toggle--playing') : toggle.classList.add('toggle--playing');
    video.paused ? player.classList.remove('video-player--playing') : player.classList.add('video-player--playing');
  }

  function handleRangeUpdate() {
    video.volume = this.value;
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
  }

  function scrub(event) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  function changeProgress(event) {
    // console.log(event.clientX);
    // console.log(event.offsetX);
    const percent = (event.offsetX / progress.offsetWidth * 100).toFixed(2);
    // console.log(percent);
    progressBar.style.width = `${percent}%`;
  }

  function mute() {
    if (muteButton.classList.contains('video-player__controls-volume--muted')) {
      video.volume = 0.7;
      muteButton.classList.remove('video-player__controls-volume--muted');
    } else {
      video.volume = 0;
      muteButton.classList.add('video-player__controls-volume--muted');
    }
  }

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', handleProgress);
  toggle.addEventListener('click', togglePlay);
  playerButton.addEventListener('click', togglePlay);
  muteButton.addEventListener('click', mute);
  volumeInput.addEventListener('change', handleRangeUpdate);
  volumeInput.addEventListener('mousemove', handleRangeUpdate);

  let mousedown = false;
  let videoPaused = false;
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', (event) => mousedown && changeProgress(event));
  progress.addEventListener('touchmove', (event) => mousedown && changeProgress(event));


  progress.addEventListener('mousedown', () => {
    mousedown = true;
    videoPaused = video.paused;
    video.pause();
  });

  progress.addEventListener('touchstart', () => {
    mousedown = true;
    videoPaused = video.paused;
    video.pause();
  });

  progress.addEventListener('mouseup', () => {
    mousedown = false;

    if (!videoPaused) {
      video.play();
    }
  });

  progress.addEventListener('touchend', () => {
    mousedown = false;

    if (!videoPaused) {
      video.play();
    }
  });

  progress.addEventListener('mouseleave', () => {
    mousedown = false;
  });
};

export default initVideoPlayer;
