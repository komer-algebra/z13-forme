import { useState } from 'react'
import './App.css'
import Form from './components/form'
import UserList from './components/userList';
import ResetButton from './components/resetButton';

function App() {

  const NIL_PERSON = {
    name: '',
    surname: '',
    age: ''
  }

  const NIL_BASE = [];

  const [person, setPerson] = useState(NIL_PERSON);
  const [base, setBase] = useState(NIL_BASE);

  const addPerson = (e) => {
    e.preventDefault();
    if (person.name && person.surname && person.age) {
      setBase(base => [...base, person]);
      setPerson(NIL_PERSON)
    } else alert("Fill all elements!")
  }

  const modPerson = (e,i) => {
    const newBase = [...base];
    newBase[i].name = e.target.value;
    setBase(newBase);
  }

  const valueChange = (e) => {
    const newPerson = { ...person };
    newPerson[e.target.name] = e.target.value;
    setPerson(newPerson)
  }

  const resetBase = (e) => {
    e.preventDefault();
    setBase([])
  }

  return (
    <>
      <h1>User base again!</h1>
      <Form person={person} valueChange={valueChange} addPerson={addPerson} />
      <UserList base={base} modPerson={modPerson}/>
      <ResetButton resetBase={resetBase}/>
    </>
  )
}

export default App
