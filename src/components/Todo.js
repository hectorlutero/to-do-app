import React from 'react';

function Todo({ todo, removeTodo, addTodo }) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [todoText, setTodoText] = React.useState(todo.text);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setTodoText(todo.text);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        addTodo(todo.id, todoText);
    };

    const handleDeleteClick = () => {
        removeTodo(todo.id);
    };

    return (
        <li>
            {isEditing ? (
                <div>
                    <input type="text" value={todoText} onChange={(event) => setTodoText(event.target.value)} />
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <div>
                    <input type="checkbox" checked={todo.completed} />
                    <span>{todo.text}</span>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick}>Delete</button>
                </div>
            )}
        </li>
    );
}

export default Todo;
