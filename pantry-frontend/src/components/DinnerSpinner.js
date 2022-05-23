import React from 'react';
import { useState } from 'react';

function DinnerSpinner({ itemItem }) {

    const [activeItem, setActiveItem] = useState([]);

    const getRandomItem = async () => {
        const response = await fetch('/randomItem');
        const data = await response.json();
        //console.log(data)
        setActiveItem(data[0])  // the json file only has one element, so we'll use that

    }

    return (
        <div className="flex items-start flex-col p-3 border border-gray-200 mt-3 mb-4">
            <h2 className="text-xl font-semibold leading-normal mt-0  text-gray-800">Dinner Spinner</h2>
            <p className="text-gray-800 text-sm mb-2">Not sure what to have? Click the Spin! button to randomly select an item from your freezer.</p>
            <p>{itemItem}</p>
            <div className="dinner-spinner">
                <p>
                    <span>Name: </span>
                    <span className="font-medium">{activeItem.name}</span>
                </p>
                <p>
                    <span>Date: </span>
                    <span className="font-medium">{activeItem.date}</span>
                </p>
            </div>
            <button className="bg-blue-500 text-white py-2 text-sm px-3 rounded mt-3" onClick={getRandomItem}>Spin!</button>

        </div>
    );
}

export default DinnerSpinner;
