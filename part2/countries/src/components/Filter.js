
import React from "react"

const Filter = ({value, onChange}) => {
    console.log(value, onChange)
    
    return (
        <div>find countries <input value={value} onChange={onChange}/></div>
    )
}

export default Filter