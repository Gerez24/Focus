// Manejo de notas temporales
const notesList = document.getElementById('notesList');
const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNote');

let notes = []; // Almacenamiento temporal de notas en memoria

// Función para renderizar las notas en la lista
function renderNotes() {
    notesList.innerHTML = ''; // Limpiar la lista
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => {
            notes.splice(index, 1); // Eliminar nota del array
            renderNotes(); // Actualizar la lista
        };
        li.appendChild(deleteButton);
        notesList.appendChild(li);
    });
}

// Añadir nueva nota
addNoteButton.addEventListener('click', () => {
    const newNote = noteInput.value;
    if (newNote) {
        notes.push(newNote); // Añadir la nota al array
        noteInput.value = ''; // Limpiar el input
        renderNotes(); // Actualizar la lista de notas
    }
});

// Manejo del cambio de fondo
function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
}

// Reproductor de música
const audioPlayer = document.getElementById('audioPlayer');
const songs = ['assets/music/song1.mp3', 'assets/music/song2.mp3']; // Lista de canciones
let currentSongIndex = 0;

document.getElementById('nextSong').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
});

audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
});
