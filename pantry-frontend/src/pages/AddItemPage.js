import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddItemPage = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addItem = async () => {
        const newItem = { name, quantity, category, date };
        const response = await fetch('/pantry', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the pantry item!");
        } else {
            alert(`Failed to add the pantry item, status code = ${response.status}`);
        }
        history.push('/');
    };

    return (
        <div>
            <h1>Add Item</h1>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={quantity}
                placeholder="Enter quantity here"
                onChange={e => setQuantity(e.target.value)} />
            <input
                type="text"
                placeholder="Enter category here"
                value={category}
                onChange={e => setCategory(e.target.value)} />
            <input
                type="date"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addItem}
            >Add</button>
        </div>
    );
}

export default AddItemPage;