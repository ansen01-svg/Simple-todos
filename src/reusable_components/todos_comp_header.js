import { memo } from 'react';
import { Wrapper } from '../styled_components';


const TodosComponentHeader = memo(({ children }) => {
    return (
        <Wrapper
            height='56px'
            justifyContent='space-between'
        >
            { children }
        </Wrapper>
    )
});


export default TodosComponentHeader;