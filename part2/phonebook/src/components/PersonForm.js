
import React from "react"

const PersonForm = ({onSubmit, value, updateValue}) => {
    const handleName = (evt) => {
        const newPerson = {
            ...value,
            name: evt.target.value
        }
        updateValue(newPerson)
    }

    const handleNumber = (evt) => {
        const newPerson = {
            ...value,
            number: evt.target.value
        }
        updateValue(newPerson)
    }

    const invalidPerson= (newPerson) => {

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
    
    const handleAdd = (evt) => {
        evt.preventDefault()

        if (invalidPerson(value)) {
            return
        }
        onSubmit(value)
    }

    return (
        <form onSubmit={handleAdd}>
        <div>name: <input value={value.name} onChange={handleName}/></div>
        <div>number: <input value={value.number} onChange={handleNumber}/></div>
        <div><button type="submit">add</button></div>
      </form>
    )
}

export default PersonForm
