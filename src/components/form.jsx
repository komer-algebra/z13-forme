import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { NIL as NIL_UUID } from 'uuid';
import User from './user';

function Form() {
  const NIL_PERSON = {
    id: NIL_UUID,
    name: '',
    surname: '',
    age: ''
  }
  const [person, setPerson] = useState(NIL_PERSON);
  const [base, setBase] = useState([])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson(prevState => ({ ...prevState, [name]: value, id: uuid() }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.surname && person.age)
    {
      setBase(prevState => [...prevState, person]);
      setPerson(NIL_PERSON);
    }
    else  alert('Molimo, upišite sve podatke');
  };
  const handleResetBase = (e) => {
    e.preventDefault();
    setBase([]);
    setPerson(NIL_PERSON);
  };

  const handleChangeName = (event, id) =>{
    const newBase = [...base];
    newBase[id].name = event.target.value;
    setBase(newBase);
  }

  return (
    <>

      <form onSubmit={handleAddSubmit}>
        <input type="text" name="name" value={person.name} onChange={handleChange} placeholder="Ime" />
        <input type="text" name="surname" value={person.surname} onChange={handleChange} placeholder="Prezime" />
        <input type="number" name="age" value={person.age} onChange={handleChange} placeholder="Godine" />
        <button type="submit">Dodaj</button>
      </form>

      <ul>
        {base.map(person =>
          <li key={person.id}>
            <User
              id={person.id}
              name={person.name}
              surname={person.surname}
              age={person.age}
              changeName={handleChangeName(person.id)}/>
          </li>)}
      </ul>

      <button onClick={handleResetBase}>Obriši sve</button>

    </>
  );
}

export default Form;
