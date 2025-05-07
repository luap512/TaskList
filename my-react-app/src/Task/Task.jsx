
import styles from '../Task/Task.module.css';

function Task({taskName, dueDate, urgency, importance, completed, onToggle}) {

  const urgencyText = urgency === "0" ? "Urgent" : "Not Urgent";
  const importanceText = importance === "0" ? "Important" : "Not Important";


  return (
    <>
      <div className={styles.taskCardDiv}>
        <div className={styles.taskNameDiv}>
            <p className={styles.taskNameP}>{taskName}</p>
        </div>
        <div className={styles.taskUrgencyDiv}>
            <p className={styles.taskUrgencyP}>{urgencyText}</p>
        </div>
        <div className={styles.taskImportanceDiv}>
            <p className={styles.taskImportanceP}>{importanceText}</p>
        </div>
        <div className={styles.taskDueDateDiv}>
            <p className={styles.taskDueDateP}>{dueDate}</p>
        </div>
        <div className={styles.taskCompletionCheckBoxDiv}>
            <label>
              <input type="checkbox"
              checked={completed}
              onChange={onToggle}
              />
              {completed ? "Done" : "Incomplete"}
            </label>
        </div>
      </div>
    </>
  )
}

export default Task;
