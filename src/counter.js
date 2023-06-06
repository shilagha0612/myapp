import React, { useState } from 'react';
import Person from './person';

const Counter = (props) => {
    const [person, setPerson] = useState({
        
        age: props.age,
        
    });

    const handleBirthday = () => {
        setPerson((prevPerson) => ({
            ...prevPerson,
            age: prevPerson.age + 1,
        }));
    };

    return (
        <div className="App">
            <h1>Person Details</h1>
            <Person name={props.name} age={person.age} hairColor={props.hairColor} />
            <button onClick={handleBirthday}>Birthday</button>
        </div>
    );
};

export default Counter;
