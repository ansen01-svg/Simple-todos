import { Form } from "../styled_components";
import TodosInput from "./add_input";
import AddButton from "./contained_button";


const TodosForm = ({ value, setValue, handleSubmit }) => {
    return (
        <Form
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
        >
            <TodosInput 
                value={value}
                setValue={setValue}
            />
            <AddButton 
                width='15%' 
                height='56px' 
                title='Add' 
            />
        </Form>
    )
}


export default TodosForm;