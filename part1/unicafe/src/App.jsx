import { useState } from 'react';
const goodTitle = 'Good';
const neutralTitle = 'Neutral';
const badTitle = 'Bad';


const App = () =>
{
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <GiveFeedback states={[good, neutral, bad]} funcs={[setGood, setNeutral, setBad]} title="Give Feedback" />
            <br />
            <Statistics states={[good, neutral, bad]} title="Statistics" />
        </div>
    );
}

const GiveFeedback = (params) =>
{
    return (
        <div>
            <Title title={params.title} />
            <Button title={goodTitle} state={params.states[0]} func={params.funcs[0]} />
            <Button title={neutralTitle} state={params.states[1]} func={params.funcs[1]} />
            <Button title={badTitle} state={params.states[2]} func={params.funcs[2]} />
        </div>
    );
}

const Statistics = (params) =>
{
    let booly = false;
    params.states.forEach((v) => { if (v != 0) { booly = true; } });
  
    if (booly)
    {
        return (
            <div>
                <Title title={params.title} />
                <table>
                    <tbody>
                        <StatisticLine title={goodTitle} stat={params.states[0]}/>
                        <StatisticLine title={neutralTitle} stat={params.states[1]}/>
                        <StatisticLine title={badTitle} stat={params.states[2]} />
                        <StatisticLine title="All" stat={sumArr(params.states)}/>
                        <StatisticLine title="Average" stat={average(params.states)}/>
                        <StatisticLine title="Percent Positive" stat={percentPos(params.states)} />
                    </tbody>
                </table>
            </div>
        );
    }
    else
    {
        return (
            <div> No feedback given </div>
        );
    }
}

const StatisticLine = (params) =>
{
    return (
        <tr>
            <td> {params.title} </td>
            <td> {params.stat} </td>
        </tr>
    );
}

const Button = (params) =>
{
    return (
        <input type="button" onClick={() => { const newState = params.state + 1; return (params.func(newState)) }} value={params.title} />
    );
}

const Title = (params) =>
{
    return (
        <div> {params.title} </div>
    );
}

const sumArr = (params) =>
{
    let r = 0;
    params.forEach((v) => { r += v; });
    return r;
}

const percentPos = (params) =>
{
    const pos = (params[0]) / sumArr(params) * 100 + "%";
    return pos;
}

const average = (params) =>
{
    let i = 1;
    let r = 0;
    params.forEach((v) =>
    {
        r += v * i;
        if (i === 1)
        {
            i = 0;
        }
        else if (i === 0)
        {
            i = -1;
        }
    });
    const avg = (r / sumArr(params));
    return avg;
}

export default App