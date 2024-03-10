import React, { useState } from "react";
import Todo from "./Todo"
import { v4 as uuid } from 'uuid';
import NewTodoForm from "./NewTodoForm"

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (newtodo) => {
        setTodos(todos => [...todos, {id:uuid(), ...newtodo}])
    }

    const removeTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }

    const todoComponent = todos.map(({ todo, id }) => <Todo todo={todo} id={id} key={id} removeTodo={removeTodo}/>)

    return (
        <div>
            <h1>To-dos</h1>
            <ul>{todoComponent}</ul>
            <NewTodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoList;