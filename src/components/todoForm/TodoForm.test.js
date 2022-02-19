import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from './TodoForm';
import React from "react";

describe("TodoForm", () => {
  const addTodoHandler = jest.fn();

  beforeEach(() => {
    render(<TodoForm addTodo={addTodoHandler}/>);
  });

  test('should render input field', () => {
    expect(screen.getByTestId('todoForm-inputField')).toBeInTheDocument();
  });

  test('should have placeholder', () => {
    expect(screen.getByTestId('todoForm-inputField')).toHaveProperty('placeholder', 'Add todo');
  });

  test('should not call addTodo handler when empty value entered', () => {
    userEvent.type(screen.getByTestId('todoForm-inputField'), '{enter}');

    expect(addTodoHandler).toHaveBeenCalledTimes(0)
  });

  test('should call addTodo handler when value entered', () => {
    userEvent.type(screen.getByTestId('todoForm-inputField'), 'Bread{enter}');

    expect(addTodoHandler).toHaveBeenCalledWith('Bread');
  });

  test('should clear value after addTodo handler called', () => {
    userEvent.type(screen.getByTestId('todoForm-inputField'), 'Bread{enter}');

    expect(addTodoHandler).toHaveBeenCalledWith('Bread');
    expect(screen.getByTestId('todoForm-inputField')).toHaveValue('');
  });
});
