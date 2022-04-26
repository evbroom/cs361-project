import React from 'react';
import { useState } from 'react';
// import Item from './Item';
let testItems = [{ _id: '6260cd3454124661b20c0e30', name: 'Chicken Breasts', quantity: 6, category: 'Poultry', date: '2022-04-24' },
{ _id: '62671d831104e38cdc4c97df', name: 'Ground Beef', quantity: 2, category: 'Beef', date: '2022-04-09' }, { _id: '62671d9f1104e38cdc4c97e2', name: 'Broccoli', quantity: 3, category: 'Vegetable', date: '2022-03-10' }, { _id: '62671db41104e38cdc4c97e5', name: 'Salmon', quantity: 6, category: 'Fish', date: '2021-12-08' }]
function DinnerSpinner({ items }) {
    // console.log(`this is the length: ${items.length}`)
    console.log(items)

    const [activeItem, setActiveItem] = useState(0);

    const randomItem = e => {
        const len = items.length;
        setActiveItem(Math.floor(Math.random() * len));
    };

    // consider getting the id's, pulling a random one, then making a server call with that id to get the item. Just uncomment the find item by id function in the pantry_model.mjs file and give it a try

    return (
        <div>
            <h2>Dinner Spinner</h2>
            <p className="infotext">Not sure what to have? Click the Spin! button to randomly select an item from your freezer.</p>
            <div className="dinner-spinner">
                <p>
                    Name: {testItems[activeItem].name}
                </p>
                <p>
                    Date: {testItems[activeItem].date}
                </p>
                <button onClick={randomItem}>Spin!</button>
            </div>

        </div>
    );
}

export default DinnerSpinner;
