import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem';
import Favorites from './components/Favorites';
import Home from './components/Home'
import ToWatchLater from './components/ToWatchLater';
import Watched from './components/Watched';
import { TableProvider } from './context/TableContext';


function App() {
  return (
    <TableProvider>
      <Router>
        <div className="App">
          <Switch>
          <Route path="/" exact component={Home}/>
            <Route path="/add" component={AddItem}/>
            <Route path="/favorites" component={Favorites}/>
            <Route path="/watched" component={Watched}/>
            <Route path="/later" component={ToWatchLater}/>
          </Switch>
        </div>
      </Router>
    </TableProvider>
  );
}

export default App;
