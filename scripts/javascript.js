// GLOBALES
let notes = [];
let trashNotes = [];

// BODY ON LOAD
function init() {
  getFromLocalStorage();
  renderNotes();
  renderTrashNotes();
}

// FUNKTIONEN
function addNote() {
  let noteInputRef = document.getElementById("note_input");
  let noteInput = noteInputRef.value.trim();
  if (noteInput === "") return;
  notes.push(noteInput);
  saveAll();
  renderNotes();
  noteInputRef.value = "";
}

function deleteNote(indexNote) {
  let deletedNote = notes.splice(indexNote, 1);
  trashNotes.push(deletedNote[0]);
  saveAll();
  renderNotes();
  renderTrashNotes();
}

function deleteTrashNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  saveAll();
  renderTrashNotes();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";
  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

//TEMPLATES
function getNoteTemplate(indexNote) {
  return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteTrashNote(${indexTrashNote})">X</button></p>`;
}

//LOCAL STORAGE
function saveAll() {
  saveTo("notes", notes);
  saveTo("trashNotes", trashNotes);
}

function saveTo(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage() {
  notes = getFrom("notes");
  trashNotes = getFrom("trashNotes");
}

function getFrom(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
