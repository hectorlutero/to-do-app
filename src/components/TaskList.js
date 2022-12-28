import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onTaskDelete, onTaskEdit }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onComplete={onTaskComplete}
                    onDelete={onTaskDelete}
                    onTaskEdit={onTaskEdit}
                />
            ))}
        </ul>
    );
};

export default TaskList;
