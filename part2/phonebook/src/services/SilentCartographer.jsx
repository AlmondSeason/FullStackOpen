import axios from 'axios';
const URL = "http://localhost:3001/persons";

const getData = () =>
{
    const req = axios.get(URL);
    return req.then(response =>
    {
        const data = response.data;
        console.log(data);
        return data;
    });
}
const addEntry = (obj) =>
{
    const req = axios.post(URL, obj);
    return req.then(response =>
    {
    //    console.log(response);
    });
}
const updateEntry = (obj) =>
{
    const req = axios.put(URL+`/${obj.id}`, obj);
    return req.then(response =>
    {
    //    console.log(response);
    });

}
const deleteEntry = (id) =>
{
    const req = axios.delete(URL + `/${id}`);
    return req.then(response =>
    {
        //console.log(response);
    });
}

export default { getData, addEntry, updateEntry, deleteEntry }