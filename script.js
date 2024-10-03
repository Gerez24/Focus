// Manejo de notas temporales en memoria
const notesList = document.getElementById('notesList');
const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNote');

let notes = []; // Aquí se almacenan temporalmente las notas

// Función para renderizar las notas en la lista
function renderNotes() {
    notesList.innerHTML = ''; // Limpiar la lista
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => {
            notes.splice(index, 1); // Eliminar nota de la lista
            renderNotes(); // Actualizar la lista en la página
        };
        li.appendChild(deleteButton);
        notesList.appendChild(li);
    });
}

// Añadir una nueva nota
addNoteButton.addEventListener('click', () => {
    const newNote = noteInput.value;
    if (newNote) {
        notes.push(newNote); // Añadir la nota al array temporal
        noteInput.value = ''; // Limpiar el campo de entrada
        renderNotes(); // Actualizar la lista
    }
});
