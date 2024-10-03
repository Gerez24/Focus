<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Productividad</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Mi Página de Productividad</h1>
    </header>

    <div class="pomodoro">
        <h2>Pomodoro</h2>
        <div id="timer">25:00</div>
        <button id="start">Start</button>
        <button id="pause">Pause</button>
        <button id="reset">Reset</button>
    </div>

    <div class="music-player">
        <h2>Reproductor de Música</h2>
        <audio id="audioPlayer" controls>
            <source src="assets/music/song1.mp3" type="audio/mp3">
        </audio>
        <button id="nextSong">Siguiente Canción</button>
    </div>

    <div class="notes">
        <h2>Notas (Temporales)</h2>
        <input type="text" id="noteInput" placeholder="Escribe tu nota aquí">
        <button id="addNote">Añadir Nota</button>
        <ul id="notesList"></ul>
    </div>

    <div class="backgrounds">
        <h2>Cambiar Fondo</h2>
        <button onclick="changeBackground('assets/images/background1.jpg')">Fondo 1</button>
        <button onclick="changeBackground('assets/images/background2.jpg')">Fondo 2</button>
    </div>

    <script src="script.js"></script>
    <script src="pomodoro.js"></script>
</body>
</html>
