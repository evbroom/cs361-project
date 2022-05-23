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
        console.log(newItem)
        const response = await fetch('/pantry', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            // alert("Successfully added the pantry item!");
            history.push('/');
        } else {
            alert(`Please fill out all fields`);
            // alert(`Failed to add the pantry item, status code = ${response.status}`);
        }
        // history.push('/');
    };

    const cancel = () => {
        history.push('/');
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold leading-normal mt-0 mb-5 text-gray-800">Add Item</h1>
            <thead>
                <tr>
                    <th className="text-center text-sm font-medium text-gray-900 px-6 py-2 text-left">Name</th>
                    <th className="text-center text-sm font-medium text-gray-900 px-6 py-2 text-left">Quantity</th>
                    <th className="text-center text-sm font-medium text-gray-900 px-6 py-2 text-left">Category</th>
                    <th className="text-center text-sm font-medium text-gray-900 px-6 py-2 text-left">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="pr-4">
                        <input
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 py-1 px-2"
                            type="text"
                            placeholder="Enter name here"
                            value={name}
                            onChange={e => setName(e.target.value)} /></td>
                    <td className="pr-4">
                        <input
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 py-1 px-2"
                            type="number"
                            value={quantity}
                            placeholder="Enter quantity here"
                            onChange={e => setQuantity(e.target.value)} />
                    </td>
                    <td className="pr-4">
                        <input
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 py-1 px-2"
                            type="text"
                            placeholder="Enter category here"
                            value={category}
                            onChange={e => setCategory(e.target.value)} />
                    </td>
                    <td className="pr-4">
                        <input
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 py-1 px-2"
                            type="date"
                            placeholder="Enter date here"
                            value={date}
                            onChange={e => setDate(e.target.value)} />
                    </td>


                </tr>

            </tbody>
            <button
                className="bg-green-500 text-white py-2 text-sm px-3 rounded mr-3 mt-4"
                onClick={addItem}
            >Add</button>
            <button
                className="bg-gray-400 text-white py-2 text-sm px-3 rounded mr-3"
                onClick={cancel}
            >Cancel</button>
        </div>
    );
}

export default AddItemPage;