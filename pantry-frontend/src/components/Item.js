import React from 'react';

function Item({ item, onEdit, onDelete }) {
    return (
        <tr className="bg-white border transition duration-300 ease-in-out hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
            <td className="text-center text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{item.quantity}</td>
            <td className="text-center text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{item.category}</td>
            <td className="text-center text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{item.date}</td>
            <td className="text-center text-sm text-gray-900 px-6 py-4 whitespace-nowrap"><button className="bg-yellow-400 text-white py-1 text-sm px-3 rounded" onClick={() => onEdit(item)}>Edit</button></td>
            <td className="text-center text-sm text-gray-900 px-2 py-1 whitespace-nowrap"><button className="bg-red-500 text-white py-1 text-sm px-3 rounded" onClick={() => onDelete(item._id)}>Delete</button></td>
        </tr>
    );
}

export default Item;