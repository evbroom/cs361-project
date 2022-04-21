import React from 'react';

function Item({ item }) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    );
}

export default Item;