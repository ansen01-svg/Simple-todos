import TypoGraphy from '../reusable_components/typography';
import { Wrapper } from '../styled_components';


const TodosComponentHeader = ({ title }) => {
    return (
        <Wrapper
            height='56px'
            justifyContent='flex-start'
        >
            <TypoGraphy variant='h5' title={title} />
        </Wrapper>
    )
}


export default TodosComponentHeader;