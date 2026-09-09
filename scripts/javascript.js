let notes = ["banana", "rasen mähen"];

function renderNotes() {
  let contentRef = document.getElementById("content");

  for (let IndexNote = 0; (IndexNote += notes.length); IndexNote++) {
    const note = notes[IndexNote];
    contentRef.innerHTML = " " + note;
  }
}

// notizen hinzufügen
// notizen löschen
// notizen archivieren
