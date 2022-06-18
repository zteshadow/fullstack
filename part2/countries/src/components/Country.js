
import React from 'react'

const Country = ({country}) => {
    console.log('flags', country.flags.png)
    
    return (
        <>
        <h2>{country.name.common}</h2>
        <div>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
        </div>
        <h3>languages:</h3>
        <ul>
            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
        </ul>
        <img src={country.flags.png} />
        </>
    )
}

export default Country