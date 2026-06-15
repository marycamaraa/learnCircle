import { useState } from 'react'
import styles from './index.module.css'

function GraphicsSections() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  // function hold the logic. funtion will run when a user clicks the add button
  const addTask = () => {
    if (!task.trim() === '') return // trim removes white space from beginning to end

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    }
    setTasks([...tasks, task]) // spread operator copies all existing items and add new task
    setTask('') // clears the input field after adding task
  }

  //delete function
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete))
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}> To Do List</h2>
      <div className={styles.inputContainer}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="enter a task" />
        <button className={styles.button} onClick={addTask}>
          Add
        </button>
      </div>
      <div className="items-container">
        <div />
        <ul className={styles.toDoList}>
          {tasks.map((item, index) => (
            <li className={styles.toDoListItem} key={index}>
              <span> {item} </span>
              <button className={styles.deleteButton} onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GraphicsSections
