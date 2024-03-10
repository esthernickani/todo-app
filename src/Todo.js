import React, { useState } from "react";

const Todo = ({ id, todo, removeTodo }) => {
    console.log(id)
    const handleRemove = () => removeTodo(id)

    return (
        <span>
            <p>{todo}</p>
            <button onClick={handleRemove}>X</button>
        </span>
    )
}

export default Todo;