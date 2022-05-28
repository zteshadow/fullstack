
import React from 'react'


const Header = ({text}) => <h1>{text}</h1>
const Part = ({part}) => <p>{part.name} {part.exercises}</p>
  
const Content = ({parts}) => {
    console.log(parts);
    
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part} />    
            )}
        </div>
    )
}
  
const Course = ({course}) => {
    return (
        <>
        <Header text={course.name} />
        <Content parts={course.parts} />
        </>
    )
}

export default Course
