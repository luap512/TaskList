
import styles from '../TaskList/TaskList.module.css';
import Task from '../Task/Task';

function TaskList({ tasks }) {

  return (
    <>
      <div className={styles.taskListDiv}>
        {tasks.map(task => (
            <Task key={task.id} taskName={task.name} dueDate={task.dueDate} urgency={task.urgency} importance={task.importance} completed={task.completed}/>
        ))}
      </div>
    </>
  )
}

export default TaskList;
