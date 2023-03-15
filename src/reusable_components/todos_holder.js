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
                tasks.length > 0 && tasks.map((task) => <Task key={task.id} title={task.task} />)
            }
        </FlexibleHeightWrapper>
    )
}

const Task = ({ title }) => {
    return (
        <Wrapper
            height='70px'
            borderBottom='0.1px solid var(--border_color)'
        >
            <TitleHolder title={title} />
            <ButtonsHolder />
        </Wrapper>
    )
}

const TitleHolder = ({ title }) => {
    return (
        <Wrapper
            width='70%'
            justifyContent='flex-start'
            padding='0 0 0 20px'
        >
            <TypoGraphy variant='body1' title={title} textColor='#B2BAC2' />
        </Wrapper>
    )
}

const ButtonsHolder = () => {
    return (
        <Wrapper
            width='30%'
            gap='10px'
        >
            <TextButton width='40%' height='60%' title='Edit' />
            <TextButton width='40%' height='60%' title='Delete' color={red[500]} />
        </Wrapper>
    )
}


export default TodosHolder;