import './App.css';
import React, { useState, useEffect } from 'react';
import TaskWrapper from "./components/TaskWrapper";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch tasks when the component mounts
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/tasks');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                const defaultTasks = [
                    {
                        id: 1,
                        title: 'Default Task',
                        description: 'This is a default task number 1'
                    },
                    {
                        id: 2,
                        title: 'Default Task',
                        description: 'This is a default task number 2'
                    },
                    {
                        id: 3,
                        title: 'Default Task',
                        description: 'This is a default task number 3'
                    }
                ];
                setTasks(defaultTasks);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks().then()
    }, []);

    // Display loading message or error if any
    if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="App">
        <header className="App-header">
            <h1>Task Manager</h1>
            <TaskWrapper tasks={tasks} />
        </header>
    </div>
  );
}

export default App;
