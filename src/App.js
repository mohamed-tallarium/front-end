import './App.css';
import TaskWrapper from "./components/TaskWrapper";

function App() {

    // Define a list of tasks
    const tasks = [
        { id: 1, title: 'first title', description: 'Description 1' },
        { id: 2, title: 'second title', description: 'Description 2' },
        { id: 3, title: 'third title', description: 'Description 3' }
    ];

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
