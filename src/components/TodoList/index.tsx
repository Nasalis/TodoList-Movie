import { useContext, useState } from 'react'
import { TableContext } from '../../context/TableContext';
import TodoItem from '../TodoItem';
import "./index.css"

export default function TodoList() {

    const {todos} = useContext(TableContext);

    const [search, setSearch] = useState("");

    return (
        <>
            <div className="searchBar">
                <h4>Busque um filme:</h4>
                <input type="text" onChange={element => setSearch(element.target.value)}/>
            </div>
            <div className="movieList">
                {todos.filter(element => {
                    if(search === "") {
                        return element;
                    }else{
                        if(element.name.toLowerCase().includes(search.toLowerCase())) {
                        return element;
                        }
                    }
                    }).map((value, key) => {
                    return (
                        <TodoItem key={key} todo={value}/>
                    )
                    })
                }
                
            </div>
        </>
    )
}
