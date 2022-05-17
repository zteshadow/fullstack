import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const average = () => {
    return (good + neutral + bad) != 0 ? (good - bad) * 1.0 / (good + neutral + bad) : 0
  }

  const positive = () => {
    return (good + neutral + bad) != 0 ? good * 100.0 / (good + neutral + bad) : 0
  }

  if (good + neutral + bad > 0)
    return (
      <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={average()} />
        <StatisticLine text="positive" value={`${positive()} %`}/>
      </table>
  )

  return <div>No feedback given</div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />

      <Button label="good" onClick={ () => setGood(good + 1) } />
      <Button label="neutral" onClick={ () => setNeutral(neutral + 1) } />
      <Button label="bad" onClick={ () => setBad(bad + 1) } />

      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App