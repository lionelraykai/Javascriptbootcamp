const notes = [{}, {
  title: 'my nxt trip',
  body: 'i would like to go spain'
}, {
   title: 'habbits to work on',
   body: 'exercise. eadtung a bit  better'
}, {
   title: 'office modification',
   body: 'get a new seat'
}]



const sortNotes =function (notes) {
   notes.sort(function (a, b) {
       if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1
       } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
          return 1
       } else {
          return 0
       }
   })
}

const findNote = function (notes, noteTitle) {
return notes.find(function (note, index) {
      return note.title.toLowerCase() === noteTitle.toLowerCase()
   })
}
// const findNote = function (notes, noteTitle) {
//    const index = notes.findIndex(function (note, index) {
//       return note.title.toLowerCase() === noteTitle.toLowerCase()
//    })
//    return notes[index]
// }

const findNotes = function (notes, query) {
   return notes.filter(function (note, index) {
      const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
      const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
      return isTitleMatch || isBodyMatch
   })
}
sortNotes(notes)
console.log(notes)
// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'habbits to work on'
// })

// console.log(index)