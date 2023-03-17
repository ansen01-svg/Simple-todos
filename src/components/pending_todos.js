import ClearIcon from '@mui/icons-material/Clear';
import { red } from '@mui/material/colors';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { clearAllTasks } from '../redux/task_slice';
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

const TodosHeader = memo(() => {

    const TitleHolder = useCallback(() => <HeaderTitleHolder />, [])
    const ButtonHolder = useCallback(() => <ClearButtonHolder />, [])

    return (
        <TodosComponentHeader>
            <TitleHolder />
            <ButtonHolder />
        </TodosComponentHeader>
    )
});

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

    const dispatch = useDispatch();

    const clearTasks = () => dispatch(clearAllTasks());

    return (
        <Wrapper
            width='22%'
        >
            <TextButton 
                icon={<ClearIcon fontSize='small' />}
                title='Clear all' 
                color={red[500]}   
                handleClick={clearTasks}           
            />
        </Wrapper>
    )
}


export default PendingTodos;