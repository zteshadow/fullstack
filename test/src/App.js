import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from "./components/Note"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  
  console.log('render', notes.length, 'notes')

  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)

  const handleNoteChange = (evt) => {
    console.log(evt.target.value)
    setNewNote(evt.target.value)
  }
  const addNote = (evt) => {
    evt.preventDefault()
    const newObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString,
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(newObject))
    setNewNote('')
    //console.log("button clicked", evt.target)
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
          <Note key={note.id} note={note} />
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