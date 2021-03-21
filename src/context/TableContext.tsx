import { createContext, ReactNode, useEffect, useState } from "react";
import { Todo, ToggleTodo } from "../types";

interface TableContextData {
    todos: Todo[];
    totalMinutes: number;
    completedTodo: ToggleTodo;
    favoriteMovie: ToggleTodo;
    countAllMinutes: () => void;
    formatTime: (totalMinutes: number) => string;
    addNewTodo: (value: Todo) => void;
    changeSetTodo: (value: Todo[]) => void;
}

interface TableProviderProps {
    children: ReactNode;
}

const initialTodos: Array<Todo> = [
    {name: "Psicose", director: "Hitchcock", runtime: 110, favorite: false, completed: false},
]

export const TableContext = createContext({} as TableContextData);

export function TableProvider({children}: TableProviderProps) {
    
    const [todos, setTodos] = useState(initialTodos);
    let [totalMinutes, setTotalMinutes] = useState(0);
    let key: string = "listMovies";


    useEffect(()=> {
        countAllMinutes();
    }, [todos.length])

    useEffect(() => {
      getLocalTodos();
    }, []);

    useEffect(() => {
      saveLocalTodos();
    }, [todos])

    // ------------------- Local Storage --------------- //

    const saveLocalTodos = () => {
      localStorage.setItem(key, JSON.stringify(todos))
    }

    const getLocalTodos = () => {
      if(localStorage.getItem(key) === null) {
        localStorage.setItem(key, JSON.stringify([]));
      } else {
        let storageValue = localStorage.getItem(key);
        if(storageValue) {
          let todoLocal = JSON.parse(storageValue);
          setTodos(todoLocal);
        }
      }
    }

    // ----------------------------------------------- //

    function changeSetTodo(value: Todo[]) {
      setTodos(value)
    }

    function addNewTodo(value: Todo) {
      setTodos([...todos, value])
      countAllMinutes()
    }

    const completedTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
        if(todo === selectedTodo) {
            return {
            ...todo, completed: !todo.completed
            }
        }
        return todo;
        });
        setTodos(newTodos)
    }

    const favoriteMovie: ToggleTodo = favoriteTodo => {
      const newTodos = todos.map(todo => {
        if(todo === favoriteTodo) {
          return {
            ...todo, favorite: !todo.favorite
          }
        }
        return todo;
      });
      setTodos(newTodos);
    }

    function countAllMinutes() {
        let count: number = 0;
        if(todos.length === 0 || todos.length === null) {
        return setTotalMinutes(0);
        }else{
          todos.map(movie => {
              count += movie.runtime
              setTotalMinutes(count)
          })
        }
    }

  function formatTime(totalMinutes: number): string {

    if(totalMinutes === 0)
      return (totalMinutes + " min");
      
    let hours: number = Math.floor(totalMinutes/60);
    let minutes:number = totalMinutes%60;

    return `${hours < 10 ? "0"+hours+" h": " h"} : ${minutes < 10 ? "0"+minutes+" min" : " min"}`
  }

  return (
      <TableContext.Provider value={{
        todos,
        totalMinutes,
        completedTodo,
        favoriteMovie,
        countAllMinutes,
        formatTime,
        addNewTodo,
        changeSetTodo
      }}>
          {children}
      </TableContext.Provider>
  )
}