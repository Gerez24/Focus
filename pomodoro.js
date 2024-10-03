let timer;
let time = 1500; // 25 minutos en segundos

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            time--;
            document.getElementById('timer').textContent = formatTime(time);
            if (time <= 0) {
                clearInterval(timer);
                alert('Pomodoro completado!');
                resetTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    time = 1500;
    document.getElementById('timer').textContent = '25:00';
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
