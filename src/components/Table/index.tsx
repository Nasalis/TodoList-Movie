import './index.css'
import TodoList from '../TodoList';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TableContext } from '../../context/TableContext';


function Table () {

  const {totalMinutes, formatTime} = useContext(TableContext)
  

  return (
    <div className="tableContainer">
        <h1>Todo</h1>
        <div className="tableMenu">
            <div className="tableStatus">
              <h3>Minutagem total <div>{formatTime(totalMinutes)}</div> </h3>
            </div>
            <Link to="/add">
              <button>Adicionar <i className="fas fa-plus"></i></button>
            </Link>
        </div>
        <TodoList/>
    </div>
  );
};

export default Table;
