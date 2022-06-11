
import { useState } from 'react'
import Person from "./components/Person"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

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
      <form onSubmit={handleAdd}>
        <div>name: <input value={newName} onChange={handleNameInput}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberInput}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App