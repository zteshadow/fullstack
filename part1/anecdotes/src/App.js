import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>

const Anecdote = ({text, count}) => {
  return (
    <>
      <div>{text}</div>
      <div>has {count} votes</div>
    </>
    
  )
}

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [indexOfMax, setIndexOfMax] = useState(0)

  const generateAnecdote = () => {
    let index = 0
    do {
      index = Math.floor(Math.random() * anecdotes.length)
    } while (index === selected)

    setSelected(index)
  }

  const handleVotes = () => {
    const newValue = [...votes]
    newValue[selected] += 1
    if (newValue[selected] > newValue[indexOfMax]) {
      setIndexOfMax(selected)
    }
    setVotes(newValue)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} count={votes[selected]} />
      <Button text="vote" onClick={handleVotes} />
      <Button text="next anecdote" onClick={generateAnecdote} />
      <Header text="Anecdote with most votes" />
      <Anecdote text={anecdotes[indexOfMax]} count={votes[indexOfMax]} />
    </div>
  )
}

export default App