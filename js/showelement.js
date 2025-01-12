document.getElementById('play-button').addEventListener('click', function() {
    // Mostrar todos los elementos ocultos
    document.getElementById('background').style.display = 'block';
    document.getElementById('blur-background').style.display = 'block';
    document.querySelector('.container').style.display = 'block';
    document.getElementById('audio-controls').style.display = 'block';
    document.getElementById('drum-beat').style.display = 'block';

    // Ocultar el botón de inicio
    document.getElementById('play-button-container').style.display = 'none';
});