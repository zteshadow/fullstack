import axios from 'axios'

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const data = response.data
    console.log("** OK", {data})
  })

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)