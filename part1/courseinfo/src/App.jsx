import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const Header = (params) =>
{
    return (
        <h1> {params.course} </h1>
    );
}
const Content = (params) =>
{
    return (
        <p>
            {params.title} {params.content}
        </p>
    );
}
const Total = (params) =>
{
    return (
        <p>Number of exercises {params.total}</p>
    );
}

const App = () =>
{
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
            <Content title={course.parts[0].name} content={course.parts[0].exercises} />
            <Content title={course.parts[1].name} content={course.parts[1].exercises} />
            <Content title={course.parts[2].name} content={course.parts[2].exercises} />
            <Total total={sum(course.parts)} />
        </div>
    )
}

const sum = (arr) =>
{
    let total = 0;
    Object.values(arr).forEach(v =>
    {
        total += v.exercises;
    });
    return total;
}

export default App
