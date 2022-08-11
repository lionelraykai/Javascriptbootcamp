'use strict'


// read existing notes from localstorage 
const getSaveNotes = () => {
    const notesJSON = localStorage.getItem('notes')

try{
    return notesJSON ? JSON.parse(notesJSON) : []
}catch (e) {
   return []
}

     

    // if (notesJSON !== null) {
    //     return JSON.parse(notesJSON)
    // }else {
    //     return []
    // }
}
// save the notes to localstorage
const saveNote = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// remove a note form the list
    const removeNote = (id) => {
        const noteIndex = notes.findIndex((note) => note.id === id)
     if (noteIndex > -1){
         notes.splice(noteIndex, 1)
     }
    }

// genrate th dom structure for a note
const genrateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const  button = document.createElement('p')
     
if (note.title.length > 0) {
    textEl.textContent = note.title
}else {
    textEl.textContent = 'Unnamed note'
}
textEl.classList.add('list-item__title')
noteEl.appendChild(textEl)

statusEl.textContent = genrateLastEdited(note.updateAt)
statusEl.classList.add('list-item__subtitle')
noteEl.appendChild(statusEl)
    //  setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNote(note)
        renderNotes(note, filters)
    })


    // setup the note title text
if (note.title.length > 0) {
    textEl.textContent = note.title
} else {
    textEl.textContent = 'Unnamed note'
}
textEl.setAttribute('href', '/edit.html')
noteEl.appendChild(textEl)

return noteEl
}


// render application notes
const renderNotes = (notes, filters) => {
    const noteEl = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
    const filtereNotes = notes.filter((notes) => notes.title.toLowerCase().includes(filters.sortBy))
    
    noteEl.innerHTML = ''
     
    if(filtereNotes.length > 0) {
        filtereNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            noteEl.appendChild(noteEl)
        })
    }else {
        const emptyMassage = document.createElement('p')
        emptyMassage.textContent = 'No notes to show'
        emptyMassage.classList.add('empty massage')
        noteEl.appendChild(emptyMassage)
    }
}