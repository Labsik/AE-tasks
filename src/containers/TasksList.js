import React from "react";
import {useSelector } from "react-redux";


function TasksList() {
  const tasks = useSelector(state => state.allTasks.tasks)

  const totalTime = tasks?.reduce((sum, task) => sum + task.time, 0)


    return (
        <div>
            <p id="total">
            Total time: {totalTime} seconds
            </p>
            <ul>
                {tasks.map(task => (
                     <li key={task.id} className="task">
                     <span className="id">{task.id}</span> {'  '}
                     <span className="name">{task.name}</span> {'  '}
                     <span className="time">{task.time}</span> {'  '}
                 </li>
                ))}
            </ul>
        </div>
    )
}

export default TasksList;
