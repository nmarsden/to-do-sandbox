import React from "react";
import "./Todo.css";

export default function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div
            data-testid={`todo-${index}`}
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <button data-testid={`todo-complete-${index}`} onClick={() => completeTodo(index)}>Complete</button>
                <button data-testid={`todo-remove-${index}`} onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
}