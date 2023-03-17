import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/task_slice';
import TodosForm from '../reusable_components/todo_form';
import { Wrapper } from '../styled_components';


const SearchComponent = () => {
    return (
        <Wrapper height='200px'>
            <InputHolder />
        </Wrapper>
    )
}

const InputHolder = () => {

    let [value, setValue] = useState('')

    let dispatch = useDispatch();

    let handleSubmit = (e) => {
        e.preventDefault();

        if(!value) return;
        dispatch(addTask(value));
        setValue('');
    };

    return (
        <Wrapper 
            height='70px'
            width='70%'
        >
            <TodosForm
                value={value}
                setValue={setValue}
                handleSubmit={handleSubmit}
            />
        </Wrapper>
    )
}


export default SearchComponent;