import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("App", () => {
  test('should render input field', () => {
    render(<App />);
    expect(screen.getByTestId('todoForm-inputField')).toBeInTheDocument();
  });

  test('should be able to add a todo', () => {
    render(<App />);
    expect(screen.queryByTestId('todo-0')).toBeNull();

    userEvent.type(screen.getByTestId('todoForm-inputField'), 'Bread{enter}');

    expect(screen.getByTestId('todo-0')).toHaveTextContent('Bread');
  });

  test('should be able to remove a todo', () => {
    render(<App />);
    userEvent.type(screen.getByTestId('todoForm-inputField'), 'Bread{enter}');

    expect(screen.getByTestId('todo-0')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('todo-remove-0'));

    expect(screen.queryByTestId('todo-0')).toBeNull();
  });

  test('should be able to complete a todo', () => {
    render(<App />);
    userEvent.type(screen.getByTestId('todoForm-inputField'), 'Bread{enter}');

    expect(screen.getByTestId('todo-0')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('todo-complete-0'));

    expect(screen.getByTestId('todo-0')).toHaveStyle('textDecoration: line-through');
  });

});
