import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from "./components/Note"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
  }, [])
  
  console.log('render', notes.length, 'notes')

  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)

  const handleNoteChange = (evt) => {
    // console.log(evt.target.value)
    setNewNote(evt.target.value)
  }
  const addNote = (evt) => {
    evt.preventDefault()
    const newObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5
    }
    noteService
      .create(newObject)
      .then(note => {
        console.log(note)
        setNotes(notes.concat(note))
        setNewNote('')    
      })
    //console.log("button clicked", evt.target)
  }

  const toggleImportanceOf = (id) => {
    console.log('toggle ', id, 'importance')
    const note = notes.find(n => n.id == id)
    const changedNote = {...note, important: !note.important}
    noteService
      .update(id, changedNote)
      .then(updatedNote => {
        setNotes(notes.map(note => note.id !== id ? note : updatedNote))
      })
      .catch(error => {
        alert(
          `the note ${note.content} was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {noteToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App