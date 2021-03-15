import { useContext, useState } from 'react'
import { TableContext } from '../../context/TableContext';
import { Todo } from '../../types';

import "./index.css"

interface TodoListProps {
    todo: Todo;
}

export default function TodoItem({todo}: TodoListProps) {

    const {todos, completedTodo, favoriteMovie, changeSetTodo} = useContext(TableContext)


    function deleteMovie() {
        changeSetTodo(todos.filter(el => el.name !== todo.name))
    }

    return (
        <div className={`movieContainer ${todo.completed ? "active" : undefined}`}>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={() => completedTodo(todo)}/>
            </label>
            <div onClick={() => favoriteMovie(todo)} className={`icon favorite ${todo.favorite && "active"}`}>
                <i className="fas fa-star"></i>
            </div>

            <ul className="infoTitles">
                <li>
                    <p>Nome</p>
                    <small>{todo.name}</small>
                </li>
                <li>
                    <p>Diretor</p>
                    <small>{todo.director}</small>
                </li>
                <li>
                    <p>Duração</p>
                    <small>{todo.runtime} min</small>
                </li>
            </ul>
            
            <div onClick={deleteMovie} className="icon delete">
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}
