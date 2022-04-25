import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditItemPage = ({ itemToEdit }) => {

    const [name, setName] = useState(itemToEdit.name);
    const [quantity, setQuantity] = useState(itemToEdit.quantity);
    const [category, setCategory] = useState(itemToEdit.category);
    const [date, setDate] = useState(itemToEdit.date);

    const history = useHistory();

    const editItem = async () => {
        const editedItem = { name, quantity, category, date };
        const response = await fetch(`/pantry/${itemToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedItem),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the item!");
            history.push('/');
        } else {
            alert(`Failed to edit the item, status code = ${response.status}`);
            console.log(response)
        }
        //history.push('/');
    }

    return (
        <div>
            <h1>Edit Item</h1>
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
                onClick={editItem}
            >Save and Update</button>
        </div>
    );
}

export default EditItemPage;