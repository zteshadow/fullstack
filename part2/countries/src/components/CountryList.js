
import React from 'react'

const CountryList = ({countries}) => {
    return (
        <ul>
        {countries.map(country =>
            <div key={country.name.common}> {country.name.common} </div>
        )}
        </ul>
    )
}

export default CountryList
