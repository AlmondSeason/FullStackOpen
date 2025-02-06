import { useState, useEffect } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import Input from './components/Input';
import Notification from './components/Notification';
import SilentCartographer from './services/SilentCartographer';

const App = () =>
{
    const [persons, setPersons] = useState([]);
    const [currList, setCurrList] = useState([]);
    const getData = () =>
    {
        SilentCartographer.getData()
            .then(data =>
            {
                setPersons(data);
            });
    }

    useEffect(getData, []);

    const searchNames = (params) =>
    {
        if (!event.target.value)
        {
            return null;
        }
        else
        {
            const list  = persons.filter((v) =>
            {
                return v.name.common.toLowerCase().includes(event.target.value.toLowerCase())
            })

            return list;
        }
    }

    const listLogic = (params) =>
    {
        let list = searchNames();

        if (list != null && list.length > 10)
        {
            setCurrList(list);
        }
        else
        {
            setCurrList(list);
        }
    }

    return (
        <div>
            {/*<Notification message={message} state={messageState} />*/}
            <Input label="search" onChangeFunc={() => listLogic() } />
            {/*<Form label="Phonebook" onSubmitFunc={handleUpdate} onChangeFuncName={handleNameChange} onChangeFuncPhone={handlePhoneChange} />*/}
            <Display name="Countries" list={currList}/>
        </div>
    )
}
export default App