import React, { useState } from 'react';
import TaskList from './components/TaskList';

const App = () => {
    // Declare a state variable for the tasks
    const [tasks, setTasks] = useState([]);
    // Declare a state variable for the input field
    const [taskDescription, setTaskDescription] = useState('');

    // Method to add a new task
    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    // Method to mark a task as complete
    const markTaskComplete = (taskId) => {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, isComplete: true };
            }
            return task;
        }));
    }

    // Method to delete a task
    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    const editTask = (taskId, newDescription) => {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, description: newDescription };
            }
            return task;
        }));
    }

    return (
        <div className="todo-app">
            <TaskList
                tasks={tasks}
                onTaskComplete={markTaskComplete}
                onTaskDelete={deleteTask}
                onTaskEdit={editTask}
            />
            <div>
                <input
                    type="text"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <button onClick={() => addTask({ id: Date.now(), description: taskDescription })}>
                    Add task
                </button>
            </div>
        </div>
    );
};

export default App;
