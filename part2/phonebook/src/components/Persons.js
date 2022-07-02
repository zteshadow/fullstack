
import React from 'react'

const Persons = ({persons, deleteHandler}) => {

  const deleteConfirmation = (person) => {
    console.log(`delete ${person.id}, ${person.name}`)
    
    if (window.confirm(`Delete ${person.name} ?`)) {
      console.log(`+++ confirmed ${person.name}, ${person.id}`)
      deleteHandler(person)
    }
  }

    return (
        <ul>
        {persons.map(person =>
          <div key={person.name}> {person.name} {person.number} <button onClick={() => deleteConfirmation(person)} >delete</button> </div>
        )}
      </ul>
    )
}

export default Persons