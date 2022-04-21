import React from 'react';
import Item from './Item';

function ItemList({ items }) {
    return (
        <table id="movies">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <Item item={item}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ItemList;