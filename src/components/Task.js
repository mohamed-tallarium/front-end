//create react component
import React from 'react';

const Task = (props) => {
    // Destructure the props to extract id, title, and description
    const { id, title, description } = props;

    // Return JSX that displays the id, title, and description
    return (
        <div className="task">
            <h3>Task ID: {id}</h3>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Task;