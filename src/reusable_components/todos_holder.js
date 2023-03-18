import { red } from '@mui/material/colors';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editStatus, editTask } from '../redux/task_slice';
import TextButton from '../reusable_components/text_button';
import { FlexibleHeightWrapper, Wrapper } from '../styled_components';
import CheckBox from './checkbox';
import MessageHolder from './message_holder';
import Input from './normal_input';


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
            <TitleHolder task={task} />
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

const TitleHolder = ({ task }) => {

    const [title, setTitle] = useState(task.task);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        let newTitle = e.target.value;
        setTitle(newTitle);

        setTimeout(() => {
            const editedTask = { id: task.id, task: newTitle }
            dispatch(editTask(editedTask));
        }, 5000);
    };

    return (
        <Wrapper
            width='75%'
            justifyContent='flex-start'
            padding='0 0 0 20px'
        >
            <Input 
                type='text'
                value={title}
                textDecoration={task.completed ? 'line-through' : 'none'}
                textColor={task.completed ? '#4d5258' : '#B2BAC2'}
                handleChange={handleChange}
                disabled={task.completed ? true : false}
            />
        </Wrapper>
    )
}

const ButtonsHolder = ({ task }) => {

    const dispatch = useDispatch();

    const deleteSingleTask = () => dispatch(deleteTask(task.id));

    return (
        <Wrapper
            width='20%'
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