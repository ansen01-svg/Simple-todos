import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { deleteTask, editStatus } from '../redux/task_slice';
import TextButton from '../reusable_components/text_button';
import TypoGraphy from '../reusable_components/typography';
import { FlexibleHeightWrapper, Wrapper } from '../styled_components';
import CheckBox from './checkbox';
import MessageHolder from './message_holder';


const TodosHolder = ({ tasks, status }) => {

    if(tasks.length <= 0) {
        return (
            <FlexibleHeightWrapper>
                <MessageHolder 
                    message={status === 'pending' ? 'No pending tasks.' : 'No task has been completed.'} 
                />
            </FlexibleHeightWrapper>
        )
    }

    return (
        <FlexibleHeightWrapper
            backgroundColor='var(--background_color2)'
            flexDirection='column'
        >
            {
                tasks.map((task) => <Task key={task.id} task={task} />)
            }
        </FlexibleHeightWrapper>
    )
}

const Task = ({ task }) => {
    return (
        <Wrapper
            height='70px'
            borderBottom='0.1px solid var(--border_color)'
        >
            <CheckboxHolder task={task} />
            <TitleHolder title={task.task} />
            <ButtonsHolder task={task} />
        </Wrapper>
    )
}

const CheckboxHolder = ({ task }) => {

    const dispatch = useDispatch();

    const handleChange = (id) => dispatch(editStatus(id));

    return (
        <Wrapper
            width='5%'
        >
            <CheckBox
                color='#1976d2'
                checkedFactor={task}
                handleChange={handleChange}
            />
        </Wrapper>
    )
}

const TitleHolder = ({ title }) => {
    return (
        <Wrapper
            width='65%'
            justifyContent='flex-start'
            padding='0 0 0 20px'
        >
            <TypoGraphy variant='body1' title={title} textColor='#B2BAC2' />
            {/* <Input /> */}
        </Wrapper>
    )
}

const ButtonsHolder = ({ task }) => {

    const dispatch = useDispatch();

    const deleteSingleTask = () => dispatch(deleteTask(task.id));

    return (
        <Wrapper
            width='30%'
            gap='10px'
        >
            <TextButton 
                title='Delete' 
                color={red[500]} 
                handleClick={deleteSingleTask}
            />
        </Wrapper>
    )
}


export default TodosHolder;