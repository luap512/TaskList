import styles from './App.css';
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
  }

  function changeFilter(value) {
    setFilter(value);
  }

  return (
    <div className={styles.appContainer}>
      {/* Left Half: Task Form */}
      <div className={styles.taskFormDiv}>
        <TaskForm onSubmit={addTask} />
      </div>
      
      {/* Right Half: Task List and Filter */}
      <div className={styles.taskListDiv}>
        <div className={styles.filterBarDiv}>
          <TaskFilter />
        </div>
        <div className={styles.taskList}>
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
