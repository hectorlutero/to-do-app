# to-do-app


# File Structure

```
todo-app/
  public/
    index.html
  src/
    components/
      TodoList.js
      TodoItem.js
      AddTodoForm.js
      EditTodoForm.js
      TodoFilter.js
    actions/
      todos.js
    reducers/
      todos.js
    services/
      api.js
    App.js
    index.js
  package.json
  README.md

```

index.js

```javascript

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

render(<App />, document.getElementById('root'));

```



```javascript

import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import TodoFilter from './components/TodoFilter';

const App = () => {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
};

export default App;

```

API.js

```javascript
import axios from 'axios';

export const getTodos = () => {
  return axios.get('/api/todos');
};

```

AddTodoForm

```javascript

import React, { useState } from 'react';

const AddTodoForm = () => {
  const [todoText, setTodoText] = useState('');

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch an action to add the todo
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={handleChange}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;


```


TodoFilter

```javascript

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../actions/todos';

const TodoFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className="todo-filter">
      <label>
        Filter:
        <select value={filter} onChange={handleChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </label>
    </div>
  );
};

export default TodoFilter;

```

TodoList

```javascript

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodo } from '../actions/todos';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;

```

Action todo.js

```javascript

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});


```

Reducers todo.js

```javascript

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});


```
