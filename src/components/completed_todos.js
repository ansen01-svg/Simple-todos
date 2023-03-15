import TodosComponentHeader from '../reusable_components/todos_comp_header';
import TodosHolder from '../reusable_components/todos_holder';
import { Wrapper } from '../styled_components';

const CompletedTodos = () => {
    return (
        <Wrapper
            width='70%'
            flexDirection='column'
            justifyContent='flex-start'
            gap='20px'
        >
            <TodosComponentHeader title='Completed Tasks' />
            <TodosHolder />
        </Wrapper>
    )
}


export default CompletedTodos;