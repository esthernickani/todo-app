import React from "react";
import Todo from "./Todo";
import { render } from "@testing-library/react";
import { v4 as uuid } from 'uuid';

it("renders without crashing", function() {
    const id = uuid()
    const mockRemove = jest.fn()
    render(<Todo todo="Wash clothes" id={id} key={id} removeTodo={mockRemove} />)
})

it("matches snapshot", function() {
    const id = uuid()
    const mockRemove = jest.fn()

    const { asFragment } = render(<Todo todo="Wash clothes" id={id} key={id} removeTodo={mockRemove} />)
    expect(asFragment()).toMatchSnapshot()
})