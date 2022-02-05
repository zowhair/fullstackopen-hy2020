import React from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  // console.log(props)
  return (
    <p>{props.part} {props.exer}</p>
  )
}
const Content = (props) => {
  
  return (
    <>
      <Part part={props.parts[0].name} exer={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exer={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exer={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
}

const App = () => {
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
      <Content parts = {course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App