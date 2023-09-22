import PropTypes from 'prop-types';
export default function User({ id, name, surname, age, changeName }) {
  return (
    <>
      <p>User {name} {surname} ima {age} godina!</p>
      <label>Promjeni ime za ovog korisnika: </label>
        <input id={id} type="text" value={name} onChange={changeName}></input>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
  changeName: PropTypes.func,
  id: PropTypes.number
}
