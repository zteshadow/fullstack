
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAdd = (evt) => {
    evt.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      return
    }

    setPersons(persons.concat({"name": newName}))
    setNewName("")
    console.log(`handle add: ${newName}`)
  }

  const handleNameInput = (evt) => {
    setNewName(evt.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAdd}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(persion =>
          <div key={persion.name}>{persion.name}</div>
        )}
      </ul>
    </div>
  )
}

export default App