const persons = [{
  name: "sujan Pokharel"
}]

// persons.push("samikshya")
// persons.push("abb")
// persons.push({
//   hello: "what is it"
// })

// console.log(persons)
const leen = ["1", 2, 3].length
console.log(leen)


const name = {
  name: "sujan Pokharel"
}

name.filter( )

// const output = persons.filter((persons.name === name.name))
// console.log(output)

// const compare = () => {
//   if (persons[0].name === name.name) {
//     alert(`name already exiits`)

//   }
//   return
// }
// (compare())

// import React, { useState } from 'react'
// import Note from './components/Note'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState(
//     'a new note...'
//   ) 

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//     }
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }


//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>

//       <form onSubmit={addNote}>
//          <input value={newNote}   onChange={handleNoteChange}/>
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }

// export default App 