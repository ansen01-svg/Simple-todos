import { Wrapper } from '../styled_components';


const SearchComponent = () => {
    return (
        <Wrapper height='200px'>
            <InputHolder />
        </Wrapper>
    )
}

const InputHolder = () => {
    return (
        <Wrapper borderBottom='0.1px solid gray'>
            <Input />
        </Wrapper>
    )
}

const Input = () => {
    return (
        <input></input>
    )
}


export default SearchComponent;