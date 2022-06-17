
import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'
import CountryList from './components/CountryList'

const App = () => {
  
  // state
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")

  // effect
  useEffect(() => {
    console.log('getting data...')
    
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data.map(item => {
          return {'name': item.name.common}
        }))
        console.log('data is ready', countries)
        })
  }, [])

  console.log('countries: ', countries.length)
  
  // filtered countries
  const filteredCountries = countries.filter(country => {
    const lowerName = country.name.toLowerCase()
    const lowerFilter = filter.toLowerCase()
    console.log(lowerName, lowerFilter)
    return lowerName.includes(lowerFilter)
  })

  // body
  return (
    <div>
      <Filter value={filter} onChange={(evt) => setFilter(evt.target.value)} />
      <CountryList countries={filteredCountries} />
    </div>
  )
}

export default App