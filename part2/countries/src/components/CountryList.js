
import React from 'react'

const CountryList = ({countries, filterEnabled}) => {
    console.log('filter: ', filterEnabled)
    
    if (filterEnabled && countries.length > 10) {
        return (<div>Too many matches, spedify another filter</div>)
    } 
    
    return (
        <ul>
        {countries.map(country =>
            <div key={country.name.common}> {country.name.common} </div>
        )}
        </ul>
    )
}

export default CountryList
