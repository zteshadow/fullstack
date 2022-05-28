
import React from 'react'


const Header = ({text}) => <h1>{text}</h1>
const Part = ({part}) => <p>{part.name} {part.exercises}</p>
  
const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part} />    
            )}
        </div>
    )
}

const Total = ({parts}) => {
    const sum = () => parts.map(part => part.exercises).reduce((pre, cur) => pre + cur)

    return (
        <h2>
            total of {sum()} exercises
        </h2>
    )
}

const Course = ({course}) => {
    return (
        <>
        <Header text={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </>
    )
}

export default Course
