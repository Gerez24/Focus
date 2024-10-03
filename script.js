// Temporizador Pomodoro
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let pomodoroTime = 1500; // 25 minutos
let countdown;
let isRunning = false;

startBtn.addEventListener('click', function() {
    if (!isRunning) {
        countdown = setInterval(() => {
            if (pomodoroTime > 0) {
                pomodoroTime--;
                let minutes = Math.floor(pomodoroTime / 60);
                let seconds = pomodoroTime % 60;
                timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            } else {
                clearInterval(countdown);
            }
        }, 1000);
        isRunning = true;
    }
});

resetBtn.addEventListener('click', function() {
    clearInterval(countdown);
    pomodoroTime = 1500;
    timerDisplay.textContent = '25:00';
    isRunning = false;
});

// Notas (no persistente, no guarda en base de datos)
let notesArea = document.getElementById('notesArea');

// Cambio de fondo
const backgrounds = [
    'assets/images/bg1.jpg',
    'assets/images/bg2.jpg',
    'assets/images/bg3.jpg'
];
let currentBgIndex = 0;
document.getElementById('changeBackgroundBtn').addEventListener('click', function() {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentBgIndex]})`;
});

// Reproductor de música
const musicFiles = [
    'assets/music/song1.mp3',
    'assets/music/song2.mp3',
    'assets/music/song3.mp3'
];
let currentTrack = 0;
let audio = new Audio(musicFiles[currentTrack]);

document.getElementById('playBtn').addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentTrack = (currentTrack + 1) % musicFiles.length;
    audio.src = musicFiles[currentTrack];
    audio.play();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    currentTrack = (currentTrack - 1 + musicFiles.length) % musicFiles.length;
    audio.src = musicFiles[currentTrack];
    audio.play();
});
