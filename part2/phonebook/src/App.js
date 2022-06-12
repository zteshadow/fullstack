
import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  const handleAdd = (evt) => {
    evt.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      return
    }

    if (newName.length === 0) {
      alert(`name is necessary`)
      return
    }

    if (newNumber.length === 0) {
      alert(`number is necessary`)
      return
    }

    setPersons(persons.concat({name: newName, number: newNumber}))
    setNewName("")
    setNewNumber("")

    console.log(`handle add: ${newName}, ${newNumber}`)
  }

  const handleNameInput = (evt) => {
    setNewName(evt.target.value)
  }

  const handleNumberInput = (evt) => {
    setNewNumber(evt.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={(evt) => setFilter(evt.target.value)} />
      <h3>Add a new</h3>
      <form onSubmit={handleAdd}>
        <div>name: <input value={newName} onChange={handleNameInput}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberInput}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h3>Numbers</h3>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App