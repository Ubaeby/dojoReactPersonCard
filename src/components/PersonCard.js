import React, { useState } from 'react';

const PersonCard = props => {
    const { firstName, lastName, age, hairColor } = props;
    const [newAge, setNewAge] = useState({
        ageCount: age
    });

    const ageClick = () => {
        setNewAge({
            ageCount: newAge.ageCount + 1
        });
    }

    const restart = () => {
        setNewAge({
            ageCount : age
        });
    }

    return (
        <div>
            <div>
                <h1>
                    {lastName}, {firstName}
                </h1>
                <p>
                    Age: {newAge.ageCount}
                </p>
                <p>
                    Hair Color: {hairColor}
                </p>

                <button onClick={ageClick}> Birthday Button for {firstName} {lastName} </button>
            </div>
            <div>
                <button onClick={restart}> Go back to your original age!</button>
            </div>
        </div>

        
    )
}

export default PersonCard;