//create react component
import React from 'react';
import Task from "./Task";

const TaskWrapper = ({ tasks }) => {
    return (
        <div className="task-wrapper">
            {tasks.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                />
            ))}
        </div>
    );
};

export default TaskWrapper;