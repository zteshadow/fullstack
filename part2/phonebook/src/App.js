
import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newPerson, setNewPerson] = useState({name: "", number: ""})
  const [filter, setFilter] = useState("")

  const invalidPerson= (newPerson) => {
    if (persons.find(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`)
      setNewPerson({name: "", number: ""})
      return true
    }

    if (newPerson.name.length === 0) {
      alert(`name is necessary`)
      return true
    }

    if (newPerson.number.length === 0) {
      alert(`number is necessary`)
      return true
    }

    return false
  }

  const handleNewPerson = (evt) => {
    evt.preventDefault()

    if (invalidPerson(newPerson)) {
      return
    }

    setPersons(persons.concat({name: newPerson.name, number: newPerson.number}))
    setNewPerson({name: "", number: ""})

    console.log(`handle add: ${newPerson.name}, ${newPerson.number}`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={(evt) => setFilter(evt.target.value)} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={handleNewPerson} value={newPerson} updateValue={setNewPerson} />
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