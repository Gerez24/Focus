// Pomodoro Timer
let timer;
let isRunning = false;
let timeLeft = 1500; // 25 minutes in seconds

const startBtn = document.getElementById('start-pomodoro');
const resetBtn = document.getElementById('reset-pomodoro');
const timerDisplay = document.getElementById('timer');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft === 0) {
                clearInterval(timer);
                isRunning = false;
            }
        }, 1000);
        isRunning = true;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    timeLeft = 1500;
    updateTimerDisplay();
    isRunning = false;
});

// Change Background
const backgrounds = [
    'linear-gradient(to bottom right, #89f7fe, #66a6ff)',
    'linear-gradient(to bottom right, #ff9a9e, #fad0c4)',
    'linear-gradient(to bottom right, #a18cd1, #fbc2eb)',
    'linear-gradient(to bottom right, #fddb92, #d1fdff)'
];

const changeBackgroundBtn = document.querySelector('.change-background');

changeBackgroundBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.background = backgrounds[randomIndex];
});

// Music Player
const playPauseBtn = document.getElementById('play-pause-song');
const nextBtn = document.getElementById('next-song');
const prevBtn = document.getElementById('prev-song');

let currentTrackIndex = 0;
let isPlaying = false;

const tracks = [
    './assets/music/track1.mp3',
    './assets/music/track2.mp3',
    './assets/music/track3.mp3'
];

const audio = new Audio(tracks[currentTrackIndex]);

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});

nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audio.src = tracks[currentTrackIndex];
    audio.play();
    isPlaying = true;
});

prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrackIndex];
    audio.play();
    isPlaying = true;
});
