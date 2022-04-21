import React from 'react';

function Item({ item, onEdit, onDelete }) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td><button onClick={() => onEdit(item)}>Edit</button></td>
            <td><button onClick={() => onDelete(item._id)}>Delete</button></td>
        </tr>
    );
}

export default Item;