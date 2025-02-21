
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;
function playSound(sound) {
    if (currentAudio) {
        currentAudio.pause(); 
    }
    currentAudio = new Audio(sound);
    currentAudio.play();
}

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    });
});
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause(); 
        currentAudio.currentTime = 0; 
    }
});