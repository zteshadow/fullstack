
import { useState } from 'react'
import Persons from './components/Persons'
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
  const shownPerson = persons.filter(person => {
    const lowerName = person.name.toLowerCase()
    const lowerFilter = filter.toLowerCase()
    console.log(lowerName, lowerFilter)
    
    return lowerName.includes(lowerFilter)
  })

  const handleNewPerson = (newValue) => {
    if (persons.find(person => person.name === newValue.name)) {
      alert(`${newValue.name} is already added to phonebook`)
      setNewPerson({name: "", number: ""})
      return true
    }

    setPersons(persons.concat({name: newValue.name, number: newValue.number}))
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
      <Persons persons={shownPerson} />
    </div>
  )
}

export default App