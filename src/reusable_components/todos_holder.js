import { Checkbox } from '@mui/material';
import { red } from '@mui/material/colors';
import TextButton from '../reusable_components/text_button';
import TypoGraphy from '../reusable_components/typography';
import { FlexibleHeightWrapper, Wrapper } from '../styled_components';
import { tasks } from '../utils/tasks';


const TodosHolder = () => {
    return (
        <FlexibleHeightWrapper
            backgroundColor='var(--background_color2)'
            flexDirection='column'
        >
            {
                tasks.length > 0 && tasks.map((task) => <Task key={task.id} task={task} />)
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
            <CheckboxHolder status={task.completed} />
            <TitleHolder title={task.task} />
            <ButtonsHolder />
        </Wrapper>
    )
}

const CheckboxHolder = ({ status }) => {
    return (
        <Wrapper
            width='5%'
        >
            <Checkbox 
                size='extraSmall'
                sx={{
                    color: '#1976d2',
                    '&.Mui-checked': {
                      color: '#1976d2',
                    },
                }}
                // checked={status ? true : false}
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

const ButtonsHolder = () => {
    return (
        <Wrapper
            width='30%'
            gap='10px'
        >
            <TextButton title='Edit' />
            <TextButton title='Delete' color={red[500]} />
        </Wrapper>
    )
}


export default TodosHolder;