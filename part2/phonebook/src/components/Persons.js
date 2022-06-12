
import React from 'react'

const Persons = ({persons}) => {
    return (
        <ul>
        {persons.map(person =>
          <div key={person.name}> {person.name} {person.number} </div>
        )}
      </ul>
    )
}

export default Persons