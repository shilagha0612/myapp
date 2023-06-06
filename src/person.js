import React from 'react';

const Person = (props) => {
    const { name, age, hairColor } = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Hair: {hairColor}</p>
        </div>
    );
};

export default Person;
