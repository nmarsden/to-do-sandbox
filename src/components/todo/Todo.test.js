import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';
import React from "react";

describe("Todo", () => {
  const completeTodoHandler = jest.fn();
  const removeTodoHandler = jest.fn();

  beforeEach(() => {
    const todo = {
      text: 'Bread',
      isCompleted: true
    };

    render(<Todo index={0} todo={todo} completeTodo={completeTodoHandler} removeTodo={removeTodoHandler}/>);
  });

  test('should render text', () => {
    expect(screen.getByTestId('todo-0')).toHaveTextContent('Bread');
  });

  test('should render as completed', () => {
    expect(screen.getByTestId('todo-0')).toHaveStyle('textDecoration: line-through');
  });

  test('should call completeTodo handler', () => {
    userEvent.click(screen.getByTestId('todo-complete-0'));

    expect(completeTodoHandler).toHaveBeenCalledTimes(1)
  });

  test('should call removeTodo handler', () => {
    userEvent.click(screen.getByTestId('todo-remove-0'));

    expect(removeTodoHandler).toHaveBeenCalledTimes(1)
  });
});
