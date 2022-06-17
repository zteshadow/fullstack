
import React from 'react'

const CountryList = ({countries}) => {
    return (
        <ul>
        {countries.map(country => <div>{country.name}</div>)}
        </ul>
    )
}

export default CountryList
