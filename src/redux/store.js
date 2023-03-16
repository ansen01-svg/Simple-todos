import { configureStore } from '@reduxjs/toolkit';
import reducer from './task_slice';


const store = configureStore({
    reducer: {
        tasksReducer: reducer,
    }
});


export default store;