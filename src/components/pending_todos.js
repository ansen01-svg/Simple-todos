import ClearIcon from '@mui/icons-material/Clear';
import { red } from '@mui/material/colors';
import TextButton from '../reusable_components/text_button';
import TodosComponentHeader from '../reusable_components/todos_comp_header';
import TodosHolder from '../reusable_components/todos_holder';
import TypoGraphy from '../reusable_components/typography';
import { Wrapper } from '../styled_components';


const PendingTodos = ({ tasks }) => {
    return (
        <Wrapper 
            width='70%'
            flexDirection='column'
            justifyContent='flex-start'
            gap='20px'
        >
            <TodosHeader />
            <TodosHolder 
                tasks={tasks} 
                status='pending' 
            />
        </Wrapper>
    )
}

const TodosHeader = () => {
    return (
        <TodosComponentHeader>
            <HeaderTitleHolder />
            <ClearButtonHolder />
        </TodosComponentHeader>
    )
}

const HeaderTitleHolder = () => {
    return (
        <Wrapper
            width='30%'
            justifyContent='flex-start'
        >
            <TypoGraphy variant='h5' title='Pending Tasks' />
        </Wrapper>
    )
}

const ClearButtonHolder = () => {
    return (
        <Wrapper
            width='26%'
        >
            <TextButton 
                icon={<ClearIcon fontSize='small' />}
                title='Clear all' 
                color={red[500]}              
            />
        </Wrapper>
    )
}


export default PendingTodos;