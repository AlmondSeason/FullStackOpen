import { useState } from 'react'

const App = () =>
{
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0);

    let origPoints = [];
    let indx = 0;
    anecdotes.forEach((v) =>
    {
        origPoints[indx] = 0;
        indx++;
    });

    const [points, setPoints] = useState(origPoints);

    return (
        <div>
            <div>{anecdotes[selected]}</div>
            <br />
            <div> This quote has {points[selected]} votes </div>
            <Button onclickfunc={() => {setSelected(randomGen(anecdotes));}} title="Random anecdote" />
            <Button onclickfunc={() => { setPoints(addVote(points, selected)); }} title="Vote" />
            <br />
            <div> The anecdote below has the most votes </div>
            <div> {highVote(anecdotes, points)} </div>
        </div>
    )
}

const Button = (params) =>
{
    return (
        <input type="button" onClick={() => { params.onclickfunc(); }} value={params.title} />
    );
}

const randomGen = (arr) =>
{
    let temp = Math.floor(Math.random(0, 1) * arr.length);
    return temp;
}

const addVote = (arr, idx) =>
{
    const newpt = arr[idx] + 1;
    const newArr = [...arr];
    newArr[idx] = newpt;
    return newArr;
}

const highVote = (objArr, valArr) =>
{
    let currHigh = 0;
    let i = -1;
    let indx = 0;
    valArr.forEach((v) =>
    {
        if (v > currHigh)
        {
            currHigh = v;
            i = indx;
        }
        indx++;
    });
    if (i !== -1)
    {
        return objArr[i];
    }
}

export default App