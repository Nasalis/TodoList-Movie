import { useContext, useState } from 'react';
import { TableContext } from '../../context/TableContext';
import { Todo } from '../../types';
import Menu from '../Menu';

import './index.css';

export default function AddItem() {

    const { addNewTodo } = useContext(TableContext)

    const [name, setName] = useState("");
    const [director, setDirector] = useState("");
    const [runtime, setRuntime] = useState(0);

    function addNewMovie() {
        if(name === "" || director === "" || runtime === 0) {
            console.log("DADOS INVÁLIDOS")
            return;
        }
        let newMovie: Todo;
        newMovie = {
            name,
            director,
            runtime,
            favorite: false,
            completed: false,
        }
        addNewTodo(newMovie);
        
    }


    return (
        <>
            <Menu/>
            <div className="addItemContainer">
                <h2>Adicionar um novo filme</h2>
                <form action="" method="POST">
                    <label htmlFor="">
                        <h4>Nome</h4>
                        <input type="text" onChange={input => setName(input.target.value)}/>
                    </label>
                    <label htmlFor="">
                        <h4>Diretor</h4>
                        <input type="text" onChange={input => setDirector(input.target.value)}/>
                    </label>
                    <label htmlFor="">
                        <h4>Duração (minutos)</h4>
                        <input type="number" onChange={input => setRuntime(Number(input.target.value))}/>
                    </label>
                    <button type="button" onClick={addNewMovie}>Adicionar</button>   
                </form>
            </div>
        </>
    )
}
