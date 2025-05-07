
import './App.css'
import TaskForm from './TaskForm/TaskForm';
import TaskFilter from './TaskFilter/TaskFilter';
import TaskList from './TaskList/TaskList';
import {useState, useEffect} from 'react';


function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all")

  function addTask(newtask){
    setTasks([...tasks, newtask])

  }
  function toggleCompleted(id){

  }
  function changeFilter(value){

  }

  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <TaskFilter/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
