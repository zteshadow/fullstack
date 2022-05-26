
function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}

function Content(props) {
  return (
    <div>
        <Part content={props.parts[0]} />
        <Part content={props.parts[1]} />
        <Part content={props.parts[2]} />
    </div>
  )
}

const Part = props => {
  return (
    <p>{props.content.name} {props.content.exercises}</p>
  )  
}

function Total(props) {
  const count = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>Number of exercises {count}</p>
  )
}
function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7  
    },
    {
      name: 'State of a component',
      exercises: 14  
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
