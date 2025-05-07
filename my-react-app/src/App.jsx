import'./App.css';
import TaskForm from './TaskForm/TaskForm';
import TaskFilter from './TaskFilter/TaskFilter';
import TaskList from './TaskList/TaskList';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  function addTask(newtask) {
    setTasks([...tasks, newtask]);
  }

  function toggleCompleted(id) {
    // Task completion toggling logic
    setTasks(prevtasks =>
      prevtasks.map(task=>
        task.id === id ? {...task, completed: !task.completed} : task
      )
    );
  }

  function changeFilter(value) {
    setFilter(value);
  }

  return (
    <div>
      {/* Left Half: Task Form */}
      <div>
        <TaskForm onSubmit={addTask} />
      </div>
      
      {/* Right Half: Task List and Filter */}
      <div>
        <div>
          <TaskFilter />
        </div>
        <div>
          <TaskList tasks={tasks} onToggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;
