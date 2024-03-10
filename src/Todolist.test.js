import React from "react";
import TodoList from "./TodoList";
import { fireEvent, render } from "@testing-library/react";

const addToDo = (todoList) => {
    const input = todoList.getByLabelText('Todo')
    const submitBtn = todoList.getByText('Submit')

    fireEvent.change(input, { target: {value:'This is a test todo'}})
    fireEvent.click(submitBtn)
}

it("renders without crashing", function() {
    render(<TodoList />)
})

it("matches snapshot", function() {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot()
})

it("adds todo", function() {
    const todoList = render(<TodoList />);

    //get remove button and expect it not to be in document
    const removeBtn = todoList.queryByText('X')
    expect(removeBtn).not.toBeInTheDocument();

    //add a todo
    addToDo(todoList)

    const addedTodo = todoList.queryByText('This is a test todo')
    const remove = todoList.getByText('X')

    expect(remove).toBeInTheDocument();
    expect(addedTodo).toBeInTheDocument();
})

it("deletes todo", function() {
    const todoList = render(<TodoList />);

    //add a todo
    addToDo(todoList)

    const addedTodo = todoList.queryByText('This is a test todo')
    const remove = todoList.getByText('X')

    expect(remove).toBeInTheDocument();
    expect(addedTodo).toBeInTheDocument();

    //Delete todo
    fireEvent.click(remove);
    const deletedTodo = todoList.queryByText('This is a test todo')
    expect(deletedTodo).not.toBeInTheDocument()
})