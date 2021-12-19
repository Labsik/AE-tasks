import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/reducer";

function TaskCreator() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.allTasks.tasks)

    const [name, setName] = useState('');
    const [time, setTime] = useState(0)
    const [timer, setTimer] = useState(0);


    const startTimer = () => {
       if(timer === 0) {
        setTimer(setInterval(() =>{ setTime(prevTime => parseInt(prevTime) + 1) }, 1000));
     }
   }

    const addNewTask = () => {
    const newTask = {id: tasks?.length +1 , name, time}
    if(timer !== 0) clearInterval(timer);
    if(time !== 0 && name !== '') {
        dispatch(addTask(newTask))
        setName('');
        setTime(0);
        setTimer(0);
     }
}

    const handleFocus= () => {
     if(timer !== 0) {
      clearInterval(timer);
      setTimer(0);
     }
    };


    return (
        <div>
            <label>
                Task name
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="taskName"
                type="text"/>
            </label>
            <label>
                Time elapsed
                <input
                onChange={(e) => setTime(+e.target.value)}
                onFocus={handleFocus}
                value={time}
                id="timeField"
                type="number"/>
            </label>
            <button type="button" id="start" onClick={startTimer}>START</button>
            <button type="button" id="stop" onClick={addNewTask}>STOP</button>
        </div>
    )
}

export default TaskCreator;
