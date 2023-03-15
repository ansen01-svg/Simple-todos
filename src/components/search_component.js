import TodosForm from '../reusable_components/todo_form';
import { Wrapper } from '../styled_components';


const SearchComponent = () => {
    return (
        <Wrapper height='200px' borderBottom='0.1px solid gray'>
            <InputHolder />
        </Wrapper>
    )
}

const InputHolder = () => {
    return (
        <Wrapper 
            height='70px'
            width='70%'
        >
            <TodosForm />
        </Wrapper>
    )
}


export default SearchComponent;