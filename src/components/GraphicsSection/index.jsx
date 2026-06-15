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
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}> To Do List</h2>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add a task...."
          value={task}
          onChange={(error) => setTask(error.target.value)}
          onKeyDown={(error) => {
            if (error.key === 'Enter') {
              addTask()
            }
          }}
        />
        <button className={styles.addButton} onClick={addTask}>
          Add
        </button>
      </div>
      <div className="items-container">
        <div />

        <ul className={styles.toDoList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.toDoItem}>
              <div className={styles.taskcontent}>
                <input type="checkout" checked={task.completed} onChange={() => toggleTask(task.id)}></input>
                <span className={task.completed ? styles.completed : ''}> {task.text} </span>
              </div>
              <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <p className={styles.taskCount}>Total Tasks: {tasks.length}</p>
      </div>
    </div>
  )
}

export default GraphicsSections
