import './App.css';
import {TaskWrapper} from "./components/TaskWrapper";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Task Manager</h1>
            <TaskWrapper />
        </header>
    </div>
  );
}

export default App;
