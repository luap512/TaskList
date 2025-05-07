import styles from '../TaskForm/TaskForm.module.css';
import { useState } from 'react';

function TaskForm({onSubmit}) {

    const[name, setName] = useState("");
    const[urgency, setUrgency] = useState("0");
    const[importance, setImportance] = useState("0");
    const[dueDate, setDueDate] = useState("");

    function handleFormSubmit(event){

        event.preventDefault();
        
        const newTask ={

            id:Date.now(),
            name:name,
            urgency:urgency,
            importance:importance,
            dueDate:dueDate,
            completed:false
        }

        console.log("SUBMITTING TASK: ", newTask)
        onSubmit(newTask)
        resetForm();
    }

    function resetForm(){

        setName("");
        setUrgency("0");
        setImportance("0");
        setDueDate("");

    }
    
  return (
    <>
      <div className={styles.formDiv}>
        <form onSubmit={handleFormSubmit} className={styles.taskForm}>
            <div className={styles.inputDiv}>
                <label className={styles.formLabel} for="tname">Task name: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} className={styles.formInput} type="text" id="tname" name="tname"></input>
            </div>
            <div className={styles.dropdownDiv}>
                <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className={styles.selectionMenu}>
                    <option value="0" className={styles.menuOption}>Urgent</option>
                    <option value="1" className={styles.menuOption}>Not Urgent</option>
                </select>
            </div>
            <div className={styles.dropdownDiv}>
                <select value={importance} onChange={(e) => setImportance(e.target.value)} className={styles.selectionMenu}>
                    <option value="0" className={styles.menuOption}>Important</option>
                    <option value="1" className={styles.menuOption}>Not Important</option>
                </select>
            </div>
            <div className={styles.dateDiv}>
                <label className={styles.dueDatelabel} for="dueDate">Due date: </label>
                <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} className={styles.dueDateInput} type="date" id="dueDate" name="dueDate"></input>
                <input type="submit" value="submit"></input>
            </div>
        </form>
      </div>
    </>
  )
}
export default TaskForm;
