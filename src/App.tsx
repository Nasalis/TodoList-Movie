import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem';
import Home from './components/Home'
import { TableProvider } from './context/TableContext';


function App() {
  return (
    <TableProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/add" component={AddItem}/>
          </Switch>
        </div>
      </Router>
    </TableProvider>
  );
}

export default App;
