import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddItemPage from './pages/AddItemPage';
import EditItemPage from './pages/EditItemPage';
import { useState } from 'react';

function App() {
  const [itemToEdit, setItemToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setItemToEdit={setItemToEdit} />
          </Route>
          <Route path="/add-item">
            <AddItemPage />
          </Route>
          <Route path="/edit-item">
            <EditItemPage itemToEdit={itemToEdit} />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;