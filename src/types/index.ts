import React from "react";

type Todo = {
    name: string,
    director: string,
    runtime: number,
    favorite: boolean,
    completed: boolean,
}

type ToggleTodo = (selectedTodo: Todo) => void;

type setTodosType = React.Dispatch<React.SetStateAction<Todo[]>>

export type {Todo, ToggleTodo, setTodosType}