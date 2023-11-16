let notes = [];

function saveNote() {
  const title = document.getElementById('note-title').value;
  const text = document.getElementById('note-text').value;

  if (title.trim() !== '' && text.trim() !== '') {
    const newNote = { title, text };
    notes.push(newNote);
    displayNotes();
    clearForm();
  } else {
    alert('Please enter both title and text for the note.');
  }
}

function displayNotes() {
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';

  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = note.title;
    li.addEventListener('click', () => displaySelected(index));
    notesList.appendChild(li);
  });
}

function displaySelected(index) {
  const selectedNote = notes[index];
  document.getElementById('note-title').value = selectedNote.title;
  document.getElementById('note-text').value = selectedNote.text;
  document.getElementById('new-note-btn').style.display = 'inline-block';
}

function createNewNote() {
  document.getElementById('note-title').value = '';
  document.getElementById('note-text').value = '';
  document.getElementById('new-note-btn').style.display = 'none';
}

function clearForm() {
  document.getElementById('note-title').value = '';
  document.getElementById('note-text').value = '';
}

// Initial call to display any existing notes
displayNotes();
