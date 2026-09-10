let notes = [];

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let IndexNote = 0; IndexNote < notes.length; IndexNote++) {
    const note = notes[IndexNote];
    contentRef.innerHTML += getNoteTemplate(note);
  }
}

function getNoteTemplate(note) {
  return `    <p>+ ${note}</p>`;
}

function addNote() {
  let noteInputRef = document.getElementById("note_input");
  let noteInput = noteInputRef.value;
  notes.push(noteInput);
  renderNotes();
  noteInputRef.value = "";
}

function deleteNote(indexNote) {
  notes.splice(indexNote, 1);
}
