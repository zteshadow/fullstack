
import React from 'react'
import Country from './Country'

const CountryList = ({countries, filterEnabled}) => {
    console.log('filter: ', filterEnabled)
    
    if (filterEnabled && countries.length > 10) {
        return (<div>Too many matches, spedify another filter</div>)
    }
    
    if (countries.length == 1) {
        return <Country country={countries[0]} />
    } else {
        return (
        <>
            {countries.map(country =>
                <div key={country.name.common}> {country.name.common} </div>
            )}
        </>
        )
    }
}

export default CountryList
