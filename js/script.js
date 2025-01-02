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
    
    // Formatear la hora
    const timeFormatter = new Intl.DateTimeFormat('es', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const formattedTime = timeFormatter.format(now);
    
    // Formatear la fecha
    const dateFormatter = new Intl.DateTimeFormat('es', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const formattedDate = dateFormatter.format(now);
    
    // Actualizar el contenido en el DOM
    document.getElementById('hours').textContent = formattedTime.split(':')[0];
    document.getElementById('minutes').textContent = formattedTime.split(':')[1];
    document.getElementById('date').textContent = formattedDate;
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