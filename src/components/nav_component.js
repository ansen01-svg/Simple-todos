import Image from '../reusable_components/image';
import TypoGraphy from '../reusable_components/typography';
import { Wrapper } from '../styled_components';
import src from '../utils/logo.png';


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
            gap='20px'
        >
            <ImageHolder />
            <TypoGraphy variant='h5' title='Task Tracker' />
        </Wrapper>
    )
}

const ImageHolder = () => {
    return (
        <div>
            <Image src={src} alt='logo' />
        </div>
    )
}


export default Nav;