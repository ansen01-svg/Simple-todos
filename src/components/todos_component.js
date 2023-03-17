import { useSelector } from 'react-redux';
import useFilterTasks from '../hooks/useFilter';
import MessageHolder from '../reusable_components/message_holder';
import { FlexibleHeightWrapper } from '../styled_components';
import CompletedTodos from './completed_todos';
import PendingTodos from './pending_todos';


const TodosComponent = () => {

    const { tasks } = useSelector(state => state.tasksReducer);

    const { pendingTasks, completedTasks } = useFilterTasks(tasks);

    if(tasks.length <= 0) {
        return (
            <FlexibleHeightWrapper>
                <MessageHolder message='You have no task.' />
            </FlexibleHeightWrapper>
        )
    }

    return (
        <FlexibleHeightWrapper
            flexDirection='column'
        >
            <PendingTodos tasks={pendingTasks} />
            <CompletedTodos tasks={completedTasks} />
        </FlexibleHeightWrapper>
    )
}


export default TodosComponent;