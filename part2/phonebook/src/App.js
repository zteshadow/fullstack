
import { useEffect, useState } from 'react'
import persionService from './services/PersonService'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  
  // state
  const [persons, setPersons] = useState([])

  const [newPerson, setNewPerson] = useState({name: "", number: ""})
  const [filter, setFilter] = useState("")

  // effect
  useEffect(() => {
    console.log('getting data...')
    persionService
      .getAll()
      .then(allPersons => {
        console.log('data is reasdy')
        setPersons(allPersons)
        })
  }, [])

  //console.log('persons: ', persons.length)
  
  // data
  const shownPerson = persons.filter(person => {
    const lowerName = person.name.toLowerCase()
    const lowerFilter = filter.toLowerCase()
    //console.log(lowerName, lowerFilter)
    return lowerName.includes(lowerFilter)
  })

  // function
  const handleNewPerson = (newValue) => {
    if (persons.find(person => person.name === newValue.name)) {
      alert(`${newValue.name} is already added to phonebook`)
      setNewPerson({name: "", number: ""})
      return true
    }

    persionService
      .create(newValue)
      .then(returnedValue => {
        setPersons(persons.concat(returnedValue))
        setNewPerson({name: "", number: ""})
        console.log(`handle returned: ${returnedValue.name}, ${returnedValue.number}`)
      }
    )
  }

  const handleDelete = (person) => {
    console.log(`delete ${person.name} ${person.id}`)
    persionService
      .deletePerson(person)
      .then(deletedPerson => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
  }
  // body
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={(evt) => setFilter(evt.target.value)} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={handleNewPerson} value={newPerson} updateValue={setNewPerson} />
      <h3>Numbers</h3>
      <Persons persons={shownPerson} deleteHandler={handleDelete}/>
    </div>
  )
}

export default App