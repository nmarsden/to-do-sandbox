import React from "react";
import "./TodoForm.css";

export default function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                data-testid={'todoForm-inputField'}
                className="input-text"
                type="text"
                placeholder="Add todo"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}