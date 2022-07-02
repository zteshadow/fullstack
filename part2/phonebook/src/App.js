
import { useEffect, useState } from 'react'
import persionService from './services/PersonService'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  
  // state
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({name: "", number: ""})
  const [filter, setFilter] = useState("")
  const [stateMessage, setStateMessage] = useState(null)

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
    const exist = persons.find(person => person.name === newValue.name)
    if (exist) {
      if (exist.number === newValue.number) { /// just warn
        alert(`${newValue.name} is already added to phonebook`)
        setNewPerson({name: "", number: ""})
      } else {
        if (window.confirm(`${newValue.name} is already added to phonebook, replace the old number with a new one?`)) {
          persionService
            .update(exist.id, newValue)
            .then(returnedPerson => {
              setPersons(persons.map(p => p.id === returnedPerson.id ? returnedPerson : p))
              setStateMessage(`Updated number for ${returnedPerson.name}`)
              setTimeout(() => {
                setStateMessage(null)
              }, 5000)      
            })
        }
      }
      return true
    }

    persionService
      .create(newValue)
      .then(returnedValue => {
        setPersons(persons.concat(returnedValue))
        setNewPerson({name: "", number: ""})
        console.log(`handle returned: ${returnedValue.name}, ${returnedValue.number}`)
        setStateMessage(`Added ${returnedValue.name}`)
        setTimeout(() => {
          setStateMessage(null)
        }, 5000)
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
      <Notification message={stateMessage} />
      <Filter value={filter} onChange={(evt) => setFilter(evt.target.value)} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={handleNewPerson} value={newPerson} updateValue={setNewPerson} />
      <h3>Numbers</h3>
      <Persons persons={shownPerson} deleteHandler={handleDelete}/>
    </div>
  )
}

export default App