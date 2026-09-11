let notes = [];
let trashNotes = [];

function init() {
  getFromLocalStorage();
  renderNotes();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let IndexNote = 0; IndexNote < notes.length; IndexNote++) {
    contentRef.innerHTML += getNoteTemplate(IndexNote);
  }
}

function getNoteTemplate(IndexNote) {
  return `    <p>+ ${notes[IndexNote]}<button onclick="deleteNote(${IndexNote})">X</button></p>`;
}

function getTrashNoteTemplate(IndexTrashNote) {
  return `    <p>+ ${trashNotes[IndexTrashNote]}<button onclick="deleteTrashNote(${IndexTrashNote})">X</button></p>`;
}

function addNote() {
  let noteInputRef = document.getElementById("note_input");
  let noteInput = noteInputRef.value;
  notes.push(noteInput);
  saveToLocalStorage();
  renderNotes();
  noteInputRef.value = "";
}

function deleteNote(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote);
  renderNotes();
  renderTrashNotes();
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";
  for (
    let IndexTrashNote = 0;
    IndexTrashNote < trashNotes.length;
    IndexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(IndexTrashNote);
  }
}

function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem("notes"));
  notes = myArr;
}
