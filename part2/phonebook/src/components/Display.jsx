import Person from './Person'
import Input from './Input'

const Display = (params) =>
{
    const deletePerson = (id) =>
    {
        params.deleteFunc(id);
    }

    const makePerson = (obj) =>
    {
        if (obj)
        {
            return (
                <div key={obj.id + "div"}>
                    <Person key={obj.id + "person"} name={obj.name} phone={obj.number} />
                    <Input key={obj.id + "lol"} value="delete" type="submit" onClickFunc={() => deletePerson(obj.id)} />
                </div>
            );
        }
    }

    return (
        <div>
            <h2>{params.name}</h2>
            <span>{params.list.map((v) => { return makePerson(v); })}</span>
            <div> debug: {params.randomVar} </div>
        </div>
    )
}

export default Display