import React from 'react';
import { useState } from 'react';

function DinnerSpinner() {

    const [activeItem, setActiveItem] = useState([]);

    const getRandomItem = async () => {
        const response = await fetch('/randomItem');
        const data = await response.json();
        console.log(data)
        setActiveItem(data[0])  // the json file only has one element, so we'll use that

    }

    return (
        <div>
            <h2>Dinner Spinner</h2>
            <p className="infotext">Not sure what to have? Click the Spin! button to randomly select an item from your freezer.</p>
            <div className="dinner-spinner">
                <p>
                    Name: {activeItem.name}
                </p>
                <p>
                    Date: {activeItem.date}
                </p>
                <button onClick={getRandomItem}>Spin!</button>
            </div>

        </div>
    );
}

export default DinnerSpinner;
