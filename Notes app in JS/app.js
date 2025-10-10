let notes = [];
let editingNoteId = null;

function saveNote(event) {
    event.preventDefault();
    const Tinputv = document.getElementById("noteTitle").value;
    const Cinputv = document.getElementById("noteContent").value;
    
    if(editingNoteId){
        const index = notes.findIndex(note => note.id === editingNoteId);
        if(index !== -1){
            notes[index].title = Tinputv;
            notes[index].content = Cinputv;
        }
    }
    else {
        notes.unshift(
        {
        title: Tinputv,
        content : Cinputv,
        id : createId()
    }
    );
    }

    saveNotes();
    closeNoteDialog();
    displaynotes();
}

function saveNotes() {
    localStorage.setItem('NOTE', JSON.stringify(notes));
}

function createId() {
    return Date.now().toString();
}

function openNoteDialog(noteId = null) {
    const dialog = document.getElementById("noteDialog");
    const Tinput = document.getElementById("noteTitle");
    const Cinput = document.getElementById("noteContent");
    
    if(noteId){
        // edit mode
        const noteToEdit = notes.find(note => note.id === noteId);
        console.log('your are on editing mode')
        editingNoteId = noteId;
        document.getElementById("dialogTitle").textContent = 'Edit Note';
        Tinput.value = noteToEdit.title;
        Cinput.value = noteToEdit.content;
    }
    else {
        // creation mode
        editingNoteId = null;
        console.log('your are on creation mode')
        document.getElementById("dialogTitle").textContent = 'Add new note';
        Tinput.value = "";
        Cinput.value = "";
    }

    dialog.showModal();
    Tinput.focus();
 }

function closeNoteDialog() {
    document.getElementById("noteDialog").close();
    
 }

function displaynotes() {
    const noteContainer = document.getElementById("notesContainer");

    if(notes.length === 0){
        noteContainer.innerHTML = `
        <div class="empty-state">
            <h2>No notes yet</h2>
            <p>Create  your first note to get started</p>
            <button class="add-note-btn" onclick="openNoteDialog()">Add Your First Note</button>
        </div>
        ` 
    }
    else {
        noteContainer.innerHTML = notes.map(note =>`
            <div class="note-card">
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <div class="note-actions">
    <button class="edit-btn" onclick="openNoteDialog('${note.id}')" title="Edit Note">
       <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#191b23">
            <path d="M184-184v-83.77l497.23-498.77q5.15-5.48 11.07-7.47 5.93-1.99 11.99-1.99 6.06 0 11.62 1.54 5.55 1.54 11.94 7.15l38.69 37.93q5.61 6.38 7.54 12 1.92 5.63 1.92 12.25 0 6.13-2.24 12.06-2.24 5.92-7.22 11.07L267.77-184H184Zm505.15-466.46L744-704.54 704.54-744l-54.08 54.85 38.69 38.69Z"/>
        </svg>
    </button>
    <button class="delete-btn" onclick="deleteNote('${note.id}')" title="Delete Note">
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#191b23">
            <path d="M291-267.69 267.69-291l189-189-189-189L291-692.31l189 189 189-189L692.31-669l-189 189 189 189L669-267.69l-189-189-189 189Z"/>
        </svg>
    </button>
</div></div>`).join('')
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'Dark' : 'Light');
    document.getElementById('themeToggleBtn'). textContent = isDark ? '☀️' : '🌑';
}

function applyStoredTheme() {
    if(localStorage.getItem('theme') === 'Dark'){
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggleBtn'). textContent = '☀️';

    }
}

function deleteNote(noteId) {
    notes = notes.filter(note => note.id !== noteId);
    saveNotes();
    displaynotes();
}

document.addEventListener("DOMContentLoaded", () => {

    const saved = localStorage.getItem('NOTE');
    notes = saved ? JSON.parse(saved) : [];
    applyStoredTheme()
    displaynotes(); 

    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    document.getElementById('noteForm').addEventListener('submit', saveNote);

    document.getElementById('noteDialog').addEventListener('click', function(event)  {
        if(event.target === this) {
            closeNoteDialog();
        }
    })
});