const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Create audio elements and append them to the DOM
sounds.forEach(sound => {
    const audio = document.createElement('audio');
    audio.id = sound;
    audio.src = `sounds/${sound}.mp3`;
    document.body.appendChild(audio);
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        const audio = document.getElementById(sound);
        audio.currentTime = 0; // Rewind to the start
        audio.play();
    });
});

document.querySelector('.stop').addEventListener('click', () => {
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
});

