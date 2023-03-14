import { Wrapper } from '../styled_components';
import CompletedTodos from './completed_todos';
import PendingTodos from './pending_todos';


const TodosComponent = () => {
    return (
        <Wrapper height='529px' borderBottom='1px solid red'>
            <PendingTodos />
            <CompletedTodos />
        </Wrapper>
    )
}


export default TodosComponent;