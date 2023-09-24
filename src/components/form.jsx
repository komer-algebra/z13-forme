import PropTypes from 'prop-types';

export default function Form({person, valueChange, addPerson}) {
  return (
    <form onSubmit={addPerson}>
      <input type="text" name="name" placeholder="Name" value={person.name} onChange={valueChange}/>
      <input type="text" name="surname" placeholder="Surname" value={person.surname} onChange={valueChange}/>
      <input type="number" name="age" placeholder="age" value={person.age} onChange={valueChange}/>
      <button type="submit">Add person</button>
    </form>
  )
}

Form.propTypes = {
  person: PropTypes.object,
  valueChange: PropTypes.func,
  addPerson: PropTypes.func
}
