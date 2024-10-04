let currentSong = 0;
let songs = ['assets/music/song1.mp3', 'assets/music/song2.mp3'];
let currentBg = 0;
let backgrounds = ['assets/images/bg1.jpg', 'assets/images/bg2.gif'];

document.getElementById('next-song').addEventListener('click', () => {
    currentSong = (currentSong + 1) % songs.length;
    document.getElementById('audio-player').src = songs[currentSong];
    document.getElementById('audio-player').play();
});

document.getElementById('prev-song').addEventListener('click', () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    document.getElementById('audio-player').src = songs[currentSong];
    document.getElementById('audio-player').play();
});

document.getElementById('volume-control').addEventListener('input', (e) => {
    document.getElementById('audio-player').volume = e.target.value / 100;
});

document.getElementById('next-bg').addEventListener('click', () => {
    currentBg = (currentBg + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentBg]})`;
});

document.getElementById('prev-bg').addEventListener('click', () => {
    currentBg = (currentBg - 1 + backgrounds.length) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentBg]})`;
});

// Hacer ventanas movibles
document.querySelectorAll('.draggable').forEach(window => {
    window.addEventListener('mousedown', (e) => {
        let offsetX = e.clientX - window.offsetLeft;
        let offsetY = e.clientY - window.offsetTop;

        function moveAt(e) {
            window.style.left = `${e.clientX - offsetX}px`;
            window.style.top = `${e.clientY - offsetY}px`;
        }

        document.addEventListener('mousemove', moveAt);

        window.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveAt);
        });
    });
});
