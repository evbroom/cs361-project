import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';
import DinnerSpinner from '../components/DinnerSpinner';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setItemToEdit }) {
    const [items, setItems] = useState([]);
    const history = useHistory();

    const onDelete = async (_id) => {
        let willDelete = window.confirm(`Are you sure you want to delete this item?`);
        if (willDelete) {
            const response = await fetch(`/pantry/${_id}`, { method: 'DELETE' });
            if (response.status === 204) {
                const newItems = items.filter(e => e._id !== _id);
                setItems(newItems);
            } else {
                console.error(`Failed to delete the item with id=${_id}, status cose = ${response.status}`);
            }
        }
    };

    const onEdit = item => {
        setItemToEdit(item);
        history.push('/edit-item');
    }

    const loadItems = async () => {
        const response = await fetch('/pantry');
        const data = await response.json();
        setItems(data)

    }

    useEffect(() => {
        loadItems();
    }, []);

    return (
        <>
            <h2>List of Freezer Items</h2>
            <p className="infotext">Manage the items in your deep freezer and keep track of when you added each item. Add, edit, or remove items as you need.</p>
            <p className="infotext">Click the Add New Item button to add an item to your freezer.</p>
            <p className="infotext">Click the edit button **add icon??** or the delete button to delete the item.</p>
            <DinnerSpinner items={items}></DinnerSpinner>
            <Link to="/add-item"><button>Add New Item</button></Link>
            <ItemList items={items} onEdit={onEdit} onDelete={onDelete}></ItemList>
        </>
    );
}

export default HomePage;