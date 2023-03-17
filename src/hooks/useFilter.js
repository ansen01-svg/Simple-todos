import { useMemo } from 'react';


const useFilterTasks = (tasks) => {
    return useMemo(() => {
        let pendingTasks = [];
        let completedTasks = [];

        if(tasks.length <= 0) return { pendingTasks, completedTasks };
        
        pendingTasks = tasks.filter(task => task.completed === false);
        completedTasks = tasks.filter(task => task.completed === true);

        return { pendingTasks, completedTasks };
    }, [tasks])
}


export default useFilterTasks;