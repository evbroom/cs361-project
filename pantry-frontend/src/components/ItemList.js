import React from 'react';
import Item from './Item';

function ItemList({ items, onEdit, onDelete }) {
    return (
        <div>
            <table id="items" className="min-w-full mt-4">
                <thead className="bg-white border-b">
                    <tr className="border">
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                        <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">Quantity</th>
                        <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">Category</th>
                        <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">Date</th>
                        <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">Edit</th>
                        <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => <Item item={item}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        key={i} />)}
                </tbody>
            </table>
        </div>
    );
}

export default ItemList;
