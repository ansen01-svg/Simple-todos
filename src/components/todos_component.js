import { FlexibleHeightWrapper } from '../styled_components';
import CompletedTodos from './completed_todos';
import PendingTodos from './pending_todos';


const TodosComponent = () => {
    return (
        <FlexibleHeightWrapper 
            // height='529px' 
            flexDirection='column'
        >
            <PendingTodos />
            <CompletedTodos />
        </FlexibleHeightWrapper>
    )
}


export default TodosComponent;