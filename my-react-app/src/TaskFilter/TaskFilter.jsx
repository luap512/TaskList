
import styles from '../TaskFilter/TaskFilter.module.css';

function TaskFilter() {

  return (
    <>
      <div className={styles.tableDiv}>
        <table className={styles.buttonTable}>
            <tr className={styles.tableRow}>
                <td className={styles.tableCell}>
                    <button className={styles.filterButton}>ALL</button>
                </td>
                <td className={styles.tableCell}>
                    <button className={styles.filterButton}>ACTIVE</button>
                </td>
                <td className={styles.tableCell}>
                    <button className={styles.filterButton}>COMPLETED</button>
                </td>
            </tr>
        </table>
      </div>
    </>
  )
}

export default TaskFilter;
