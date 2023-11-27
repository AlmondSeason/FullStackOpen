import { useState, useEffect } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import Input from './components/Input';
import Notification from './components/Notification';
import SilentCartographer from './services/SilentCartographer';

const App = () =>
{
    const [messageState, setMessageState] = useState(0);
    const [message, setMessage] = useState('');
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPhoneNum, setNewPhoneNum] = useState('');
    const [currList, setCurrList] = useState(persons);
    const getData = () =>
    {
        SilentCartographer.getData()
            .then(data =>
            {
                setPersons(data);
                setCurrList(data);
            });
    }
    const deletePerson = (id) =>
    {
        if (window.confirm("Are you sure you want to delete?"))
        {
            SilentCartographer.deleteEntry(id)
                .then(() =>
                {
                    refreshDataandSetMessage("You have deleted the user", 0);
                })
                .catch((error) =>
                {
                    setMessage(error);
                })
                
        }
    }

    useEffect(getData, []);

    const refreshDataandSetMessage = (message) =>
    {
        getData();
        setMessage(message);
        setMessageState(0);
        setTimeout(() =>
        {
            setMessage('');
        }, 5000);
    }

    const handleUpdate = (event) =>
    {
        event.preventDefault();
        let alreadyExists = false;
        let existingObj;
        persons.forEach((v) =>
        {
            if (v.name === newName)
            {
                alreadyExists = true;
                existingObj = v;
            }
        });

        if (!alreadyExists)
        {
            const obj = { name: newName, number: newPhoneNum };
            SilentCartographer.addEntry(obj)
                .then(() =>
                {
                    refreshDataandSetMessage("You have added " + obj.name);
                })
                .catch((response) =>
                {
                    setMessage(updateObj.name + " " + axiosObj.response.statusText);
                    setMessageState(1);
                })
        }
        else
        {
            if (window.confirm("Are you sure you want to update the phone number for this slug?"))
            {
                const updateObj = { name: existingObj.name, number: newPhoneNum, id: existingObj.id }
                SilentCartographer.updateEntry(updateObj)
                    .then(() =>
                    {
                        refreshDataandSetMessage("You have added " + existingObj.name);
                    })
                    .catch((axiosObj) =>
                    {
                        setMessage(updateObj.name + " " + axiosObj.response.statusText);
                        setMessageState(1);
                    })
            }
        }
    }

    const handleNameChange = (event) =>
    {
        setNewName(event.target.value);
    }
    const handlePhoneChange = (event) =>
    {
        setNewPhoneNum(event.target.value);
    }
    const searchNames = (params) =>
    {
        if (!event.target.value)
        {
            return persons;
        }
        else
        {
            return (
                persons.filter((v) =>
                {
                    return v.name.toLowerCase().includes(event.target.value.toLowerCase())
                })
            );
        }
    }

    return (
        <div>
            <Notification message={message} state={messageState} />
            <Input label="search" onChangeFunc={() => setCurrList(searchNames)} />
            <Form label="Phonebook" onSubmitFunc={handleUpdate} onChangeFuncName={handleNameChange} onChangeFuncPhone={handlePhoneChange} />
            <Display name="Numbers" list={currList} randomVar={newName} deleteFunc={deletePerson}/>
        </div>
    )
}
export default App