import { useState } from 'react'

import './index.css'

function GraphicsSections() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  // helper function
  const addTask = () => {
    if (!task.trim()) return

    setTasks([...tasks, task])
    setTask('')
  }

  return (
    <>
      <h1>My to do list</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {/* <ul>
        {task.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </>
  )
}

export default GraphicsSections
