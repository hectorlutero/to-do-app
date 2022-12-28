import React from 'react';
import Todo from './Todo';

function TodoForm({ todos, removeTodo, addTodo }) {
    const [text, setText] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    };


    return (
        <form onSubmit={handleSubmit}>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} addTodo={addTodo} />
            ))}
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
