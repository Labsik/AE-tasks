import { combineReducers } from "redux"

const initialState = {
    tasks: [{id: 1, name: 'First task', time: 4}, {id: 2, name: 'Another task', time: 2}],
}

const FETCH_ALL_TASKS = 'FETCH_ALL_TASKS'
const ADD_NEW_TASK = 'ADD_NEW_TASK'

const tasksReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
    case FETCH_ALL_TASKS:
    return {...state, tasks: payload};
    case ADD_NEW_TASK:
    return {...state,   tasks: [...state.tasks, payload]};
    default: return state
}
}

export const addTask = (payload) => ({
    type: ADD_NEW_TASK,
    payload
})


export const rootReducer = combineReducers({
   allTasks:tasksReducer,
  });
