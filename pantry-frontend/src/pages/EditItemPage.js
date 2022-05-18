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
            // alert("Successfully edited the item!");
            history.push('/');
        } else {
            alert(`Please fill out all required fields`);
            // alert(`Failed to edit the item, status code = ${response.status}`);
            console.log(response)
        }
        //history.push('/');
    }

    const cancel = () => {
        history.push('/');
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold leading-normal mt-0 mb-5 text-gray-800">Edit Item</h1>
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
                            onChange={e => setName(e.target.value)} />
                    </td>
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
                onClick={editItem}
            >Save and Update</button>
            <button
                className="bg-gray-400 text-white py-2 text-sm px-3 rounded mr-3"
                onClick={cancel}
            >Cancel</button>
        </div>
    );
}

export default EditItemPage;