
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

    return (
        <form onSubmit={onSubmit}>
        <div>name: <input value={value.name} onChange={handleName}/></div>
        <div>number: <input value={value.number} onChange={handleNumber}/></div>
        <div><button type="submit">add</button></div>
      </form>
    )
}

export default PersonForm
