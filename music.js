const audioPlayer = document.getElementById('audioPlayer');
const songs = ['music/song1.mp3', 'music/song2.mp3']; // Lista de canciones
let currentSongIndex = 0;

// Función para cambiar a la siguiente canción
document.getElementById('nextSong').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Cicla entre canciones
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
});

// Reproducción automática de la siguiente canción cuando la actual termine
audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
});
