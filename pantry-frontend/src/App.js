import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddItemPage from './pages/AddItemPage';
import EditItemPage from './pages/EditItemPage';

function App() {

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/add-item">
            <AddItemPage />
          </Route>
          <Route path="/edit-item">
            <EditItemPage />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;