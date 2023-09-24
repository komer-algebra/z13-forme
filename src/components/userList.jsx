import PropTypes from 'prop-types';

export default function UserList({base, modPerson}){
  return (
    <ul>
      {base.map( (person,i) =>
        <li key={i}>
          Korisnik: {person.name} {person.surname} {person.age}<br/>
          Change name: <input type="text" name="name" value={person.name}
            onChange={(event) => modPerson(event, i)}
          />
        </li>
      )}
    </ul> );
}

UserList.propTypes = {
  base: PropTypes.array,
  modPerson: PropTypes.func
}
