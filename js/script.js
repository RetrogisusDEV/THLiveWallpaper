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
    playButtonContainer.querySelector('#play-button').style.animation = 'fadeOut 0.5s forwards';
    setTimeout(() => {
        playButtonContainer.style.display = 'none';
        container.style.display = 'flex';
        audioControls.style.display = 'flex';
        blurBackground.style.display = 'none';
    }, 500);
});

window.onload = function () {
    loader.style.display = 'none';
    playButtonContainer.style.display = 'flex';
};

function updateTime() {
    const now = new Date();
    const timeFormatter = new Intl.DateTimeFormat('es', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const formattedTime = timeFormatter.format(now);
    const dateFormatter = new Intl.DateTimeFormat('es', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const formattedDate = dateFormatter.format(now);
    hoursElement.textContent = formattedTime.split(':')[0];
    minutesElement.textContent = formattedTime.split(':')[1];
    dateElement.textContent = formattedDate;
}

audio.addEventListener('playing', () => {
    drumImage.style.display = 'block';
    animateDrum();
});

function animateDrum() {
    if (!audio.paused) {
        drumImage.style.transform = 'scale(1.1)';
        setTimeout(() => {
            drumImage.style.transform = 'scale(1)';
        }, 192);
    }
    requestAnimationFrame(animateDrum);
}

setInterval(updateTime, 1000);
updateTime();