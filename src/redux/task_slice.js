import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const TaskSlice = createSlice({
    name: 'Tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: (state, { payload }) => {
            const newTask = {
                id: uuidv4(),
                task: payload,
                completed: false
            }

            state.tasks = [...state.tasks, newTask];
        },
        editStatus: (state, { payload }) => {
            const newTasks = state.tasks.map(task => {
                if(task.id !== payload.id) return task;

                if(!task.completed) {
                    return { ...task, completed: true };
                } else {
                    return { ...task, completed: false };
                }
            });

            state.tasks = newTasks;
        },
        editTask: (state, { payload }) => {
            let newTasks = state.tasks.map(task => {
                if (task.id !== payload.id) return task;

                return { ...task, task: payload.task };
            });

            state.tasks = newTasks;
        },
        deleteTask: (state, { payload }) => {
            let newTasks = state.tasks.filter(task => task.id !== payload)

            state.tasks = newTasks;
        },
        clearAllTasks: (state) => {
            state.tasks = [];
        }
    }
});

export const { addTask, editTask, deleteTask, clearAllTasks } = TaskSlice.actions;


export default TaskSlice.reducer;