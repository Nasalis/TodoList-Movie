import { useContext, useState } from 'react';
import { TableContext } from '../../context/TableContext';
import Menu from '../Menu';
import TodoItem from '../TodoItem';

import './index.css';

export default function Favorites() {

    const {todos} = useContext(TableContext);

    const [search, setSearch] = useState("");

    return (
        <>
            <Menu/>
            <div className="favoritesContainer">
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
                        return ""
                        }).map((value, key) => {
                            if(value.favorite) {
                                return (
                                    <TodoItem key={key} todo={value}/>
                                )
                            }
                            return ""
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}