import TypoGraphy from '../reusable_components/typography';
import { Wrapper } from '../styled_components';


const Nav = () => {
    return (
        <Wrapper height={'80px'}>
            <NavCenter />
        </Wrapper>
    )
}

const NavCenter = () => {
    return (
        <Wrapper
            justifyContent={'flex-start'}
            padding={'0 0 0 40px'}
            borderBottom={'0.1px solid var(--border_color)'}
        >
            <TypoGraphy variant='h4' title='Task Tracker' />
        </Wrapper>
    )
}


export default Nav;