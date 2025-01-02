const audio = document.getElementById('background-music');
const playButtonContainer = document.getElementById('play-button-container');
const container = document.querySelector('.container');
const audioControls = document.getElementById('audio-controls');

playButtonContainer.addEventListener('click', () => {
    audio.play();
    playButtonContainer.querySelector('#play-button').style.animation = 'fadeOut 0.5s forwards';
    setTimeout(() => {
        playButtonContainer.style.display = 'none';
        container.style.display = 'flex';
        audioControls.style.display = 'flex';
        document.getElementById('blur-background').style.display = 'none'; // Ocultar el fondo desenfocado
    }, 500);
});

window.onload = function () {
    document.querySelector('.loader').style.display = 'none';
    document.getElementById('play-button-container').style.display = 'flex';
};

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).padStart(4, '0');
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('date').textContent = `${day}/${month}/${year}`;
}

const drumImage = document.getElementById('drum-beat');

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