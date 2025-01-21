function animateDrum() {
    if (!audio.paused) {
        drumImage.style.transform = 'scale(1.1)';
        setTimeout(() => {
            drumImage.style.transform = '';
        }, 192);
    } else {
        drumImage.style.transform = '';
    }
    requestAnimationFrame(animateDrum);
}