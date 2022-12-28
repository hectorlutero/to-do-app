import React, { useState } from 'react';

const TaskItem = ({ task, onComplete, onDelete, onTaskEdit }) => {
    // Declare a state variable for the edit mode
    const [isEditMode, setEditMode] = useState(false);
    // Declare a state variable for the input field
    const [taskDescription, setTaskDescription] = useState(task.description);

    // Method to save the edited task
    const saveTask = () => {
        onTaskEdit(task.id, taskDescription);
        setEditMode(false);
        setTaskDescription(task.description);
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={task.isComplete}
                onChange={() => onComplete(task.id)}
            />
            {isEditMode ? (
                <>
                    <input
                        type="text"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    />
                    <button onClick={saveTask}>Save</button>
                </>
            ) : (
                <>
                    <span>{task.description}</span>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </>
            )}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;
