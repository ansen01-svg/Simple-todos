import TypoGraphy from '../reusable_components/typography';
import { Wrapper } from '../styled_components';


const MessageHolder = ({ message }) => {
    return (
        <Wrapper height='56px'>
            <TypoGraphy 
                variant='body2'
                textColor='#B2BAC2'
                title={message}
            />
        </Wrapper>
    )
}


export default MessageHolder;