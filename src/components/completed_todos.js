import TodosComponentHeader from '../reusable_components/todos_comp_header';
import TodosHolder from '../reusable_components/todos_holder';
import TypoGraphy from '../reusable_components/typography';
import { Wrapper } from '../styled_components';


const CompletedTodos = ({ tasks }) => {
    return (
        <Wrapper
            width='70%'
            flexDirection='column'
            justifyContent='flex-start'
            gap='20px'
        >
            <TodosHeader />
            <TodosHolder  tasks={tasks} />
        </Wrapper>
    )
}

const TodosHeader = () => {
    return (
        <TodosComponentHeader>
            <HeaderTitleHolder />
        </TodosComponentHeader>
    )
}

const HeaderTitleHolder = () => {
    return (
        <Wrapper
            width='30%'
            justifyContent='flex-start'
        >
            <TypoGraphy variant='h5' title='Completed Tasks' />
        </Wrapper>
    )
}


export default CompletedTodos;