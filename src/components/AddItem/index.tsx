import { useContext, useState } from 'react';
import { TableContext } from '../../context/TableContext';
import { Todo } from '../../types';
import Menu from '../Menu';

import './index.css';

export default function AddItem() {

    const { addNewTodo } = useContext(TableContext)

    const [activeAlert, setActiveAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false);


    const [name, setName] = useState("");
    const [director, setDirector] = useState("");
    const [runtime, setRuntime] = useState(0);


    function addNewMovie() {
        if(name === "" || director === "" || runtime === 0) {
            setErrorAlert(true);
            setActiveAlert(false);
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
        setActiveAlert(true);
        setErrorAlert(false);
        
    }


    return (
        <>
            <Menu/>
            <div className="addItemContainer">
                <h2>Adicionar um novo filme</h2>
                <form action="" method="POST">
                    <label htmlFor="">
                        <h4>Nome</h4>
                        <input type="text" onChange={input => setName(input.target.value)} required/>
                    </label>
                    <label htmlFor="">
                        <h4>Diretor</h4>
                        <input type="text" onChange={input => setDirector(input.target.value)} required/>
                    </label>
                    <label htmlFor="">
                        <h4>Duração (minutos)</h4>
                        <input type="number" onChange={input => setRuntime(Number(input.target.value))} required/>
                    </label>
                    <button type="button" onClick={addNewMovie}>Adicionar</button>   
                </form>
            </div>
            <div className={`formAlert ${activeAlert ? 'active' : ""}`}>
                <h1>Item adicionado</h1>
            </div>
            <div className={`formAlert ${errorAlert ? 'error' : ""}`}>
                <h1>Erro ao adicionar</h1>
            </div>
        </>
    )
}
