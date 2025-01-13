const audio = document.getElementById('background-music');
const playButtonContainer = document.getElementById('play-button-container');
const container = document.querySelector('.container');
const audioControls = document.getElementById('audio-controls');
const loader = document.querySelector('.loader');
const blurBackground = document.getElementById('blur-background');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dateElement = document.getElementById('date');
const drumImage = document.getElementById('drum-beat');

playButtonContainer.addEventListener('click', () => {
  audio.play();
  const playButton = playButtonContainer.querySelector('#play-button');
  playButton.style.animation = 'fadeOut 0.5s forwards';
  setTimeout(() => {
    playButtonContainer.style.display = 'none';
    container.style.display = 'flex';
    audioControls.style.display = 'flex';
    blurBackground.style.display = 'none';
    document.getElementById('background').style.display = 'block';
    document.getElementById('drum-beat').style.display = 'flex';
    document.getElementById('changelog').style.display = 'none';
  }, 500);
});

window.addEventListener('load', () => {
  loader.style.display = 'none';
  playButtonContainer.style.display = 'flex';
});

audio.addEventListener('playing', () => {
  drumImage.style.display = 'block';
  animateDrum();
});