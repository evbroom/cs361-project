import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
    const [items, setItems] = useState([]);
    const history = useHistory();

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
            <ItemList items={items}></ItemList>
            <Link to="/add-item">Add an item</Link>
        </>
    );
}

export default HomePage;